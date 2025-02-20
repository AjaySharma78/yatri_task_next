"use client";
import { formatDate } from "@/utility/format";
import Image from "next/image";
import apppwriteService from "@/appwrite/config";
import parse from "html-react-parser";
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
interface BlogCardProps {
  data: BlogData;
}
export const BlogPage: React.FC<BlogCardProps> = ({ data }) => {

  return data ? (
    <div className="flex items-center justify-center py-8 dark:bg-black">
      <div className="w-11/12 bg-slate-800 dark:bg-blue-gray-900 p-5 rounded-xl ">
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <div className="w-full relative" style={{ height: "400px" }}>
            <Image
              src={`${apppwriteService.getFilePreview(data.featuredImage)}`}
              alt="thumbnail"
              fill
              priority
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-gray-600 text-sm">Created At: {formatDate(data.$createdAt)}</p>
        </div>
        <div className="browser-css">{parse(data.content)}</div>
      </div>
    </div>
  ) : null;
}