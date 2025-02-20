interface PaginationProps {
    totalPosts: number;
    postsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
  
  export const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }: PaginationProps) => {
      const totalPages = Math.ceil(totalPosts / postsPerPage);
    
      return (
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`p-2 border rounded ${currentPage === i + 1 ? 'bg-gray-300 text-black' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      );
    }