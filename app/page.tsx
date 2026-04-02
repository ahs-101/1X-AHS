'use client';

import { Header } from '@/components/ui/header-2';
import { DottedSurface } from '@/components/ui/dotted-surface';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import StickyTabs from '@/components/ui/sticky-section-tabs';
import { PricingSection } from '@/components/ui/pricing';
import Footer from '@/components/ui/animated-footer';
import {
  Mic,
  Smartphone,
  Battery,
  Radio,
  Music,
  Shield,
  Feather,
  Volume2,
  Layers,
  Hand,
  Brain,
  MessageSquare,
  Eye,
  Navigation,
  Cpu,
} from 'lucide-react';

// ─── Features data for the Radial Orbital Timeline ───────────────────────────
const featuresData = [
  {
    id: 1,
    title: 'Redwood AI',
    date: '2026',
    content: 'Vision language model for learning and performing chores autonomously in your home.',
    category: 'Intelligence',
    icon: Brain,
    relatedIds: [2, 8],
    status: 'completed' as const,
    energy: 95,
  },
  {
    id: 2,
    title: 'Built-in LLM',
    date: '2026',
    content: 'Interaction driven by a large language model capable of understanding, reasoning, and conversing.',
    category: 'Intelligence',
    icon: MessageSquare,
    relatedIds: [1, 3],
    status: 'completed' as const,
    energy: 90,
  },
  {
    id: 3,
    title: 'Voice Interface',
    date: '2026',
    content: 'Speak naturally to NEO to access all features without any device.',
    category: 'Utility',
    icon: Mic,
    relatedIds: [2, 4],
    status: 'completed' as const,
    energy: 85,
  },
  {
    id: 4,
    title: 'Mobile App',
    date: '2026',
    content: 'Manage chore schedule, communicate remotely, and monitor NEO from anywhere.',
    category: 'Utility',
    icon: Smartphone,
    relatedIds: [3, 5],
    status: 'completed' as const,
    energy: 80,
  },
  {
    id: 5,
    title: 'Self-Charge',
    date: '2026',
    content: "NEO manages its own battery. When it needs a charge — it plugs itself in.",
    category: 'Utility',
    icon: Battery,
    relatedIds: [4, 6],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 6,
    title: 'Remote Control',
    date: '2026',
    content: 'Pilot NEO from anywhere via Mobile App and VR device.',
    category: 'Utility',
    icon: Radio,
    relatedIds: [5, 7],
    status: 'completed' as const,
    energy: 75,
  },
  {
    id: 7,
    title: 'Boom Box',
    date: '2026',
    content: 'Use NEO as a mobile Bluetooth speaker anywhere in the home.',
    category: 'Utility',
    icon: Music,
    relatedIds: [6],
    status: 'completed' as const,
    energy: 70,
  },
  {
    id: 8,
    title: 'Visual Intelligence',
    date: '2026',
    content: 'Uses visual input and spatial awareness to enhance conversations and navigation.',
    category: 'Intelligence',
    icon: Eye,
    relatedIds: [1, 9],
    status: 'completed' as const,
    energy: 88,
  },
  {
    id: 9,
    title: 'Fully Mobile',
    date: '2026',
    content: 'Uses AI for navigating around your home to wherever it is needed.',
    category: 'Intelligence',
    icon: Navigation,
    relatedIds: [8, 10],
    status: 'completed' as const,
    energy: 82,
  },
  {
    id: 10,
    title: 'NEO Cortex',
    date: '2026',
    content: 'Nvidia Jetson Thor chipset with up to 2070 FP4 TFLOPS of AI compute power.',
    category: 'Hardware',
    icon: Cpu,
    relatedIds: [9, 1],
    status: 'completed' as const,
    energy: 100,
  },
  {
    id: 11,
    title: 'Soft Body',
    date: '2026',
    content: 'All hardware wrapped in custom 3D lattice polymer for safety and cushioning.',
    category: 'Design',
    icon: Feather,
    relatedIds: [12, 13],
    status: 'completed' as const,
    energy: 90,
  },
  {
    id: 12,
    title: 'Ultra Quiet',
    date: '2026',
    content: 'Operates at only 22 dB — quieter than a modern refrigerator.',
    category: 'Design',
    icon: Volume2,
    relatedIds: [11],
    status: 'completed' as const,
    energy: 78,
  },
  {
    id: 13,
    title: 'Tendon Drive',
    date: '2026',
    content: '1X Tendon Drive actuation creates precise, low-energy, safe movements for home use.',
    category: 'Design',
    icon: Layers,
    relatedIds: [11, 14],
    status: 'completed' as const,
    energy: 85,
  },
  {
    id: 14,
    title: 'Pinch Proof',
    date: '2026',
    content: 'Joints covered from outside access — surface entirely pinch proof for household safety.',
    category: 'Design',
    icon: Shield,
    relatedIds: [13],
    status: 'completed' as const,
    energy: 95,
  },
  {
    id: 15,
    title: 'Memory',
    date: '2026',
    content: 'Retains information to personalize your experience and grow with your household.',
    category: 'Intelligence',
    icon: Hand,
    relatedIds: [2, 8],
    status: 'in-progress' as const,
    energy: 60,
  },
];

