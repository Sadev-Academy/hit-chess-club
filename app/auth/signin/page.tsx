"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { Castle, Mail, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await signIn("email", {
                email,
                redirect: false,
                callbackUrl: "/dashboard",
            });

            if (result?.error) {
                // Handle error (e.g., show toast)
                console.error(result.error);
            } else {
                setIsSuccess(true);
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
                {/* Ambient background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-8 rounded-2xl max-w-md w-full text-center relative z-10"
                >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold font-outfit mb-4 text-white">Check Your Email</h2>
                    <p className="text-zinc-400 mb-8">
                        A sign-in link has been sent to <span className="text-white font-medium">{email}</span>.
                        Click the link to securely sign in to your HIT Chess Club account.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        Use a different email address
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[100px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] opacity-40 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 relative z-10"
            >
                <Link href="/" className="flex items-center gap-3">
                    <Castle className="w-10 h-10 text-white" />
                    <span className="font-outfit text-3xl font-bold tracking-tight text-white">
                        HIT Chess Club
                    </span>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl max-w-md w-full relative z-10"
            >
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2 font-outfit">Welcome Back</h1>
                    <p className="text-zinc-400 text-sm">Sign in to access the member dashboard, tournaments, and events.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-black bg-white hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                Sign In with Email
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs text-zinc-500">
                        By signing in, you agree to the HIT Chess Club Terms of Service and Privacy Policy. Only club members have access to the dashboard.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
