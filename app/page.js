import Link from "next/link";
import './globals.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            🌳 State Management Demo
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Compare useState vs Redux approaches for managing binary tree state
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/usestate" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-2xl font-bold text-blue-700 mb-3">useState Approach</h2>
              <p className="text-gray-700 mb-4">
                Local component state with custom propagation logic using React's built-in useState hook.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ Simple setup, no dependencies</li>
                <li>✅ Local state management</li>
                <li>✅ Custom callback propagation</li>
              </ul>
              <div className="mt-6 text-blue-600 font-semibold group-hover:text-blue-800">
                Try useState Demo →
              </div>
            </div>
          </Link>

          <Link href="/redux" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <div className="text-4xl mb-4">🏪</div>
              <h2 className="text-2xl font-bold text-purple-700 mb-3">Redux Approach</h2>
              <p className="text-gray-700 mb-4">
                Global state management with centralized logic and predictable state updates.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✅ Global state persistence</li>
                <li>✅ Centralized reducers</li>
                <li>✅ Time-travel debugging</li>
              </ul>
              <div className="mt-6 text-purple-600 font-semibold group-hover:text-purple-800">
                Try Redux Demo →
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            🔧 How Value Propagation Works
          </h2>
          <div className="text-gray-700 space-y-3">
            <p><strong>1. Click Action:</strong> When you click + or - on any node, it triggers a value change.</p>
            <p><strong>2. Node Update:</strong> The clicked node's value increases/decreases by 1.</p>
            <p><strong>3. Upward Propagation:</strong> The change automatically propagates to all parent nodes up to the root.</p>
            <p><strong>4. Visual Update:</strong> All affected nodes update their display in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
