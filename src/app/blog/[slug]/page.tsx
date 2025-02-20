"use client";
import { BlogPage } from "@/components/BlogPage";
import { BlogPageSkeleton } from "@/components/BlogPageSkeleton";
import { BlogCardProps, BlogData } from "@/interface/blogInterface";
import { blogData } from "@/libs/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const Page: React.FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const post = blogData.find((post: BlogData) => post._id === params.slug);
  return post ? (
    isLoading ? (
      <div className="w-full bg-black/10 dark:bg-blue-gray-900 p-5 rounded-xl animate-pulse">
        <BlogPageSkeleton />
      </div>
    ) : (
      <div className="w-full h-full flex justify-center items-center">
        <BlogPage data={post} />
      </div>
    )
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-2xl">No blogs found</h1>
    </div>
  );
};

export default Page;
