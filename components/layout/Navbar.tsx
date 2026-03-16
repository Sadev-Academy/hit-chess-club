"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Castle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-x-0 border-t-0 rounded-none bg-black/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-3">
                        <motion.div
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Castle className="w-8 h-8 text-white" />
                        </motion.div>
                        <Link href="/" className="font-outfit text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                            HIT Chess <span className="text-zinc-400 font-light hidden sm:inline">Club</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#about" className="text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link href="#events" className="text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Events</Link>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/auth/signin" className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl">
                                    Member Login
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-panel border-t border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#about" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="#events" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</Link>
                        <Link href="#leaderboard" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Leaderboard</Link>
                        <Link href="/auth/signin" className="bg-white text-black block px-3 py-2 rounded-md text-base font-medium mt-4">
                            Member Login
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
