const FEATURES = [
  {
    badge: "◈",
    title: "Like, Follow & Share",
    body: "Engage with posts on Instagram, TikTok and X — follow a page, like a post, or share to your story.",
  },
  {
    badge: "✦",
    title: "Rate & Review",
    body: "Try an app or product and leave a short, honest review. Quick to do, and it pays every time.",
  },
  {
    badge: "▶",
    title: "Watch & Earn",
    body: "Watch short sponsored videos and answer one quick question at the end to confirm your reward.",
  },
  {
    badge: "▣",
    title: "Quick Surveys",
    body: "Share your opinion on short surveys from brands. Two minutes of your time, straight to your balance.",
  },
  {
    badge: "⬡",
    title: "Daily Check-in Bonus",
    body: "Open the app and check in every day. Streaks build a growing bonus that resets your monthly best.",
  },
  {
    badge: "◎",
    title: "Invite Friends & Family",
    body: "Share your unique link. When someone joins and completes their first task, you both get rewarded.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32">
      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px] animate-pulse" />

        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Floating Stars */}
        <div className="stars"></div>

        {/* Moving Ring */}
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />

        <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs uppercase tracking-[0.3em] text-white/60">
            WAYS TO EARN
          </span>

          <h2 className="mt-6 font-display font-bold text-4xl md:text-6xl leading-tight tracking-tight">
            Simple tasks.
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Real payouts.
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            No experience required. Pick a task, complete it in minutes, and
            watch your balance grow — everything is tracked and paid out
            transparently.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                transition-all
                duration-700
                hover:-translate-y-4
                hover:border-white/20
                hover:shadow-[0_20px_80px_rgba(255,255,255,0.08)]
              "
              style={{
                animation: `fadeUp 0.8s ease forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/10 blur-[90px] rounded-full" />
              </div>

              {/* Badge */}
              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-white
                  text-black
                  flex
                  items-center
                  justify-center
                  text-2xl
                  font-bold
                  shadow-xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {feature.badge}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Body */}
              <p className="mt-4 text-white/60 leading-relaxed">
                {feature.body}
              </p>

              {/* Bottom Indicator */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10"></div>
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
            "
          >
            Explore Features
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stars {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.9) 1px, transparent 1px),
            radial-gradient(circle at 80% 30%, rgba(255,255,255,.7) 1px, transparent 1px),
            radial-gradient(circle at 60% 70%, rgba(255,255,255,.8) 1px, transparent 1px),
            radial-gradient(circle at 30% 80%, rgba(255,255,255,.6) 1px, transparent 1px),
            radial-gradient(circle at 90% 90%, rgba(255,255,255,.7) 1px, transparent 1px);
          background-size: 300px 300px;
          opacity: 0.4;
          animation: starDrift 30s linear infinite;
        }

        @keyframes starDrift {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-120px);
          }
        }
      `}</style>
    </section>
  );
}
