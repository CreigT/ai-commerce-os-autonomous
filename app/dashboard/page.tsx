'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [agentStatus, setAgentStatus] = useState('Loading agents...');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate autonomous agents running
    setAgentStatus('All agents online and optimizing 24/7');
    setProducts([
      { name: 'AI-Generated Digital Guide', price: 19, status: 'Live' },
      { name: 'Autonomous SEO Toolkit', price: 49, status: 'Researching' },
      { name: 'Smart Inventory Optimizer', price: 99, status: 'Priced by AI' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Owner Dashboard</h1>
        <p className="text-gray-600 mb-6">You are the legal owner. Agents handle everything. Add variables below and let them run.</p>
        
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Agent Status</h2>
          <p className="text-green-600 font-medium">{agentStatus}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
            <div className="bg-green-50 p-3 rounded">CEO Agent: Active</div>
            <div className="bg-green-50 p-3 rounded">Product Research: Active</div>
            <div className="bg-green-50 p-3 rounded">Pricing Agent: Active</div>
            <div className="bg-green-50 p-3 rounded">Support Agent: Active</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">AI-Generated Products (Autonomous)</h2>
          {products.map((p, i) => (
            <div key={i} className="border-b py-3 flex justify-between">
              <span>{p.name}</span>
              <span>${p.price} — {p.status}</span>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Your Only Action: Add Variables</h2>
          <p className="mb-4">Copy .env.example → .env.local and fill in:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>OPENAI_API_KEY (for real AI agents)</li>
            <li>STRIPE keys (to activate paywall)</li>
            <li>Any other integrations</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Then push to GitHub. Vercel deploys automatically. Agents take over.</p>
        </div>

        <div className="mt-6">
          <Link href="/" className="text-indigo-600">← Home</Link> | <Link href="/pricing" className="text-indigo-600">Pricing</Link>
        </div>
      </div>
    </div>
  );
}
