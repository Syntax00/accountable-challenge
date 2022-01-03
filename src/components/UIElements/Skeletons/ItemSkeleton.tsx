const ItemSkeleton = () => (
  <div className="p-4 py-10 w-full mx-auto border-b border-b-gray-100">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-3 w-5/12 bg-gray-200 rounded" />

        <div className="space-y-3">
          <div className="h-2 bg-gray-200 rounded w-8/12" />
          <div className="h-2 bg-gray-200 rounded w-10/12" />
          <div className="h-2 bg-gray-200 rounded w-6/12" />
        </div>
      </div>
    </div>
  </div>
);

export default ItemSkeleton;
