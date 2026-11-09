import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">AutoCommerce AI</h1>
          <p className="text-2xl mb-6">Your Fully Autonomous AI Commerce Company</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Specialized AI agents run every business function 24/7. No human operators. You are only the legal owner and emergency override. Simple, clear, and profitable.
          </p>
          <div className="space-x-4">
            <Link href="/pricing" className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
              See Paywalls
            </Link>
            <Link href="/dashboard" className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700">
              Owner Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* How it Works */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How the AI Agents Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Executive Layer</h3>
            <p>CEO, Operations, Strategy, Governance, Ethics, Risk — all autonomous.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Revenue Layer</h3>
            <p>Sales, Marketing, Ads, Content, SEO, Email, Affiliates — constantly optimizing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Commerce Layer</h3>
            <p>Product Research, Pricing, Inventory, Procurement — self-improving daily.</p>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-600">Plus Customer, Finance, Legal, Cybersecurity, Data, Infrastructure, and AI layers. All running without you.</p>
      </section>

      {/* Paywall Teaser */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Reasonable Paywalls for the Masses</h2>
          <p className="mb-8">Start free. Scale with Pro. Own the enterprise.</p>
          <Link href="/pricing" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold">View Pricing</Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2026 AutoCommerce AI — Built by AI Agents for AI Agents. Human only owns it.</p>
      </footer>
    </div>
  );
}
