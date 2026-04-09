import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Concierge Agent",
  description:
    "Advanced Concierge agent that speaks, thinks, books and sells like your best performing humans 24/7 consistently.",
};

const F = '"Mazzard H", sans-serif';

const features = [
  {
    title: "More Than Answering Calls",
    desc: "Concierge agent is your 24/7 receptionist, appointment setter, support agent, relationship manager, admin assistant, handling both inbound and outbound, tailored to whatever your business needs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgb(59,130,246)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    iconBg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.15)",
  },
  {
    title: "Integrated Booking, 24/7",
    desc: "Concierge agent books and syncs appointments 24/7, directly into the tools you already use — from industry software like ServiceM8 and Cliniko to major CRMs like HubSpot, Zoho CRM and many more.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgb(59,130,246)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    iconBg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.15)",
  },
  {
    title: "Your Growth Command Centre",
    desc: "Our dashboard provides a transparent, real-time view of your call operations and sales pipeline to drive smarter growth.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgb(34,197,94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    iconBg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.15)",
  },
  {
    title: "Your Strategic AI Partner",
    desc: "AI isn't plug-and-play; we are the dedicated team that ensures it fits perfectly with your business processes to guarantee a tangible ROI.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgb(168,85,247)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    iconBg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.15)",
  },
];

const howItWorks = [
  {
    title: "Call Detection & Intent Recognition",
    desc: "The AI voice agent answers incoming calls, greets the caller, and uses NLP to detect the caller's intent — whether it's an order, booking, enquiry, or support request.",
    icon: (
      <img src="/images/framer/JJdkpkYQkxlFCR5EWNdMgLT9cE.svg" alt="Call Detection" width={24} height={24} />
    ),
  },
  {
    title: "Information Collection & Dialogue Flow",
    desc: "The agent engages the caller using dynamic, human-like dialogue to collect all necessary details, adjusting based on available knowledge and past interactions.",
    icon: (
      <img src="/images/framer/sYgRBJTKGJ9QM2GfNYWdjT3wwQQ.svg" alt="Information Collection" width={24} height={24} />
    ),
  },
  {
    title: "System Integration & Action Execution",
    desc: "The agent processes the captured data and integrates seamlessly with backend systems like POS, calendars, CRMs — executing tasks in real-time with zero manual effort.",
    icon: (
      <img src="/images/framer/64I1lbPeWZlClmOxEcxUyu1TyM.svg" alt="System Integration" width={24} height={24} />
    ),
  },
  {
    title: "Confirmation & Notification",
    desc: "It confirms the action with the caller and sends automated updates via SMS, email, dashboard notifications, or direct-to-printer commands to notify staff and log the interaction.",
    icon: (
      <img src="/images/framer/DDcrHqsceVlqjwVPLGEGynA4I6g.svg" alt="Confirmation" width={24} height={24} />
    ),
  },
];

