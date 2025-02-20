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
export interface BlogCardProps {
  data: BlogData;
}