export interface BlogData {
    _id: string;
    thumbnail: string;
    title: string;
    description: string;
    read_by: number;
    isPublished: boolean;
    videoOwner: string;
    createdAt: string;
    summary: string;
  }
 
export interface BlogCardProps {
    data: BlogData;
}