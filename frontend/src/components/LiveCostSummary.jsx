export default function LiveCostSummary() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">Labor</span>
            <p className="text-lg font-semibold text-white">$0.00</p>
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">Materials</span>
            <p className="text-lg font-semibold text-white">$0.00</p>
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">Sub</span>
            <p className="text-lg font-semibold text-white">$0.00</p>
          </div>
          <div className="w-px h-8 bg-gray-700"></div>
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">Fees</span>
            <p className="text-lg font-semibold text-white">$51.50</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Total Invoice</span>
            <p className="text-2xl font-bold text-green-400">$51.50</p>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Profit</span>
            <p className="text-lg font-semibold text-blue-400">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