const stats = [
  {
    value: "100%",
    label: "Calls Answered Instantly",
    desc: "Concierge agent is your always-on receptionist, immediate lead qualifier, instant support agent, and on-demand appointment setter — ensuring no customer ever waits.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    value: "70%",
    label: "Cheaper Than a Human",
    desc: "Slash your operational costs. Concierge agent works 24/7 without the overhead of salary, training, or sick days, delivering significant savings while handling more calls.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    value: "40%",
    label: "Boost in Customer Satisfaction",
    desc: "Customers love instant service. By answering every call immediately and providing consistent, professional responses, Concierge agent ensures a perfect experience, every time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const industries = [
  { name: "Medical", image: "/images/hero-image.png" },
  { name: "Plumber", image: "/images/hero-image.png" },
  { name: "Restaurant", image: "/images/hero-image.png" },
];

export default function ConciergeAgentPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section
        style={{
          background: "linear-gradient(210deg, rgba(177,76,245,0.12) -10%, rgba(59,130,246,0.08) 40%, #fff 70%)",
          padding: "60px 24px 50px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ScrollFadeIn>
          <p
            style={{
              fontFamily: F,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              color: "rgb(133,133,133)",
              marginBottom: 16,
            }}
          >
            AMPLIFYING HUMAN CAPABILITY THROUGH AI
          </p>

          <h1
            style={{
              fontFamily: F,
              fontWeight: 700,
              fontSize: "clamp(30px, 5vw, 50px)",
              lineHeight: 1.2,
              marginBottom: 18,
              maxWidth: 620,
              margin: "0 auto 18px",
            }}
          >
            Smarter{" "}
            <span className="gradient-text">Concierge Agent</span>{" "}
            for Australian Businesses
          </h1>

          <p
            style={{
              fontFamily: F,
              fontSize: 15,
              color: "rgb(83,82,91)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 30px",
            }}
          >
            Advanced Concierge agent that speak, think, book and sell like
            your best performing humans 24/7 consistently.
          </p>

          {/* Avatar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #fff",
                boxShadow: "0 8px 30px rgba(59,130,246,0.2)",
              }}
            >
              <Image
                src="/images/framer/poBS4r52uRXxSqB1Ncl56aF6uc8.jpg"
                alt="Emily - Demo Agent"
                width={140}
                height={140}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p style={{ fontFamily: F, fontSize: 12, color: "rgb(133,133,133)", maxWidth: 320 }}>
              Note: Emily is a demo agent only. In production, she&apos;ll be
              tailored to sound and speak exactly how your business needs.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="group btn-glow inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgb(59,130,246)",
              borderRadius: 30,
              height: 50,
              padding: "0 30px",
              fontFamily: F,
              fontWeight: 500,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <span className="transition-all duration-300">Book Demo</span>
            <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ========== FEATURES 2x2 ========== */}
      <section style={{ backgroundColor: "#fff", padding: "70px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
            className="concierge-features-grid"
          >
            {features.map((f, idx) => (
              <ScrollFadeIn key={f.title} delay={idx * 80}>
                <div style={{ textAlign: "center", padding: "10px 0" }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 16,
                      backgroundColor: f.iconBg,
                      border: `1.5px solid ${f.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: F,
                      fontWeight: 600,
                      fontSize: 16,
                      color: "rgb(23,26,31)",
                      marginBottom: 10,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: F, fontSize: 13, color: "rgb(83,82,91)", lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section style={{ backgroundColor: "rgb(247,250,255)", padding: "70px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2
              style={{
                fontFamily: F,
                fontWeight: 700,
                fontSize: 36,
                color: "rgb(23,26,31)",
                textAlign: "center",
                marginBottom: 56,
              }}
            >
              How Concierge Agent Works
            </h2>
          </ScrollFadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            className="concierge-how-grid"
          >
            {howItWorks.map((step, idx) => (
              <ScrollFadeIn key={step.title} delay={idx * 80}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      backgroundColor: "rgba(59,130,246,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: "rgb(23,26,31)", marginBottom: 8 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: F, fontSize: 12, color: "rgb(83,82,91)", lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS (purple→blue gradient) ========== */}
      <section
        style={{
          background: "linear-gradient(287deg, rgba(177,76,245,0.85) 0%, rgb(59,130,246) 100%)",
          padding: "70px 40px",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 40,
            }}
            className="concierge-stats-grid"
          >
            {stats.map((stat, idx) => (
              <ScrollFadeIn key={stat.value} delay={idx * 100}>
                <div style={{ textAlign: "center", color: "#fff" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      backgroundColor: "rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: F,
                      fontWeight: 700,
                      fontSize: 44,
                      color: "#fff",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {stat.value}
                  </div>
                  <h3
                    style={{
                      fontFamily: F,
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#fff",
                      marginBottom: 10,
                    }}
                  >
                    {stat.label}
                  </h3>
                  <p style={{ fontFamily: F, fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
                    {stat.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRY SOLUTIONS ========== */}
      <section style={{ backgroundColor: "#fff", padding: "70px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p
                style={{
                  fontFamily: F,
                  fontSize: 16,
                  color: "rgb(59,130,246)",
                  marginBottom: 6,
                }}
              >
                Concierge agent
              </p>
              <h2
                style={{
                  fontFamily: F,
                  fontWeight: 500,
                  fontSize: 30,
                  color: "rgb(133,133,133)",
                }}
              >
                solution for every industry
              </h2>
            </div>
          </ScrollFadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="concierge-industry-grid"
          >
            {industries.map((ind, idx) => (
              <ScrollFadeIn key={ind.name} delay={idx * 100}>
                <div>
                  <h3
                    style={{
                      fontFamily: F,
                      fontWeight: 600,
                      fontSize: 16,
                      color: "rgb(23,26,31)",
                      marginBottom: 14,
                      textAlign: "center",
                    }}
                  >
                    {ind.name}
                  </h3>
                  <div
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid rgba(0,0,0,0.08)",
                      aspectRatio: "16/10",
                      position: "relative",
                      backgroundColor: "rgb(245,247,255)",
                    }}
                  >
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
