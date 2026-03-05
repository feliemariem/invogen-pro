import WorkOrderDetails from './components/WorkOrderDetails';
import CostCalculator from './components/CostCalculator';
import LiveCostSummary from './components/LiveCostSummary';
import QuickAddShortcuts from './components/QuickAddShortcuts';
import ActionButtons from './components/ActionButtons';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            InvoGenPro <span className="text-blue-600">by FNR Core</span>
          </h1>
          <p className="text-sm text-gray-500">Create Invoice</p>
        </div>
      </header>

      {/* Live Cost Summary Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <LiveCostSummary />
      </div>

      {/* Main Content - Two Column Layout */}
      <main className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Work Order Details */}
          <div className="space-y-6">
            <WorkOrderDetails />
          </div>

          {/* Right Panel - Cost Calculator */}
          <div className="space-y-6">
            <CostCalculator />
            <QuickAddShortcuts />
            <ActionButtons />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
