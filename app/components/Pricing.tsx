export function Pricing() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Starter */}
      <div className="border border-gray-800 rounded-2xl p-8 bg-gray-950/50 backdrop-blur">
        <h3 className="text-2xl font-bold">Starter</h3>
        <p className="text-6xl font-bold mt-4 text-purple-400">$99<span className="text-xl text-gray-400">/mo</span></p>
        <ul className="mt-8 space-y-4 text-gray-300">
          <li>✓ Up to 5 instances</li>
          <li>✓ All 3 themes + 3D panel</li>
          <li>✓ Email support</li>
        </ul>
        <a href="YOUR_STARTER_LINK" className="mt-10 block text-center bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200">
          Buy now – 60 days free
        </a>
      </div>

      {/* Team – Most Popular */}
      <div className="border-2 border-purple-600 rounded-2xl p-8 bg-gray-950/50 backdrop-blur relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-6 py-1 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
        <h3 className="text-2xl font-bold">Team</h3>
        <p className="text-6xl font-bold mt-4 text-purple-400">$299<span className="text-xl text-gray-400">/mo</span></p>
        <ul className="mt-8 space-y-4 text-gray-300">
          <li>✓ Up to 20 instances</li>
          <li>✓ White-label</li>
          <li>✓ Priority support</li>
          <li>✓ Future themes free</li>
        </ul>
        <a href="YOUR_TEAM_LINK" className="mt-10 block text-center bg-purple-600 py-4 rounded-lg font-semibold hover:bg-purple-500">
          Buy now – 60 days free
        </a>
      </div>

      {/* Enterprise */}
      <div className="border border-gray-800 rounded-2xl p-8 bg-gray-950/50 backdrop-blur">
        <h3 className="text-2xl font-bold">Enterprise</h3>
        <p className="text-6xl font-bold mt-4 text-purple-400">$799<span className="text-xl text-gray-400">/mo</span></p>
        <ul className="mt-8 space-y-4 text-gray-300">
          <li>✓ Unlimited instances</li>
          <li>✓ Custom themes</li>
          <li>✓ Dedicated support</li>
        </ul>
        <a href="mailto:sales@rackvision.ai" className="mt-10 block text-center border border-gray-600 py-4 rounded-lg font-semibold hover:border-gray-400">
          Contact sales
        </a>
      </div>
    </div>
  );
}