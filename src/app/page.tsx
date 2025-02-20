"use client";
import { BlogCard } from "@/components/BlogCard";
import { blogData } from "@/libs/data";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useRef, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { Skeleton } from "@/components/Skeleton";
import { BlogData } from "@/interface/blogInterface";
export default function Home() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogData[]>(blogData);
  const postsPerPage = 5;
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    setLoading(true);
    debounceTimeout.current = setTimeout(() => {
      setDebouncedSearch(search);
      setLoading(false);
    }, 300); 
  }, [search]);

  useEffect(() => {
    setLoading(true);
    const filtered = blogData.filter((blog:BlogData) =>
      blog.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setLoading(false);
  }, [debouncedSearch]);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="w-full p-5">
      <SearchBar search={search} setSearch={setSearch} />
      {loading ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-full ">
         {[...Array(postsPerPage)].map((_, index) => (
           <Skeleton key={index} />
         ))}
       </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-full ">
          {currentBlogs.length>0?(currentBlogs.map((data:BlogData) => (
            <div key={data._id}>
              <BlogCard data={data} />
            </div>
          ))):(
            <div className="w-full h-screen flex items-center justify-center">
              <h1 className="text-2xl">No blogs found</h1>
            </div>
              )}
        </div>
      )}
      <Pagination
        totalPosts={filteredBlogs.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
