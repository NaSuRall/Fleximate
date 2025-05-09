import Navbar from "@/components/Navbar";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import Link from "next/link";
import Tableau from "@/components/Tableau";
import Calendar from "@/components/Calendar";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen h-full text-black">
            {/* Navbar components */}
            <Navbar />

            {/* Main */}
            <main className="w-full flex flex-col bg-blue-50 overflow-hidden h-screen">
                <div className="w-full flex justify-between flex-row bg-white">
                    <div className="flex items-center justify-between flex-row w-full p-3">
                        <div>
                            <h1 className="text-xl">Bienvenue sur <span className="text-blue-500">Fleximate</span></h1>
                        </div>
                        <div className="flex justify-center">
                            <details className="relative inline-block text-left">
                                <summary className="list-none w-12 h-12 flex justify-center items-center bg-blue-500 text-white rounded-full shadow-sm hover:bg-blue-600 transition-all cursor-pointer">
                                    <i className="fa-solid fa-user"></i>
                                </summary>
                                <div className="absolute mt-2 w-40 right-0 bg-white border rounded-md shadow-lg">
                                    <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 transition">Login</Link>
                                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 transition">Sign in</Link>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-5 gap-5 max-h-screen w-full p-8 bg-blue-50 font-sans overflow-scroll">
                    {/* CARD Body */}
                    <div className="overflow-hidden row-start-1 rounded-4xl row-end-1 col-start-1 col-end-3">
                        <div className="bg-white p-3 flex flex-row items-center justify-center h-full w-full">
                            <div className="w-80 flex flex-row items-center justify-center gap-5 h-24 l border-r border-zinc-200">
                                <div className="w-18 h-18 bg-green-200 rounded-full flex items-center justify-center text-green-400 text-3xl">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </div>
                                <div className="flex flex-col justify-center h-full">
                                    <p className="text-zinc-400 text-sm">Revenue</p>
                                    <h2 className="text-3xl">$198k</h2>
                                    <p className="text-sm"><span className="text-green-400 text-xs"><i className="fa-solid fa-arrow-up"></i> 32.8%</span> ce mois</p>
                                </div>
                            </div>

                            <div className="w-80 flex flex-row items-center justify-center gap-5 h-24 border-r border-zinc-200">
                                <div className="w-18 h-18 bg-blue-200 rounded-full flex items-center justify-center text-blue-500 text-3xl">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                </div>
                                <div className="flex flex-col justify-center h-full">
                                    <p className="text-zinc-400 text-sm">Balance</p>
                                    <h2 className="text-3xl">$2.4k</h2>
                                    <p className="text-sm"><span className="text-red-400 text-xs"><i className="fa-solid fa-arrow-down"></i> 2%</span> ce mois</p>
                                </div>
                            </div>

                            <div className="w-80 flex flex-row items-center justify-center gap-5 h-full">
                                <div className="w-18 h-18 bg-red-200 rounded-full flex items-center justify-center text-red-400 text-3xl">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>
                                <div className="flex flex-col justify-center h-full">
                                    <p className="text-zinc-400 text-sm">Vente total</p>
                                    <h2 className="text-3xl">$89k</h2>
                                    <p className="text-sm"><span className="text-green-400 text-xs"><i className="fa-solid fa-arrow-up"></i> 11%</span> cette semaine</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-4xl p-6 row-start-2 row-end-4 col-start-1 col-end-2">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-xl font-bold">Visite website</h2>
                            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square text-xl transition-all text-blue-500 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                        </div>
                        <LineChart />
                    </div>

                    <div className="bg-white rounded-4xl p-6 row-start-2 row-end-4 col-start-2 col-end-3">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-xl font-bold">Client</h2>
                            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square text-xl transition-all text-blue-500 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                        </div>
                        <div className="flex flex-row w-full h-64">
                            <div className="flex items-center justify-center w-full h-full">
                                <PieChart />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-4xl p-6 row-start-4 row-end-6 col-start-1 col-end-3">
                        <div className="flex flex-row items-center justify-between mb-3">
                            <div className="flex flex-row w-full h-full">
                                <h2 className="text-xl font-bold">Tableau de board - Project</h2>
                            </div>
                            <div className="p-2 flex gap-10">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="w-60 pl-10 pr-4 py-2 border border-zinc-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-700"
                                />
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square text-xl transition-all text-blue-500 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                            </div>
                        </div>
                        <Tableau />
                    </div>

                    <div className="bg-white rounded-4xl p-6 row-start-1 row-end-6 col-start-3 col-end-3">
                        <Calendar />
                        <div className="p-3 gap-6 flex justify-between flex-col">
                            <div className="p-3 flex flex-row items-center justify-between gap-3">
                                <h1 className="text-xl text-black">Evenements</h1>
                                <a href="#"><i className="fa-solid fa-plus text-xl transition-all text-blue-500 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                            </div>
                            <div>
                                <div className="flex flex-row items-center justify-between gap-3">
                                    <div className="flex flex-col w-full">
                                        <table className="w-full table-auto text-left">
                                            <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Titre</th>
                                                <th>Description</th>
                                                <th>Statut</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="py-3">10/12/2025</td>
                                                <td className="py-3">Reunion </td>
                                                <td className="py-3">....</td>
                                                <td className="py-3">
                                                        <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                                                            A venir
                                                        </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-3">10/12/2025</td>
                                                <td className="py-3">Reunion </td>
                                                <td className="py-3">....</td>
                                                <td className="py-3">
                                                        <span className="inline-block px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                                                            Aujourd'hui
                                                        </span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="py-3">10/12/2025</td>
                                                <td className="py-3">Reunion </td>
                                                <td className="py-3">....</td>
                                                <td className="py-3">
                                                        <span className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                                                            Pas encore
                                                        </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
