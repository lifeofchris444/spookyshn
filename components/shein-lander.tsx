"use client"

import { useState } from "react"

const AFFILIATE_LINK = "https://giftclick.org/aff_c?offer_id=1141&aff_id=26188"

const ACCENT = "#D9480F"
const ACCENT_BRIGHT = "#FF8A3D"
const ACCENT_DEEP = "#0E0414"
const NIGHT_PURPLE = "#3B1650"
const ACCENT_NUMERAL = "#FCD9C2"
const ACCENT_TINT = "#FDE8DA"
const SECTION_TINT = "#FBF3EE"
const INK = "#1C1917"

const HERO_GRADIENT = `linear-gradient(165deg, ${NIGHT_PURPLE} 0%, #22092F 45%, ${ACCENT_DEEP} 100%)`

const WITCH_HAT_ICON =
  "M2.5 19c0-1.4 4.3-2.5 9.5-2.5s9.5 1.1 9.5 2.5-4.3 2.5-9.5 2.5-9.5-1.1-9.5-2.5z M6.6 17.3L11 4.6c.3-.9 1.6-.9 1.9 0l4.5 12.7 M8.2 13.2h7.6"
const PUMPKIN_ICON =
  "M12 7.2c-4.4 0-8 2.9-8 6.7s3.6 6.7 8 6.7 8-2.9 8-6.7-3.6-6.7-8-6.7z M12 7.2c-1.8 0-3.2 3-3.2 6.7s1.4 6.7 3.2 6.7 3.2-3 3.2-6.7-1.4-6.7-3.2-6.7z M12 7.2V4.4c0-.6.5-1 1.1-.9l1.6.4"
const CANDY_ICON =
  "M12 8.2a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6z M8.4 10.4L4.2 7.5v9l4.2-2.9 M15.6 10.4l4.2-2.9v9l-4.2-2.9"
const LIPSTICK_ICON = "M9.3 11.2h5.4v9.2H9.3z M8.6 11.2h6.8 M9.3 11.2V5.7l5.4-1.9v7.4"
const GHOST_ICON =
  "M6 20.5V10a6 6 0 0112 0v10.5l-2-1.6-2 1.6-2-1.6-2 1.6-2-1.6z M10 10.2v.6 M14 10.2v.6"

const STEPS = [
  {
    t: "Click apply now",
    d: "Start your application — it takes seconds.",
    icon: "M9 9l10.5 3.5-4.5 2-2 4.5L9 9z M4 4l1.5 1.5 M4 9h2 M9 4v2",
  },
  { t: "Enter your email", d: "Quick 30-second signup process.", icon: "M3 7l9 6 9-6 M3.5 5.5h17v13h-17z" },
  {
    t: "Complete the survey",
    d: "Share your shopping preferences.",
    icon: "M5 6a2 2 0 012-2h10a2 2 0 012 2v13a2 2 0 01-2 2H7a2 2 0 01-2-2V6z M9 10h6 M9 14h6",
  },
  {
    t: "Complete 5+ deals",
    d: "Simple tasks like app downloads & trials.",
    icon: "M3 10h18v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z M12 10v11 M3 14h18 M12 10c-2.5 0-4-1.2-4-2.8C8 5.5 10 5 12 7c2-2 4-1.5 4 .2 0 1.6-1.5 2.8-4 2.8z",
  },
  {
    t: "Receive your discount",
    d: "Delivered straight to your inbox.",
    icon: "M8 21h8 M12 17v4 M7 4h10v5a5 5 0 01-10 0V4z M7 6H4v1a4 4 0 004 4 M17 6h3v1a4 4 0 01-4 4",
  },
]

const CATEGORIES = [
  {
    t: "Halloween Costumes",
    d: "Witch, vampire, and fairy looks, plus coordinated sets for group and couples costumes.",
    icon: WITCH_HAT_ICON,
  },
  {
    t: "Spooky Home Decor",
    d: "Pumpkin lights, cobweb throws, skeleton accents, and tabletop pieces to haunt every room.",
    icon: PUMPKIN_ICON,
  },
  {
    t: "Party & Trick-or-Treat",
    d: "Treat bags, candy bowls, themed tableware, and party supplies for the whole haunted crew.",
    icon: CANDY_ICON,
  },
  {
    t: "Glam Makeup & Accessories",
    d: "Dark lip colors, faux lashes, statement jewelry, and fishnets to finish every look.",
    icon: LIPSTICK_ICON,
  },
]

