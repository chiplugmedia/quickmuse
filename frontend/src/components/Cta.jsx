import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-[#24000a]
          via-[#520015]
          to-[#800021]
          px-6
          py-12
          md:px-14
          md:py-16
          text-center
          text-[#f6e6ce]
          shadow-2xl
          shadow-[#24000a]/70
          border
          border-[#800021]/50
        "
      >
        {/* Glow Effects */}
        <div className="absolute -top-12 -right-12 w-60 h-60 rounded-full bg-[#800021]/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-60 h-60 rounded-full bg-[#f6e6ce]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#f6e6ce]/10
              border
              border-[#f6e6ce]/20
              text-[#f6e6ce]
              text-xs
              font-semibold
              backdrop-blur-md
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5989b] animate-ping" />
            <span>Begin Your QuickMuse Journey</span>
          </span>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            Unlock AI Training,
            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#f6e6ce] via-[#e5989b] to-white">
              Remote Tasks & Rewards
            </span>
          </h2>

          <p className="mt-4 text-[#f6e6ce]/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Join thousands of active contributors shaping next-generation artificial intelligence.
            Claim bounties, connect with mentors, and earn hourly.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-4
                rounded-xl
                font-bold
                text-sm
                text-[#24000a]
                bg-[#f6e6ce]
                hover:bg-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              <span>Get Started Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              to="/about"
              className="
                w-full
                sm:w-auto
                inline-flex
                items-center
                justify-center
                px-7
                py-4
                rounded-xl
                font-semibold
                text-sm
                text-[#f6e6ce]
                bg-white/10
                border
                border-white/20
                backdrop-blur-md
                hover:bg-white/20
                transition-all
                duration-300
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
