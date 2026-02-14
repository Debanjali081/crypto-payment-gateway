export default function ApiShowcase() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">
      <div className="grid md:grid-cols-2 gap-16 items-center font-[content]">
        <div>
          <h3 className="text-4xl font-semibold mb-6 text-gray-300 capitalize">
            Built for <span className="text-brand-light">developers</span>
          </h3>
          <p className="text-gray-400">
            Clean REST APIs with instant payment creation and webhook
            verification.
          </p>
        </div>

        <pre className="bg-bg text-brand-light border border-white/10 rounded-2xl p-6 text-sm overflow-x-auto">
          {`POST /payments
{
  amount: 100,
  currency: "USDT",
  callback_url: "/webhook"
}`}
        </pre>
      </div>
    </section>
  );
}
