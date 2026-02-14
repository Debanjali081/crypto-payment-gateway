const features = [
  {
    title: "Instant Confirmations",
    desc: "Real-time blockchain monitoring with zero delays.",
  },
  {
    title: "Simple APIs",
    desc: "Integrate payments in minutes with clean REST APIs.",
  },
  {
    title: "Secure Webhooks",
    desc: "Verified callbacks with signature protection.",
  },
  {
    title: "Multi Chain",
    desc: "BTC, ETH, USDT, SOL and more supported.",
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-bg text-white font-[content]">
      <h3 className="text-4xl font-semibold text-center mb-16">
        Everything you need to accept{" "}
        <span className="text-brand-light">crypto</span>
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => {
          const [first, ...rest] = f.title.split(" ");
          const second = rest.join(" ");

          return (
            <div
              key={f.title}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-brand-light/40 transition"
            >
              <h4 className="text-lg font-semibold mb-3 text-white">
                {first}{" "}
                <span className="text-brand-light">{second}</span>
              </h4>

              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
