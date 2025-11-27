'use client';

import { useState } from 'react';

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState('team'); // Default to Team as most popular

  const tiers = [
    {
      id: 'starter',
      title: 'Starter',
      price: 99,
      features: ['Up to 5 instances', 'All 3 themes + 3D panel', 'Email support'],
      href: 'https://rackvision.lemonsqueezy.com/buy/0faa2696-57c0-42ce-bf1a-d7b1fb75cfc3', // Paste real LS URL here
      isPopular: false,
    },
    {
      id: 'team',
      title: 'Team',
      price: 299,
      features: ['Up to 20 instances', 'White-label', 'Priority support', 'Future themes free'],
      href: 'https://rackvision.lemonsqueezy.com/buy/5b8b5833-9bb4-4c4c-9655-d95fc72cbcdc', // Paste real LS URL here
      isPopular: true,
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 799,
      features: ['Unlimited instances', 'Custom themes', 'Dedicated support'],
      href: 'mailto:sales@rackvision.ai',
      isPopular: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {tiers.map((tier) => {
        const isSelected = selectedTier === tier.id;
        return (
          <div
            key={tier.id}
            className={`border rounded-2xl p-8 bg-gray-950 cursor-pointer transition-all duration-200 ${
              isSelected
                ? 'border-2 border-purple-600 ring-2 ring-purple-600/20 scale-[1.02]'
                : 'border-gray-800 hover:border-gray-600'
            }`}
            onClick={() => setSelectedTier(tier.id)}
          >
            {tier.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-2xl font-bold text-white">{tier.title}</h3>
            <p className="text-6xl font-bold mt-4 text-purple-400">
              ${tier.price}<span className="text-xl font-normal text-gray-400">/mo</span>
            </p>
            <ul className="mt-8 space-y-4 text-gray-300">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 block text-center py-4 rounded-lg font-semibold transition-colors ${
                tier.id === 'enterprise'
                  ? 'border border-gray-600 text-white hover:border-gray-400'
                  : tier.id === 'starter'
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-purple-600 text-white hover:bg-purple-500'
              }`}
            >
              {tier.id === 'enterprise' ? 'Contact Sales' : 'Buy now – 60 days free'}
            </a>
          </div>
        );
      })}
    </div>
  );
}