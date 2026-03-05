export default function CostCalculator() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Cost Calculator
      </h2>

      <div className="space-y-6">
        {/* Labor Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Labor
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Regular Hours</span>
              <span className="text-gray-400">0 hrs × $0.00</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Overtime Hours</span>
              <span className="text-gray-400">0 hrs × $0.00</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Trip Charge</span>
              <span className="text-gray-400">$0.00</span>
            </div>
          </div>
        </div>

        {/* Materials Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Materials
          </h3>
          <div className="p-3 bg-gray-50 rounded border-2 border-dashed border-gray-300 text-center text-gray-400">
            Add materials...
          </div>
        </div>

        {/* Subcontractor Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Subcontractor
          </h3>
          <div className="p-3 bg-gray-50 rounded border-2 border-dashed border-gray-300 text-center text-gray-400">
            Add subcontractor costs...
          </div>
        </div>

        {/* Fees Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
            Fees
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Permit Fee</span>
              <span className="text-gray-400">$0.00</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Admin Fee</span>
              <span className="text-gray-400">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