// ─── Scroll Areas / Sticky Tabs content ──────────────────────────────────────
function UtilityContent() {
  const items = [
    { icon: '🤖', title: 'Autonomy', desc: 'NEO uses Redwood AI — 1X\'s Generalist AI model — for learning and repeating tasks. Arrives with basic autonomy and grows in capability over time.' },
    { icon: '📅', title: 'Expert Mode', desc: 'For complex tasks NEO doesn\'t know, a 1X Expert can remotely supervise its actions at scheduled times to help it learn.' },
    { icon: '🎙️', title: 'Voice Interface', desc: 'Speak naturally to NEO to access all features without devices.' },
    { icon: '📱', title: 'NEO App', desc: 'Manage chore schedule, communicate remotely, monitor NEO and more.' },
    { icon: '🔋', title: 'Self-Charge', desc: 'NEO manages its own battery life. When it needs a charge — it plugs itself in.' },
    { icon: '🎮', title: 'Remote Control', desc: 'Pilot NEO from anywhere via Mobile App & VR device.' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.title} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors">
          <div className="text-2xl mb-3">{item.icon}</div>
          <h3 className="text-white font-semibold mb-2">{item.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

function DesignContent() {
  const attrs = [
    { label: 'LIGHT', title: 'Fewer components make NEO lightweight without compromising strength.', stat: '66 lbs' },
    { label: 'QUIET', title: 'Operates at a noise level quieter than a modern refrigerator.', stat: '22 dB' },
    { label: 'SOFT', title: 'Deformable 3D lattice wraps internal components for cushion and safety.', stat: 'IP44' },
    { label: 'GENTLE', title: 'Tendon-driven actuators create safe, precise movements for everyday home life.', stat: '154 lbs lift' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {attrs.map((a) => (
        <div key={a.label} className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors">
          <span className="text-xs tracking-[0.3em] text-white/40 uppercase font-medium">{a.label}</span>
          <p className="text-white mt-3 text-base leading-relaxed">{a.title}</p>
          <p className="text-white/30 text-sm mt-4 font-mono">{a.stat}</p>
        </div>
      ))}
    </div>
  );
}

function CompanionContent() {
  const cards = [
    { title: 'Smart', desc: 'Ask anything — history, recipes, or advice — and get real-time answers powered by a built-in LLM.' },
    { title: 'Contextual Help', desc: 'Pairs visual and spatial awareness with memory to personalize every interaction to your home.' },
    { title: 'Fun', desc: 'Shares jokes, stories, and games for lively, natural conversations your whole family will enjoy.' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((c) => (
        <div key={c.title} className="p-8 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-white text-xl font-semibold mb-4">{c.title}</h3>
          <p className="text-white/60 leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}

function IntelligenceContent() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-xl border border-white/20 bg-white/5">
          <h3 className="text-white text-xl font-semibold mb-3">Redwood AI</h3>
          <p className="text-white/60 leading-relaxed">Vision language model for learning and performing chores. NEO's core AI that understands your home and grows smarter every day.</p>
        </div>
        <div className="p-8 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-white text-xl font-semibold mb-3">Grows With You</h3>
          <p className="text-white/60 leading-relaxed">NEO continuously improves through supervised learning. Every task it learns from a 1X Expert becomes a permanent capability.</p>
        </div>
        <div className="p-8 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-white text-xl font-semibold mb-3">Audio Intelligence</h3>
          <p className="text-white/60 leading-relaxed">4 beamforming microphones interpret audio cues, voices, and conversational context anywhere in the room.</p>
        </div>
        <div className="p-8 rounded-xl border border-white/10 bg-white/5">
          <h3 className="text-white text-xl font-semibold mb-3">Dual Stereo Vision</h3>
          <p className="text-white/60 leading-relaxed">Dual 8.85MP 90Hz stereo fisheye cameras for precise spatial awareness, object recognition, and safe navigation.</p>
        </div>
      </div>
      <div className="p-6 rounded-xl border border-white/10 bg-black/40">
        <h4 className="text-white/40 text-xs tracking-widest uppercase mb-4">Hardware Specs</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'AI Compute', val: '2070 TFLOPS' },
            { label: 'Chipset', val: 'NEO Cortex' },
            { label: 'Connectivity', val: 'WiFi / BT / 5G' },
            { label: 'Cameras', val: '2× 8.85MP 90Hz' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-white font-semibold">{s.val}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Pricing plans ────────────────────────────────────────────────────────────
const neoPricingPlans = [
  {
    name: 'Standard',
    price: '499',
    yearlyPrice: '399',
    period: 'month',
    features: [
      'Monthly Subscription',
      'Starter Productivity Package',
      'Standard Delivery',
      'Charger, Lint Roller & Carry Case',
      'Redwood AI — grows over time',
    ],
    description: 'The most accessible way to bring NEO home.',
    buttonText: 'Start with Standard',
    href: 'https://www.1x.tech/order',
  },
  {
    name: 'Early Access',
    price: '20000',
    yearlyPrice: '20000',
    period: 'one-time',
    features: [
      'Full Ownership',
      '3-Year Warranty',
      'Premium Support',
      'Priority Delivery',
      'Charger, Lint Roller & Carry Case',
      '$200 Deposit — Fully Refundable',
    ],
    description: 'Own your NEO. US deliveries start 2026.',
    buttonText: 'Reserve — $200 Deposit',
    href: 'https://www.1x.tech/order',
    isPopular: true,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* 1. Navigation */}
      <Header />

      {/* 2. Hero — full-viewport with dotted wave shader + CSS robot silhouette */}
      <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
        {/* Dotted-surface shader background */}
        <DottedSurface className="z-0" />


        {/* Hero copy overlaid on top */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end pb-20 px-8 md:px-16">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-3">Introducing</p>
            <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tight text-white mb-2">
              NEO
            </h1>
            <p className="text-2xl md:text-3xl text-white/70 font-light mb-8">Home Robot</p>
            <p className="text-white/50 text-sm mb-6 max-w-md leading-relaxed">
              Building a world where we do more of what we love,<br />
              while our humanoid companions handle the rest.
            </p>
            <div className="pointer-events-auto flex items-center gap-4">
              <a
                href="https://www.1x.tech/order"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3 rounded-full text-sm hover:bg-white/90 transition-colors"
              >
                Order — $200 Deposit
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3 rounded-full text-sm hover:bg-white/5 transition-colors"
              >
                Explore NEO
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      </section>

      {/* 3. Value props strip */}
      <section className="bg-black py-16 px-8 md:px-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🤝', title: 'Helping Hand', desc: 'Provides assistance with everyday household tasks' },
            { icon: '⏱', title: 'Reclaim Time', desc: 'Automates chores, freeing time for what you love' },
            { icon: '💡', title: 'Helpful Intelligence', desc: 'Brings useful insight into every conversation' },
          ].map((card) => (
            <div key={card.title} className="p-6">
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              <p className="text-white/50 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Features — Radial Orbital Timeline */}
      <section id="features" className="relative bg-black">
        <div className="text-center pt-20 pb-4 px-8">
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Transform Your Home</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Click any node to explore NEO's capabilities — from Redwood AI to tendon-driven safe movements.
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={featuresData} />
      </section>

      {/* 5. Scroll Areas — Sticky Section Tabs */}
      <section id="scroll-areas">
        <StickyTabs
          mainNavHeight="3.5rem"
          rootClassName="bg-black text-white"
          navSpacerClassName="border-b border-white/10 bg-[#0d0d0d]"
          sectionClassName="bg-[#0f0f0f]"
          stickyHeaderContainerClassName="shadow-xl"
          headerContentWrapperClassName="border-b border-t border-white/10 bg-black"
          headerContentLayoutClassName="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12"
          titleClassName="my-0 text-2xl font-medium leading-none md:text-3xl lg:text-4xl text-white"
          contentLayoutClassName="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
        >
          <StickyTabs.Item title="Utility — Automate Your Chores" id="utility">
            <UtilityContent />
          </StickyTabs.Item>
          <StickyTabs.Item title="Design — Soft and Safe" id="design">
            <DesignContent />
          </StickyTabs.Item>
          <StickyTabs.Item title="Companion — Laugh and Learn" id="companion">
            <CompanionContent />
          </StickyTabs.Item>
          <StickyTabs.Item title="Intelligence — Grows With You" id="intelligence">
            <IntelligenceContent />
          </StickyTabs.Item>
        </StickyTabs>
      </section>

      {/* 6. Pricing */}
      <section id="pricing">
        <PricingSection
          plans={neoPricingPlans}
          title="Own Your Time"
          description={`Two ways to bring NEO home.\nSubscribe monthly or own outright — both include everything in the box.`}
        />
        <div className="bg-[#0d0d0d] py-8 text-center border-t border-white/5">
          <p className="text-white/30 text-sm">In the box: Charger · Lint Roller · Carry Case</p>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer
        leftLinks={[
          { href: 'https://www.1x.tech/neo', label: 'NEO' },
          { href: 'https://www.1x.tech/ai', label: 'AI' },
          { href: 'https://www.1x.tech/about', label: 'About' },
          { href: 'https://www.1x.tech/discover', label: 'Stories' },
          { href: 'https://www.1x.tech/robot-fleet', label: 'Robot Fleet' },
          { href: 'https://www.1x.tech/terms-and-conditions', label: 'Terms of Use' },
          { href: 'https://www.1x.tech/privacy-policy', label: 'Privacy & Cookies' },
        ]}
        rightLinks={[
          { href: 'https://www.1x.tech/careers', label: 'Careers — 136 Open Roles' },
          { href: 'https://www.1x.tech/get-updates', label: 'Get Updates' },
          { href: 'https://www.linkedin.com/company/1x-technologies', label: 'LinkedIn' },
          { href: 'https://www.youtube.com/@1X-tech', label: 'YouTube' },
          { href: 'https://www.instagram.com/1x.technologies/', label: 'Instagram' },
          { href: 'https://www.tiktok.com/@1x.tech', label: 'TikTok' },
          { href: 'https://x.com/1x_tech', label: 'X / Twitter' },
        ]}
        copyrightText="1X Technologies © 2026. All Rights Reserved."
        barCount={23}
      />
    </div>
  );
}
