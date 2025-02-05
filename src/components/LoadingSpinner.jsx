const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400"></div>
      <p className="text-gray-600 dark:text-gray-300">Yükleniyor...</p>
    </div>
  );
};

export default LoadingSpinner;
