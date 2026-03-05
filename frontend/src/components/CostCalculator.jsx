export default function CostCalculator() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Cost Calculator
      </h2>

      <div className="space-y-6">
        {/* Labor Section */}
        <div className="border-b border-gray-100 pb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Labor</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Reg Hours</label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">OT Hours</label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
              />
            </div>
          </div>
          <div className="mt-3">
            <label className="block text-xs text-gray-500 mb-1">Trip Charge</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
        </div>

        {/* Materials Section */}
        <div className="border-b border-gray-100 pb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Materials</h3>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Materials Cost</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
        </div>

        {/* Subcontractor Section */}
        <div className="border-b border-gray-100 pb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Subcontractor</h3>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Sub Cost</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
          </div>
        </div>

        {/* Fees Section */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Fees</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span className="text-gray-400">$35.00</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Fee</span>
              <span className="text-gray-400">$16.50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
