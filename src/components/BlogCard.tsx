import Link from 'next/link'
import React from 'react'
import { BlogCardProps } from '@/interface/blogInterface';
import { formatDate } from '@/utility/format';
import Image from 'next/image';
export const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
     
  return (
    <div
      key={data._id}
      className={`bg-gray-800 rounded-lg shadow-md flex flex-col w-full`}
    >
    <Link
        href={`/blog/${data._id}`}
        className={`w-full h-52 relative`}
      >
        <Image
          src={data.thumbnail}
          alt={data.title}
          className="w-full h-full object-cover rounded-md"
        />
      </Link>
      <div className="flex justify-between items-center p-2 h-20">
        <div className="flex flex-col items-start w-4/5 h-full px-2">
          <h3>
            <b>{data.title}</b>
          </h3>
          <div className="text-sm line-clamp-1">{data.summary}</div>
          <div className="text-xs text-gray-500 font-medium">
            {data.read_by} views | {formatDate(data.createdAt)}
          </div>
        </div>

        </div>
        </div>
  )
}
