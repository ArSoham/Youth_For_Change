import { useState, useEffect, useRef } from "react";
import logoSrc from "../imports/logo.jpg";
import kumunImg from "../imports/KUMUN.jpg";
import nitiverseImg from "../imports/nitiverse.jpg";
import sanrakshyanImg from "../imports/Project_Samrakshyan.jpg";
import {
  ChevronRight,
  ChevronLeft,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  ExternalLink,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────
type InitiativeData = {
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  image: string;
};

// ── Data ───────────────────────────────────────────────────────────────────
const INITIATIVES: InitiativeData[] = [
  {
    slug: "project-sanrakshyan",
    title: "Project Sanrakshyan",
    description:
      "A conservation and environmental awareness initiative connecting university students with grassroots sustainability efforts and community-led conservation programs across Nepal.",
    ctaLabel: "Follow on Instagram",
    ctaUrl: "https://www.instagram.com/projectsanrakshan_/",
    image: sanrakshyanImg,
  },
  {
    slug: "nitiverse",
    title: "Nitiverse",
    description:
      "Fueling the youth-led political and law-making revolution — a platform for policy discussions, civic engagement, and youth-led advocacy exploring how today's students can shape tomorrow's governance.",
    ctaLabel: "Follow on Instagram",
    ctaUrl: "https://www.instagram.com/nitiverse.official/",
    image: nitiverseImg,
  },
  {
    slug: "kumun",
    title: "KUMUN",
    description:
      "Kathmandu University Model United Nations — an annual conference that simulates UN committee sessions, building diplomatic skills, global awareness, and collaborative problem-solving among students.",
    ctaLabel: "Follow on Instagram",
    ctaUrl: "https://www.instagram.com/kumun_25/",
    image: kumunImg,
  },
];

const EVENTS = [
  {
    title: "Book Talk Session",
    date: "March 2025",
    location: "KU Campus",
    status: "past",
    description:
      "Promoting literacy and intellectual exchange through discussions on recently read books across all departments.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Pride Parade & Flash Mob",
    date: "February 2025",
    location: "KU Campus",
    status: "past",
    description:
      "Celebrating diversity and advocating for inclusivity to foster a safe and welcoming campus environment for all.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Tejshree Memorial Moot Court",
    date: "January 2025",
    location: "KU School of Law",
    status: "past",
    description:
      "Supporting legal excellence and youth advocacy through collaborative competitions and legal education engagement.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Financial Literacy Session",
    date: "December 2024",
    location: "KU Campus",
    status: "past",
    description:
      "Enhancing students' understanding of financial markets, investment concepts, and economic awareness through expert-led workshops.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "MoU Initiative",
    date: "November 2024",
    location: "Kathmandu University",
    status: "past",
    description:
      "Fostering collaboration and long-term youth empowerment through strategic partnerships with international organizations.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop&auto=format",
  },
];

const TEAM_PRESIDENT = {
  name: "Aayush Chaudhary",
  role: "President",
  quote: "Change begins when young voices are heard and empowered to act.",
};

// hue rotations to tint the YFC logo for each card placeholder
const HUE_ROTATIONS = [30, 60, 120, 180, 200, 240, 270, 300, 330, 15, 45, 90, 150, 210, 255, 285, 315, 345, 0, 75, 135, 165, 225, 195, 105, 25, 55];

const TEAM_MEMBERS = [
  { name: "Gaurav Khanal", role: "Vice-President" },
  { name: "Usha Sapkota", role: "Vice-President" },
  { name: "Susan Sapkota", role: "General Secretary" },
  { name: "Rishab Basnet", role: "Secretary" },
  { name: "Crezal Thapa", role: "Secretary" },
  { name: "Joshna Parajuli", role: "Treasurer" },
  { name: "UmaShankar Mishra", role: "Event Manager" },
  { name: "Najmul Haque", role: "Event Manager" },
  { name: "Soniya Dahal", role: "PR & Outreach Manager" },
  { name: "Ashlesha Pandey", role: "Design and Content Coordinator" },
  { name: "Kushal Kunwar", role: "Logistics and Operations Coordinator" },
  { name: "Anup Shrestha", role: "Volunteer and Engagement Coordinator" },
  { name: "Soham Aryal", role: "KUSOS Representative" },
  { name: "Prabesh Ojha", role: "KUSOE Representative" },
  { name: "Subham Singh", role: "KUSOL Representative" },
  { name: "Roshima Bhatta", role: "KUSOM Representative" },
  { name: "Chiranjeet Singh", role: "KUSMS Representative" },
  { name: "Durga Prasad Bajgain", role: "KUSOA Representative" },
  { name: "Pushpanjali Niraula", role: "Executive Member" },
  { name: "Bikram Thapa", role: "Executive Member" },
  { name: "Diksha Sharma", role: "Executive Member" },
  { name: "Sandesh Khadka", role: "Executive Member" },
  { name: "Kritika Neupane", role: "Executive Member" },
  { name: "Mohan Prasad Niraula", role: "Executive Member" },
  { name: "Shashwot Poudyal", role: "Executive Member" },
  { name: "Sagar Budha", role: "Executive Member" },
];

const GALLERY_PHOTOS = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=500&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=700&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
];

