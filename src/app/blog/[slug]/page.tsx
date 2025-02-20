"use client";

import { BlogPage } from "@/components/BlogPage";
import { BlogPageSkeleton } from "@/components/BlogPageSkeleton";
import { BlogData } from "@/interface/blogInterface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";

const Page: React.FC = () => {
  const params = useParams();
  const slug = params.slug;
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<BlogData>();

  useEffect(() => {
    setIsLoading(true);
    if (slug) {
      appwriteService.getPost(slug as string).then((post) => {
        if (post) {
          setPost(post as BlogData);
        }
        setIsLoading(false); 
      }).catch((error) => {
        console.log("Page :: error", error);
        setIsLoading(false); 
      });
    } else {
      setIsLoading(false);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="w-full  bg-black/10 dark:bg-blue-gray-900 p-5 rounded-xl animate-pulse">
        <BlogPageSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      {post ? <BlogPage data={post} /> : <div>Post not found</div>}
    </div>
  );
};

export default Page;