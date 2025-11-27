import { Pricing } from './components/Pricing';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            The Grafana themes<br />AI teams actually want
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
            Obsidian AI • Carbon Grid • Nordic Steel + bonus 3D rack panel
          </p>
          <a
            href="#pricing"
            className="inline-block bg-purple-600 hover:bg-purple-500 px-10 py-5 rounded-lg text-xl font-semibold transition"
          >
            Get Started – 60 days free
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Simple pricing</h2>
            <p className="text-xl text-gray-400">Pay annually and save 20%</p>
          </div>
          <Pricing />
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Beautiful out of the box</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Image src="/obsidian.jpg" alt="Obsidian AI" width={1200} height={800} className="rounded-2xl shadow-2xl" />
            <Image src="/carbon.jpg" alt="Carbon Grid" width={1200} height={800} className="rounded-2xl shadow-2xl" />
            <Image src="/nordic.jpg" alt="Nordic Steel" width={1200} height={800} className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}