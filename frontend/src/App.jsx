import WorkOrderDetails from './components/WorkOrderDetails';
import CostCalculator from './components/CostCalculator';
import LiveCostSummary from './components/LiveCostSummary';
import QuickAddShortcuts from './components/QuickAddShortcuts';
import ActionButtons from './components/ActionButtons';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">InvoGenPro</h1>
            <p className="text-sm text-gray-500">by FNR Core</p>
          </div>
          <nav className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Create Invoice</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create Invoice</h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter work order details and calculate costs
          </p>
        </div>

        {/* Live Cost Summary Bar */}
        <div className="mb-6">
          <LiveCostSummary />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Work Order Details */}
          <div className="space-y-6">
            <WorkOrderDetails />
          </div>

          {/* Right Panel - Cost Calculator */}
          <div className="space-y-6">
            <CostCalculator />
            <QuickAddShortcuts />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6">
          <ActionButtons />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-gray-500 text-center">
            InvoGenPro by FNR Core - AI-powered work order management
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