const FAQS = [
  {
    q: "What are deals?",
    a: "Simple tasks like app downloads, surveys, or trial subscriptions. Each deal is straightforward and designed to be completed quickly.",
  },
  {
    q: "How many do I need?",
    a: "Complete 5+ deals to receive your reward. The more deals you complete, the faster you can receive your discount code toward your next SHEIN order.",
  },
  {
    q: "How long do they take?",
    a: "Typically 10-20 minutes per deal. Most users complete all required deals within a few hours spread across a day or two.",
  },
]

const AVATARS = [
  { src: "/avatars/shein-shopper-1.webp", alt: "Young woman with long light brown wavy hair in a cream cable-knit sweater" },
  { src: "/avatars/shein-shopper-2.webp", alt: "Young woman with long dark brown hair in a rust knit cardigan" },
  { src: "/avatars/shein-shopper-3.webp", alt: "Young woman with shoulder-length blonde hair in a camel suede jacket" },
]

function Icon({ d, className = "w-6 h-6", color = ACCENT }: { d: string; className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d.split(" M").map((p, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + p} />
      ))}
    </svg>
  )
}

function CTAButton({
  children,
  brand = false,
  large = false,
}: {
  children: React.ReactNode
  brand?: boolean
  large?: boolean
}) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn group inline-flex items-center gap-2 rounded-full font-semibold ${
        large ? "px-9 py-4 text-lg" : "px-7 py-3.5 text-base"
      }`}
      style={brand ? { backgroundColor: ACCENT, color: "#FFFFFF" } : { backgroundColor: "#FFFFFF", color: INK }}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  )
}

function TimelineRow({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const leftSide = index % 2 === 0
  return (
    <div className="relative grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3.5rem_1fr] gap-x-4 md:gap-x-8 items-center pb-6 md:pb-8 last:pb-0">
      <div
        className={`hidden md:flex items-center ${leftSide ? "md:order-3 justify-start" : "md:order-1 justify-end"}`}
        aria-hidden="true"
      >
        <span className="font-black text-6xl lg:text-7xl leading-none select-none" style={{ color: ACCENT_NUMERAL }}>
          0{index + 1}
        </span>
      </div>

      <div className="order-1 md:order-2 flex justify-center self-start md:self-center pt-1 md:pt-0">
        <div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm z-10"
          style={{
            backgroundColor: ACCENT,
            borderColor: ACCENT,
            color: "#FFFFFF",
            boxShadow: "0 8px 22px rgba(217,72,15,.4)",
          }}
        >
          {index + 1}
        </div>
      </div>

      <div
        className={`t-card order-2 rounded-2xl p-5 bg-white border border-gray-200 shadow-sm ${
          leftSide ? "md:order-1" : "md:order-3"
        }`}
      >
        <div className={`flex items-start gap-4 ${leftSide ? "md:flex-row-reverse md:text-right" : ""}`}>
          <div
            className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: ACCENT_TINT }}
          >
            <Icon d={step.icon} className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-snug">{step.t}</h3>
            <p className="mt-1 text-gray-500 leading-relaxed text-sm">{step.d}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium text-white">
      <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
      {"Applications Open"}
    </span>
  )
}

export default function SheinRewardLander() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden font-sans" style={{ color: INK }}>
      <style>{`
        .cta-btn { transition: transform .15s ease, box-shadow .2s ease; }
        .cta-btn:hover { transform: scale(1.04); box-shadow: 0 12px 32px rgba(255,138,61,0.35); }
        .cta-btn:active { transform: scale(0.98); }

        .orb { position: absolute; border-radius: 9999px; filter: blur(70px); opacity: .45; animation: orbDrift 12s ease-in-out infinite; }
        @keyframes orbDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.15); }
        }

        .drifter { position: absolute; opacity: .22; animation: drift 9s ease-in-out infinite; }
        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(8deg); }
        }

        .cat-card { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease; }
        .cat-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 24px 48px rgba(17,24,39,0.12); }
        .cat-card:hover .cat-icon { transform: translateY(-4px) rotate(4deg) scale(1.08); }
        .cat-icon { transition: transform .3s cubic-bezier(.34,1.56,.64,1); }
        .card-shine { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(115deg, transparent 35%, rgba(217,72,15,0.06) 47%, rgba(255,255,255,0.55) 52%, transparent 65%); background-size: 260% 100%; animation: cardShine 7s ease-in-out infinite; }
        @keyframes cardShine { 0%, 55% { background-position: 135% 0; } 85%, 100% { background-position: -60% 0; } }
        .icon-bob { animation: iconBob 4.5s ease-in-out infinite; }
        @keyframes iconBob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-5px) rotate(-5deg); } }
        .cat-spark { position: absolute; top: 16px; right: 18px; color: ${ACCENT_BRIGHT}; animation: sparkTwinkle 3.4s ease-in-out infinite; }
        @keyframes sparkTwinkle { 0%, 100% { transform: scale(.75) rotate(0deg); opacity: .35; } 50% { transform: scale(1.2) rotate(25deg); opacity: .9; } }

        .faq-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1); }
        .faq-body.open { grid-template-rows: 1fr; }
        .faq-inner { overflow: hidden; }

        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
        @keyframes pulseDot { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,.6); } 50% { box-shadow: 0 0 0 7px rgba(74,222,128,0); } }

        .t-card { transition: transform .25s cubic-bezier(.16,1,.3,1), border-color .25s ease, box-shadow .25s ease; }
        .t-card:hover { transform: translateY(-6px); border-color: rgba(217,72,15,.4); box-shadow: 0 18px 44px rgba(217,72,15,.15); }
        .t-rail-fill { background: linear-gradient(180deg, ${ACCENT_BRIGHT}, ${ACCENT}); }

        .ghost-rise { position: absolute; bottom: -40px; animation: ghostRise ease-in-out infinite; }
        @keyframes ghostRise {
          0% { transform: translate(0, 0); opacity: 0; }
          12% { opacity: .35; }
          50% { transform: translate(24px, -260px); }
          88% { opacity: .35; }
          100% { transform: translate(-16px, -560px); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, .orb, .drifter, .card-shine, .icon-bob, .cat-spark, .ghost-rise, .pulse-dot { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: ACCENT_BRIGHT, opacity: 0.32 }} />
        <div className="orb w-80 h-80 top-1/3 -right-20" style={{ backgroundColor: "#6B2D8F", animationDelay: "-6s" }} />
        <div className="drifter left-[8%] top-[30%]">
          <Icon d={GHOST_ICON} color="#FFFFFF" className="w-8 h-8" />
        </div>
        <div className="drifter right-[10%] top-[18%]" style={{ animationDelay: "-3s" }}>
          <Icon d={PUMPKIN_ICON} color={ACCENT_BRIGHT} className="w-9 h-9" />
        </div>
        <div className="drifter left-[16%] bottom-[12%]" style={{ animationDelay: "-5s" }}>
          <Icon d={WITCH_HAT_ICON} color="#FFFFFF" className="w-9 h-9" />
        </div>
        <div className="drifter right-[14%] bottom-[18%]" style={{ animationDelay: "-7s" }}>
          <Icon d={GHOST_ICON} color="#FFFFFF" className="w-7 h-7" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 pt-12 pb-20 md:pt-20 md:pb-24 text-center text-white">
          <StatusBadge />
          <h1 className="mt-6 font-black tracking-tight leading-[1.05] text-[1.92rem] min-[344px]:text-[2.13rem] min-[376px]:text-[2.34rem] min-[408px]:text-[2.55rem] min-[440px]:text-[2.75rem] min-[472px]:text-[2.96rem] min-[504px]:text-[3.17rem] min-[536px]:text-[3.38rem] min-[568px]:text-[3.59rem] min-[600px]:text-[3.8rem] min-[632px]:text-[4rem] min-[664px]:text-[4.21rem] min-[696px]:text-[4.42rem] min-[728px]:text-[4.69rem] text-balance">
            {"The SHEIN Discounts They Don't Advertise"}
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed text-pretty text-white/85">
            {
              "Discover how shoppers are unlocking hidden discounts on SHEIN's Halloween drops — costumes, spooky decor, party supplies, and glam makeup."
            }
          </p>
          <div className="mt-9 flex items-center justify-center gap-x-5 gap-y-9 flex-wrap">
            <CTAButton large>Apply Now</CTAButton>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <span
                    key={a.src}
                    className="w-11 h-11 rounded-full border-2 border-white overflow-hidden inline-block shadow-md"
                    style={{ backgroundColor: ACCENT_BRIGHT }}
                  >
                    <img
                      src={a.src}
                      alt={a.alt}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover text-transparent"
                      loading="eager"
                      decoding="async"
                    />
                  </span>
                ))}
              </div>
              <span className="text-sm leading-tight max-w-[200px] text-left text-white/80">
                {"Join 12,000+ shoppers who've already claimed their discounts"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE STEPS ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center">
            <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
              How it works
            </div>
            <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
              Five Simple Steps to Claiming Your Discounts
            </h2>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gray-200" />
            <div className="t-rail-fill absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full" />

            {STEPS.map((step, i) => (
              <TimelineRow key={step.t} step={step} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton brand large>
              Apply Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── HALLOWEEN CATEGORIES ────────────────────────── */}
      <section style={{ backgroundColor: SECTION_TINT }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
            Shop the season
          </div>
          <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">
            Halloween Favorites You Can Save On
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-5 text-left">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.t}
                className="cat-card relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm p-7 flex items-start gap-5"
              >
                <div className="card-shine" style={{ animationDelay: `${i * 1.8}s` }} aria-hidden="true" />
                <span className="cat-spark" style={{ animationDelay: `${i * 0.8}s` }} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
                  </svg>
                </span>
                <div
                  className="cat-icon w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_TINT }}
                >
                  <div className="icon-bob" style={{ animationDelay: `${i * 0.6}s` }}>
                    <Icon d={c.icon} className="w-7 h-7" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="font-bold text-2xl">{c.t}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: ACCENT }}>
            Questions &amp; answers
          </div>
          <h2 className="mt-3 font-black tracking-tight text-3xl md:text-5xl text-balance">Frequently Asked Questions</h2>

          <div className="mt-10 flex flex-col gap-4 text-left">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white border border-gray-200 shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-lg">{f.q}</span>
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ backgroundColor: openFaq === i ? ACCENT : "#F2F3F5" }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={`w-4 h-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke={openFaq === i ? "#FFFFFF" : INK}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-body ${openFaq === i ? "open" : ""}`}>
                  <div className="faq-inner">
                    <p className="px-5 pb-5 text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINALE ──────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: HERO_GRADIENT }}>
        {[
          { l: "6%", s: 20, d: 11, delay: 0 },
          { l: "18%", s: 16, d: 13, delay: 3.2 },
          { l: "31%", s: 22, d: 12, delay: 1.4 },
          { l: "47%", s: 15, d: 14, delay: 5 },
          { l: "60%", s: 19, d: 11.5, delay: 2.2 },
          { l: "73%", s: 16, d: 13.5, delay: 6.4 },
          { l: "86%", s: 21, d: 12.5, delay: 4 },
        ].map((g, i) => (
          <span
            key={i}
            className="ghost-rise"
            style={{ left: g.l, animationDuration: `${g.d}s`, animationDelay: `${g.delay}s` }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width={g.s + 6} height={g.s + 6} fill="#FFFFFF" stroke="none">
              <path d="M6 20.5V10a6 6 0 0112 0v10.5l-2-1.6-2 1.6-2-1.6-2 1.6-2-1.6z" />
            </svg>
          </span>
        ))}
        <div className="orb w-96 h-96 -top-24 -left-24" style={{ backgroundColor: ACCENT_BRIGHT, opacity: 0.3 }} />
        <div className="orb w-80 h-80 -bottom-24 -right-16" style={{ backgroundColor: ACCENT_DEEP, animationDelay: "-5s" }} />

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center text-white">
          <StatusBadge />
          <h2 className="mt-6 font-black tracking-tight text-4xl md:text-6xl leading-[1.05] text-balance">
            Ready to Shop Halloween for Less?
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto leading-relaxed text-pretty text-white/85">
            {
              "Join thousands of shoppers who have already claimed their discount code. Your Halloween savings at SHEIN are just a few clicks away."
            }
          </p>

          <div className="mt-12">
            <CTAButton large>Apply Now</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
