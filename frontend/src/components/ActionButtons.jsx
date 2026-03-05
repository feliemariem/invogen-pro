export default function ActionButtons() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
        Actions
      </h3>
      <div className="flex gap-3">
        <button
          className="flex-1 px-4 py-3 bg-gray-200 text-gray-500 rounded-lg font-medium cursor-not-allowed"
          disabled
        >
          Save Draft
        </button>
        <button
          className="flex-1 px-4 py-3 bg-gray-200 text-gray-500 rounded-lg font-medium cursor-not-allowed"
          disabled
        >
          Preview
        </button>
        <button
          className="flex-1 px-4 py-3 bg-blue-200 text-blue-400 rounded-lg font-medium cursor-not-allowed"
          disabled
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
}
