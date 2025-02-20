import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/utility/format';
import Image from 'next/image';
import apppwriteService from '@/appwrite/config';

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
export const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  
  return (
    <div
      key={data.$id}
      className={`bg-gray-800 rounded-lg shadow-md flex flex-col w-full`}
    >
    <Link
        href={`/blog/${data.$id}`}
        className={`w-full h-full relative`}
      >
        <Image
          src={`${apppwriteService.getFilePreview(data.featuredImage)}`}
          alt={data.title}
          width={300}
          height={200}
          priority
          className="w-full !h-52 object-cover rounded-md"
        />
      </Link>
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col items-start h-full px-2">
          <h3>
            <b>{data.title}</b>
          </h3>
          <div className="text-xs text-gray-500 font-medium">
            {data.status} | {formatDate(data.$createdAt)}
          </div>
        </div>

        </div>
        </div>
  )
}
