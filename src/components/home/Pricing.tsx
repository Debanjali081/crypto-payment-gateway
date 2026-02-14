import GoldButton from "./GoldButton";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 text-center font-[content]">

      <h3 className="text-4xl font-semibold mb-16 text-gray-300 capitalize">Simple <span className="text-brand-light">pricing</span></h3>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Free */}
        <div className="p-10 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-xl font-semibold mb-4">Starter</h4>
          <p className="text-4xl font-bold mb-6">Free</p>
          <p className="text-gray-400 mb-8">For testing & small projects</p>
          <GoldButton className="w-full">Get Started</GoldButton>
        </div>

        {/* Popular */}
        <div className="p-10 rounded-2xl bg-brand-gradient text-brand-dark scale-105 shadow-xl">
          <h4 className="text-xl font-semibold mb-4">Growth</h4>
          <p className="text-4xl font-bold mb-6">1%</p>
          <p className="mb-8">Per transaction</p>
          <button className="bg-black text-white rounded-full px-6 py-2.5 w-full">
            Choose Plan
          </button>
        </div>

        {/* Enterprise */}
        <div className="p-10 rounded-2xl bg-white/5 border border-white/10">
          <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
          <p className="text-4xl font-bold mb-6">Custom</p>
          <p className="text-gray-400 mb-8">High volume businesses</p>
          <GoldButton className="w-full">Contact Sales</GoldButton>
        </div>
      </div>
    </section>
  );
}
