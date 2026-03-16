"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronRight, Crown, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground selection:bg-white/30 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight font-outfit mb-8"
            >
              <span className="text-gradient-alt drop-shadow-sm">Master</span> <span className="text-white drop-shadow-md">Your Mind.</span><br />
              <span className="text-white drop-shadow-md">Defend</span> <span className="text-gradient drop-shadow-none">The King.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Join the official HIT Chess Club. Compete in university-wide tournaments, analyze grandmaster games, and elevate your Elo rating with fellow enthusiasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/auth/signin" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                Join The Club
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#about" className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white glass-panel hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10">
                Explore Events
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-white">Weekly Tournaments</h3>
              <p className="text-zinc-400">Compete in our regular Blitz and Rapid tournaments with cash prizes and university ranking points.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-white">Active Community</h3>
              <p className="text-zinc-400">Connect with hundreds of chess enthusiasts at HIT. Find practice partners for any rating level.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-white">Expert Analysis</h3>
              <p className="text-zinc-400">Weekly sessions analyzing games from top grandmasters and reviewing our own members' games.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Basic Footer for the Landing Page */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Harbin Institute of Technology Chess Club. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
