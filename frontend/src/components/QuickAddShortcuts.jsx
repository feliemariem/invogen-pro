export default function QuickAddShortcuts() {
  const shortcuts = [
    { label: '+1 Reg Hr', color: 'blue' },
    { label: '+1 OT Hr', color: 'orange' },
    { label: '+Trip', color: 'purple' },
    { label: '+Materials', color: 'green' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
        Quick-Add Shortcuts
      </h3>
      <div className="flex flex-wrap gap-2">
        {shortcuts.map((shortcut) => (
          <button
            key={shortcut.label}
            className={`px-3 py-1.5 text-sm font-medium rounded-md border-2 border-dashed
              ${shortcut.color === 'blue' ? 'border-blue-300 text-blue-600 hover:bg-blue-50' : ''}
              ${shortcut.color === 'orange' ? 'border-orange-300 text-orange-600 hover:bg-orange-50' : ''}
              ${shortcut.color === 'purple' ? 'border-purple-300 text-purple-600 hover:bg-purple-50' : ''}
              ${shortcut.color === 'green' ? 'border-green-300 text-green-600 hover:bg-green-50' : ''}
              transition-colors cursor-pointer`}
          >
            {shortcut.label}
          </button>
        ))}
      </div>
    </div>
  );
}
