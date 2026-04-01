/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Play,
  Instagram,
  BarChart3,
  Users,
  RefreshCw,
  Layout,
  Brain,
  Filter,
  Settings,
  MousePointerClick
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Rocket className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">ORION<span className="text-blue-500">GROWTH</span>LABS</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#results" className="hover:text-white transition-colors">Results</a>
        <a href="#process" className="hover:text-white transition-colors">Process</a>
        <a 
          href="https://calendly.com/emeraldmediamarketing/ogl-free-consultation" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all"
        >
          Book Consultation
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
          The Premier Growth Partner for Coaches
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
          We Scale Coaches to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            High-Ticket Dominance
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Orion Growth Labs is growth operator consultancy focused on the structural scaling of digital authorities. We specialize in building the backend architecture,integrating robust automation, high-conversion funnels, and precision sales systems — to turn viral visibility into a scalable enterprise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://calendly.com/emeraldmediamarketing/ogl-free-consultation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all group"
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#video" 
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/10 transition-all"
          >
            Watch Our Strategy
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const VideoSection = () => (
  <section id="video" className="py-20 bg-black">
    <div className="max-w-5xl mx-auto px-6">
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 group cursor-pointer shadow-2xl shadow-blue-500/5">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-blue-600/40">
            <Play className="text-white w-8 h-8 fill-current ml-1" />
          </div>
        </div>
        <img 
          src="https://picsum.photos/seed/agency-video/1280/720?blur=2" 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-8 left-8 z-10">
          <h3 className="text-2xl font-bold text-white mb-2">The Orion Growth Framework</h3>
          <p className="text-gray-300">How we add $50k-$100k MRR to your coaching business in 90 days.</p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const steps = [
    {
      step: "Step 1",
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      title: "Offer Repositioning & Ascension",
      description: "Move away from generic coaching. Reposition your service as a unique 'New Opportunity' that makes you the primary authority, then build an ascension pathway from low-ticket trust to high-ticket mastery."
    },
    {
      step: "Step 2",
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      title: "Build the Content Foundation",
      description: "Create an interconnected network across IG and YT. Use viral Reels/TikToks scripted from sales calls to hit pain points, and long-form YT content to build deep-dive authority."
    },
    {
      step: "Step 3",
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: "Implement Belief-Building",
      description: "Handle objections like 'no time' or 'tried this before' through targeted middle-of-funnel content. Shift viewers from liking you to trusting your solution and being ready to act."
    },
    {
      step: "Step 4",
      icon: <Filter className="w-6 h-6 text-green-400" />,
      title: "Install the Conversion Funnels",
      description: "Deploy a high-converting VSL (Video Sales Letter) explaining your unique mechanism. Use a 'Story-to-DM' engine to turn Story views into private sales conversations."
    },
    {
      step: "Step 5",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Scale with a Sales Team",
      description: "Hire and train 'setters' for DMs and 'closers' for strategy sessions. Track every metric—from lead source to cash collected—via a professional sales dashboard."
    },
    {
      step: "Step 6",
      icon: <Settings className="w-6 h-6 text-zinc-400" />,
      title: "Optimize Fulfillment Systems",
      description: "Build backend infrastructure (onboarding, portals, tracking) to maintain high student success rates. Shift your focus to high-level coaching while systems handle the rest."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Growth Ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A battle-tested 6-step framework to install elite systems and scale your coaching empire.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all relative group"
            >
              <div className="absolute top-6 right-8 text-xs font-bold text-blue-500/50 group-hover:text-blue-400 transition-colors">
                {item.step}
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const results = [
    {
      label: "Fitness Coach",
      growth: "+450% Reach",
      image: "https://picsum.photos/seed/ig1/600/800?blur=10"
    },
    {
      label: "Business Mentor",
      growth: "+12k Followers",
      image: "https://picsum.photos/seed/ig2/600/800?blur=10"
    },
    {
      label: "SaaS Founder",
      growth: "+85 Sales/Mo",
      image: "https://picsum.photos/seed/ig3/600/800?blur=10"
    }
  ];

  return (
    <section id="results" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-gray-400 max-w-xl">Real growth from real accounts. We blur the details to protect our clients' proprietary strategies.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-black" alt="Client" referrerPolicy="no-referrer" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-300">Joined by 50+ coaches</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={result.image} 
                  alt="Growth Screenshot" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Blur Overlay for "Instagram details" */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{result.label}</span>
                </div>
                <div className="text-2xl font-bold text-white">{result.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-blue-600 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
    </div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to Scale Your Empire?</h2>
      <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
        Stop guessing. Start growing. Book a free 15-minute strategy call to see if you're a fit for the Orion Growth Framework.
      </p>
      <a 
        href="https://calendly.com/emeraldmediamarketing/ogl-free-consultation" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/20"
      >
        Book My Free Call
        <ArrowRight className="w-6 h-6" />
      </a>
      <p className="mt-8 text-blue-200 text-sm font-medium flex items-center justify-center gap-2">
        <CheckCircle2 className="w-4 h-4" /> Limited spots available for Q2
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-zinc-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <Rocket className="text-blue-500 w-5 h-5" />
        <span className="text-lg font-bold tracking-tight text-white">ORION<span className="text-blue-500">GROWTH</span>LABS</span>
      </div>
      <div className="text-gray-500 text-sm">
        © 2024 Orion Growth Labs. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Users className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Services />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
