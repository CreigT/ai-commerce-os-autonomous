import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Simple, Reasonable Paywalls</h1>
        <p className="text-center text-gray-600 mb-12">Easy to understand. No tricks. Full autonomous power behind the paywall.</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="text-left space-y-2 mb-8">
              <li>✓ Basic agent status</li>
              <li>✓ View AI product ideas</li>
              <li>✓ Limited support</li>
            </ul>
            <Link href="/dashboard" className="block bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold">Start Free</Link>
          </div>
          
          <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-lg text-center transform scale-105">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-4">$29<span className="text-lg">/mo</span></p>
            <ul className="text-left space-y-2 mb-8">
              <li>✓ All AI agents active</li>
              <li>✓ Autonomous product creation</li>
              <li>✓ Marketing & sales automation</li>
              <li>✓ Full dashboard control</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold">Subscribe (Stripe)</button>
            <p className="text-sm mt-2 opacity-80">Add Stripe keys in .env to activate</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">Custom</p>
            <ul className="text-left space-y-2 mb-8">
              <li>✓ Dedicated agent fleet</li>
              <li>✓ White-label</li>
              <li>✓ Priority override</li>
              <li>✓ Custom compliance</li>
            </ul>
            <Link href="/dashboard" className="block bg-gray-800 text-white py-3 rounded-lg font-semibold">Contact Agents</Link>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
