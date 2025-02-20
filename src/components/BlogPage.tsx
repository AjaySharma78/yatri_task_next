"use client";
import {BlogCardProps } from "@/interface/blogInterface";
import { formatDate } from "@/utility/format";
export const BlogPage: React.FC<BlogCardProps> = ({ data }) => {

  return data ? (
    <div className="py-8 dark:bg-black">
      <div className="w-full bg-black/10 dark:bg-blue-gray-900 p-5 rounded-xl ">
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${data.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
              className="rounded-xl h-48 md:h-[30rem]"
            >
            </div>
          </div>
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p>{data.summary} </p>
          <p className="text-gray-700 text-sm">Created At: {formatDate(data.createdAt)} | Read By : {data.read_by}</p>
        </div>
        <div className="browser-css">{data.description}</div>
      </div>
    </div>
  ) : null;
}