// ── Hooks ──────────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

// ── Sub-components ─────────────────────────────────────────────────────────
function StatCounter({
  target,
  suffix = "",
  active,
}: {
  target: number;
  suffix?: string;
  active: boolean;
}) {
  const count = useCountUp(target, active);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#F5A623] bg-[#F5A623]/10 rounded-full mb-4">
      {children}
    </div>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar({ onNav }: { onNav: (id: string) => void }) {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Initiatives", "Events", "Team", "Gallery"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => onNav("home")}
          className="flex items-center gap-3 group"
        >
          <img
            src={logoSrc}
            alt="YFC Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-extrabold text-sm md:text-base tracking-tight transition-colors ${
                solid ? "text-[#1B3B6F]" : "text-white"
              }`}
            >
              Youth For Change
            </span>
            <span
              className={`text-xs transition-colors hidden md:block ${
                solid ? "text-[#F5A623]" : "text-[#F5A623]"
              }`}
            >
              Kathmandu University
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => onNav(l.toLowerCase())}
              className={`text-sm font-semibold transition-colors hover:text-[#F5A623] ${
                solid ? "text-[#1A1A2E]" : "text-white/90"
              }`}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => onNav("join")}
            className="ml-2 px-5 py-2 bg-[#F5A623] text-[#1A1A2E] text-sm font-bold rounded-full hover:bg-[#e8961a] transition-all hover:scale-105 shadow-md"
          >
            Join Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1 transition-colors ${
            solid ? "text-[#1B3B6F]" : "text-white"
          }`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => {
                onNav(l.toLowerCase());
                setMobileOpen(false);
              }}
              className="text-left text-sm font-semibold text-[#1A1A2E] hover:text-[#F5A623] py-1 transition-colors"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => {
              onNav("join");
              setMobileOpen(false);
            }}
            className="self-start px-6 py-2.5 bg-[#F5A623] text-[#1A1A2E] font-bold rounded-full text-sm hover:bg-[#e8961a] transition-colors"
          >
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#1B3B6F]" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop&auto=format)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gold accent circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F5A623]/10 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-[#F5A623]/8 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 pt-28 pb-12 flex flex-col md:flex-row items-center gap-12">
          {/* Text block */}
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/25 bg-white/8 text-xs text-white/75 font-semibold tracking-widest uppercase">
              Est. 2020 · Kathmandu University
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tight">
              Empowering Youth{" "}
              <span
                className="block text-[#F5A623]"
                style={{ WebkitTextStroke: "0px" }}
              >
                for Social Impact
              </span>
            </h1>
            <p className="text-base md:text-lg font-semibold text-white/50 mb-5 tracking-[0.25em] uppercase">
              Lead · Learn · Explore
            </p>
            <p className="text-sm md:text-base text-white/65 max-w-xl mb-10 leading-relaxed">
              Youth For Change – Kathmandu University is a student-led
              organization dedicated to creating meaningful social impact through
              youth engagement, intellectual exchange, advocacy, and
              collaboration.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNav("join")}
                className="px-7 py-3 bg-[#F5A623] text-[#1A1A2E] font-bold rounded-full hover:bg-[#e8961a] transition-all hover:scale-105 shadow-lg text-sm"
              >
                Get Involved
              </button>
              <button
                onClick={() => onNav("about")}
                className="px-7 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Logo hero */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#F5A623]/20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-[#F5A623]/10 scale-125" />
              <img
                src={logoSrc}
                alt="Youth For Change Logo"
                className="relative w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#0f2347]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 gap-4 text-center">
          {[
            { value: "2020", label: "Established" },
            { value: "4", label: "Initiatives" },
            { value: "6+", label: "Years Active" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-black text-[#F5A623]">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="about"
      className="py-24 bg-[#F7F7F5]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3B6F] mb-6 leading-tight">
              Who We Are
            </h2>
            <p
              className="text-[#555] leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Youth For Change – Kathmandu University (YFC-KU) is a student-led
              organization established in 2020 with the goal of creating
              meaningful social impact through youth engagement, intellectual
              exchange, advocacy, and collaboration.
            </p>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#F5A623] rounded-full" />
                <div>
                  <h3 className="font-bold text-[#1B3B6F] mb-1 text-sm uppercase tracking-wide">
                    Our Mission
                  </h3>
                  <p
                    className="text-sm text-[#666] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    To promote literacy, inclusivity, youth empowerment, and
                    financial awareness through impactful programs,
                    collaborations, and community engagement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#1B3B6F] rounded-full" />
                <div>
                  <h3 className="font-bold text-[#1B3B6F] mb-1 text-sm uppercase tracking-wide">
                    Our Vision
                  </h3>
                  <p
                    className="text-sm text-[#666] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    To create transformative opportunities for youth, foster
                    innovation and collaboration, and build a more inclusive and
                    empowered community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image + stats */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-6 bg-[#1B3B6F] aspect-video shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop&auto=format"
                alt="YFC team members collaborating on campus"
                className="w-full h-full object-cover opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B6F]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="text-white/80 text-sm italic"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "Together we rise — every voice matters."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { target: 2020, label: "Established", suffix: "" },
                { target: 4, label: "Initiatives", suffix: "" },
                { target: 6, label: "Years Active", suffix: "+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100"
                >
                  <div className="text-2xl font-black text-[#F5A623]">
                    <StatCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      active={visible}
                    />
                  </div>
                  <div className="text-[10px] text-[#999] uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Initiatives ────────────────────────────────────────────────────────────
function Initiatives() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="initiatives"
      className="py-24 bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <SectionLabel>Our Initiatives</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3B6F]">
            Programs Driving Change
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIATIVES.map((init) => (
            <a
              key={init.slug}
              href={init.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-white block"
            >
              <div className="relative h-52 overflow-hidden bg-[#1B3B6F]">
                <img
                  src={init.image}
                  alt={init.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-white font-black text-lg drop-shadow-md">
                    {init.title}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p
                  className="text-sm text-[#666] leading-relaxed mb-5 line-clamp-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {init.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#F5A623] group-hover:gap-3 transition-all">
                  {init.ctaLabel} <ExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Events ─────────────────────────────────────────────────────────────────
function Events() {
  const { ref, visible } = useFadeIn();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filtered = EVENTS.filter(
    (e) => filter === "all" || e.status === filter
  );

  return (
    <section
      id="events"
      className="py-24 bg-[#F7F7F5]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <SectionLabel>Events</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3B6F] mb-8">
            Moments That Matter
          </h2>
          {/* Filter tabs */}
          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 gap-1 shadow-sm">
            {(["all", "upcoming", "past"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all ${
                  filter === f
                    ? "bg-[#1B3B6F] text-white shadow-sm"
                    : "text-[#999] hover:text-[#1B3B6F]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <div
              key={event.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-44 overflow-hidden bg-[#1B3B6F]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-75"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider ${
                      event.status === "upcoming"
                        ? "bg-[#F5A623] text-[#1A1A2E]"
                        : "bg-white/80 text-[#1B3B6F]"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1B3B6F] mb-1.5 text-base">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#F5A623] font-semibold mb-3">
                  <MapPin size={11} />
                  {event.location} · {event.date}
                </div>
                <p
                  className="text-sm text-[#777] leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Team ───────────────────────────────────────────────────────────────────
function Team() {
  const { ref, visible } = useFadeIn();
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX - (carouselRef.current?.offsetLeft ?? 0);
    scrollLeft.current = carouselRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft ?? 0);
    carouselRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.4;
  };

  const scroll = (dir: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="team"
      className="py-24 bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3B6F]">
            The People Behind the Change
          </h2>
        </div>

        {/* President card */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-gradient-to-br from-[#1B3B6F] to-[#0d2347] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#F5A623]/10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="flex-shrink-0 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#F5A623] shadow-2xl relative z-10 bg-[#0d2347] flex items-center justify-center">
            <img
              src={logoSrc}
              alt={TEAM_PRESIDENT.name}
              className="w-4/5 h-4/5 object-contain"
              style={{ filter: "hue-rotate(0deg) brightness(1.1)" }}
            />
          </div>
          <div className="text-white relative z-10 text-center md:text-left">
            <div className="inline-block text-xs text-[#F5A623] font-black uppercase tracking-widest mb-3 bg-[#F5A623]/10 px-3 py-1 rounded-full">
              {TEAM_PRESIDENT.role}
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              {TEAM_PRESIDENT.name}
            </h3>
            <blockquote
              className="text-white/65 italic text-base md:text-lg max-w-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              "{TEAM_PRESIDENT.quote}"
            </blockquote>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#F5A623] hover:border-[#F5A623] hover:text-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#F5A623] hover:border-[#F5A623] hover:text-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
          >
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={member.name}
                className="flex-shrink-0 w-44 bg-[#F7F7F5] rounded-2xl p-5 text-center border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[#F5A623]/30 bg-[#1B3B6F] flex items-center justify-center">
                  <img
                    src={logoSrc}
                    alt={member.name}
                    className="w-4/5 h-4/5 object-contain"
                    style={{ filter: `hue-rotate(${HUE_ROTATIONS[i % HUE_ROTATIONS.length]}deg)` }}
                  />
                </div>
                <div className="font-bold text-sm text-[#1B3B6F] leading-snug">
                  {member.name}
                </div>
                <div
                  className="text-xs text-[#999] mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery ────────────────────────────────────────────────────────────────
function Gallery() {
  const { ref, visible } = useFadeIn();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) =>
          i === null ? null : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      if (e.key === "ArrowRight")
        setLightboxIdx((i) =>
          i === null ? null : (i + 1) % GALLERY_PHOTOS.length
        );
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx]);

  return (
    <section
      id="gallery"
      className="py-24 bg-[#F7F7F5]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-black text-[#1B3B6F]">
            Memories in Motion
          </h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {GALLERY_PHOTOS.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative bg-[#1B3B6F]"
              onClick={() => setLightboxIdx(i)}
            >
              <img
                src={src}
                alt={`YFC gallery photo ${i + 1}`}
                className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/20 transition-all flex items-center justify-center">
                  <ExternalLink size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx(
                (i) =>
                  i === null
                    ? null
                    : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
              );
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={GALLERY_PHOTOS[lightboxIdx]}
            alt={`Gallery photo ${lightboxIdx + 1}`}
            className="max-w-[88vw] max-h-[88vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) =>
                i === null ? null : (i + 1) % GALLERY_PHOTOS.length
              );
            }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-5 text-white/40 text-xs tracking-widest">
            {lightboxIdx + 1} / {GALLERY_PHOTOS.length}
          </div>
        </div>
      )}
    </section>
  );
}

// ── Join Us ────────────────────────────────────────────────────────────────
function JoinUs() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="join"
      className="py-28 bg-[#F5A623] relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#1B3B6F]/10 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest text-[#1B3B6F] bg-[#1B3B6F]/10 rounded-full mb-6">
          Join Us
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1B3B6F] mb-6 leading-tight">
          Join the Movement
        </h2>
        <p
          className="text-base md:text-lg text-[#1B3B6F]/75 mb-10 leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Are you passionate about social change? Join Youth for Change and be
          part of a community of young leaders making a difference.
        </p>
        <a
          href="https://forms.gle/aJwfCzGFUQ5o6mDB7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-4 bg-[#1B3B6F] text-white font-black text-base rounded-full hover:bg-[#0d2347] transition-all hover:scale-105 shadow-2xl"
        >
          Open Registration Form <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer
      className="bg-[#0d2347] text-white/60 pt-16 pb-8"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoSrc}
                alt="YFC Logo"
                className="h-10 w-10 rounded-full shadow-md"
              />
              <div>
                <div className="font-black text-white text-sm">
                  Youth For Change
                </div>
                <div className="text-xs text-[#F5A623]">
                  Kathmandu University
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Empowering youth to create sustainable social impact through
              innovation and community engagement.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-black mb-4 text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                "About",
                "Initiatives",
                "Events",
                "Team",
                "Gallery",
                "Join Us",
              ].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      onNav(l.toLowerCase().replace(/\s/g, ""))
                    }
                    className="text-sm hover:text-[#F5A623] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black mb-4 text-xs uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li
                className="flex items-center gap-2.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Mail size={13} className="text-[#F5A623] flex-shrink-0" />
                youthforchangeku@gmail.com
              </li>
              <li
                className="flex items-center gap-2.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Phone size={13} className="text-[#F5A623] flex-shrink-0" />
                +977 9869389023
              </li>
              <li
                className="flex items-start gap-2.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MapPin
                  size={13}
                  className="text-[#F5A623] flex-shrink-0 mt-0.5"
                />
                Kathmandu University, Kavre, Nepal
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/youthforchange_ku/", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/youthforchangeku", label: "Facebook" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#F5A623] hover:border-[#F5A623] hover:text-[#1A1A2E] transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30 tracking-wide">
          © 2026 Youth for Change – Kathmandu University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ── App (root) ─────────────────────────────────────────────────────────────
export default function App() {
  const handleNav = (id: string) => {
    const map: Record<string, string> = {
      home: "home",
      about: "about",
      initiatives: "initiatives",
      events: "events",
      team: "team",
      gallery: "gallery",
      join: "join",
      joinus: "join",
    };
    const sectionId = map[id] ?? id;
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className="bg-[#F7F7F5]">
      <Navbar onNav={handleNav} />
      <main>
        <Hero onNav={handleNav} />
        <About />
        <Initiatives />
        <Events />
        <Team />
        <Gallery />
        <JoinUs />
      </main>
      <Footer onNav={handleNav} />
    </div>
  );
}
