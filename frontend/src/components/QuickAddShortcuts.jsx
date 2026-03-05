export default function QuickAddShortcuts() {
  const shortcuts = [
    { label: '+ Labor', icon: '⏱️' },
    { label: '+ Material', icon: '🔧' },
    { label: '+ Trip', icon: '🚗' },
    { label: '+ Permit', icon: '📋' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
        Quick Add
      </h3>
      <div className="flex gap-2 flex-wrap">
        {shortcuts.map((shortcut) => (
          <button
            key={shortcut.label}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-sm font-medium transition-colors cursor-not-allowed opacity-60"
            disabled
          >
            <span>{shortcut.icon}</span>
            <span>{shortcut.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
