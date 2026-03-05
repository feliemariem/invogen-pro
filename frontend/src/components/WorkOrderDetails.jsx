export default function WorkOrderDetails() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        Work Order Details
      </h2>

      <div className="space-y-4">
        {/* Client Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500">
            <option>Select client...</option>
          </select>
        </div>

        {/* Work Order Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Order #
          </label>
          <input
            type="text"
            placeholder="Enter WO number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>

        {/* Site Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Site Name
          </label>
          <input
            type="text"
            placeholder="Enter site name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Site Address
          </label>
          <input
            type="text"
            placeholder="Enter address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>

        {/* Technician Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Technician
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500">
            <option>Select technician...</option>
          </select>
        </div>

        {/* Service Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Description
          </label>
          <textarea
            rows={3}
            placeholder="Describe the work performed..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 resize-none"
          />
        </div>
      </div>
    </div>
  );
}
