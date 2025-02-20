export const BlogPageSkeleton = () => {
    return (
      <>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${""})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
              className="rounded-xl h-48 md:h-[30rem]"
            ></div>
          </div>
        </div>
        <div className="w-full h-full mb-6">
          <div className="h-8 bg-gray-700 dark:bg-blue-gray-800 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-700 dark:bg-blue-gray-800 rounded w-full mb-1"></div>
          <div className="h-6 bg-gray-700 dark:bg-blue-gray-800 rounded w-1/2"></div>
        </div>
      </>
    );
  };
  
  