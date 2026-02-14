import GoldButton from './GoldButton'

const Hero = () => {
  return (
     <div className="bg-bg text-white min-h-screen relative overflow-hidden">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-gradient opacity-10 blur-3xl rounded-full" />
      </div>

      <section className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20 pb-32 font-[content] uppercase overflow-visible">
        {/* ================= IMAGES (BACKGROUND LAYER) ================= */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0">
          {/* glow */}
          <div className="absolute w-[750px] h-[260px] bg-brand-gradient opacity-10 blur-3xl rounded-full" />
        </div>

        {/* ================= TEXT CONTENT (FRONT) ================= */}
        <div className="relative z-20">
          <p className="text-brand-light text-sm mb-6 tracking-wider">
            Crypto Payment Gateway
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Accept crypto <span className="text-brand-light">payments</span>
            <br />
            without complexity
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Simple APIs. Instant confirmations. Secure webhooks. Built for
            modern fintech businesses.
          </p>

          <div className="flex justify-center gap-6">
            <GoldButton>Start Free</GoldButton>

            <button className="text-gray-200 hover:text-white transition cursor-pointer">
              View Docs →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero