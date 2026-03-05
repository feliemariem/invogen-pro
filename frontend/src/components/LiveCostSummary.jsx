export default function LiveCostSummary() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <p className="text-sm font-medium opacity-80">Live Cost Summary</p>
          <p className="text-3xl font-bold">$0.00</p>
        </div>

        <div className="flex gap-6 text-white text-sm">
          <div className="text-center">
            <p className="opacity-80">Labor</p>
            <p className="font-semibold">$0.00</p>
          </div>
          <div className="text-center">
            <p className="opacity-80">Materials</p>
            <p className="font-semibold">$0.00</p>
          </div>
          <div className="text-center">
            <p className="opacity-80">Sub</p>
            <p className="font-semibold">$0.00</p>
          </div>
          <div className="text-center">
            <p className="opacity-80">Fees</p>
            <p className="font-semibold">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
