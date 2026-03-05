export default function WorkOrderDetails() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Work Order Details
      </h2>

      <div className="space-y-4">
        {/* Client Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client
          </label>
          <div className="h-10 bg-gray-100 rounded border border-gray-300 flex items-center px-3 text-gray-400">
            Select client...
          </div>
        </div>

        {/* Work Order Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Order #
          </label>
          <div className="h-10 bg-gray-100 rounded border border-gray-300 flex items-center px-3 text-gray-400">
            Enter work order number...
          </div>
        </div>

        {/* Service Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Date
          </label>
          <div className="h-10 bg-gray-100 rounded border border-gray-300 flex items-center px-3 text-gray-400">
            Select date...
          </div>
        </div>

        {/* Technician Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Technician
          </label>
          <div className="h-10 bg-gray-100 rounded border border-gray-300 flex items-center px-3 text-gray-400">
            Select technician...
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Description
          </label>
          <div className="h-24 bg-gray-100 rounded border border-gray-300 p-3 text-gray-400">
            Enter description...
          </div>
        </div>
      </div>
    </div>
  );
}
