import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Castle, LogOut, Settings, Trophy, Activity, Calendar } from "lucide-react";
import Link from "next/link";
// We don't have NextAuth client components like SignOut here yet, so we'll just show the UI for now.

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            {/* Sidebar / Navbar placeholder */}
            <nav className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <Castle className="w-6 h-6 text-white" />
                            <span className="font-outfit font-bold tracking-tight text-white">HIT Chess Club</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-zinc-400 hidden sm:block">{session.user?.email}</span>
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
                                {session.user?.email?.charAt(0).toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold font-outfit mb-2">Welcome Back, {session.user?.name || 'Member'}!</h1>
                    <p className="text-zinc-400">Here's what's happening in the club today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Club Rating</h3>
                                <p className="text-sm text-zinc-400">Provisional</p>
                            </div>
                        </div>
                        <div className="text-4xl font-bold font-outfit">1200</div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Games Played</h3>
                                <p className="text-sm text-zinc-400">This Month</p>
                            </div>
                        </div>
                        <div className="text-4xl font-bold font-outfit">0</div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col justify-between">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Next Tournament</h3>
                                <p className="text-sm text-zinc-400">HIT Spring Open</p>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-white hover:bg-zinc-200 text-black rounded-xl text-sm font-medium transition-colors">
                            Register Now
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
