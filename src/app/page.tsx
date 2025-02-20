"use client";
import { BlogCard } from "@/components/BlogCard";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { Skeleton } from "@/components/Skeleton";
import appwriteService from "@/appwrite/config";

export interface BlogData {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: string[];
  $updatedAt: string;
  content: string;
  featuredImage: string;
  status: string;
  title: string;
  userId: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<BlogData[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
     try {
       await appwriteService
         .getPosts()
         .then((response) => {
           if (response && response.documents) {
             const res = response.documents;
             setPost(res as BlogData[]);
           }
         })
     } catch (error) {
        console.error("Home :: error", error);
     } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); 
      setIsLoading(false);
    }, 300);
  }, [search]);

  const filteredBlogs = post && post.filter((blog: BlogData) =>
    blog.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  ) ;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs && filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="w-full p-5">
      <SearchBar search={search} setSearch={setSearch} />
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-full">
          {[...Array(postsPerPage)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : currentPosts && currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-full">
          {currentPosts.map((data: BlogData) => (
            <div key={data.$id}>
              <BlogCard data={data} />
            </div>
          ))}
        </div>
      ) : currentPosts && currentPosts.length === 0 ?(
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-2xl">No posts found</h1>
        </div>
      ): null}
      <Pagination
        totalPosts={filteredBlogs ? filteredBlogs.length : 0}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}