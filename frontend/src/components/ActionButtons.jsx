export default function ActionButtons() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        Actions
      </h3>
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
          Save Draft
        </button>
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer">
          Preview Invoice
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors cursor-pointer">
          Generate Invoice
        </button>
        <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer">
          Clear All
        </button>
      </div>
    </div>
  );
}
