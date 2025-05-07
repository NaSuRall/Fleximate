import Navbar from "@/components/Navbar";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import Link from "next/link";
import DropdownMenu from '@/components/DropdownMenu';


export  default function dashboard(){
    return(
        <div className="flex min-h-screen h-full ">
            {/* Navbar components */}
            <Navbar/>

            {/* Main */}
            <main className="w-full flex flex-col bg-blue-50 overflow-hidden h-screen ">
                <div className="w-full flex justify-between flex-row   bg-white">
                    <div className=" flex items-center justify-between flex-row  w-full p-3 ">
                        <div>
                            <h1 className="text-xl">Bienvenue sur <span className="text-blue-700">Fleximate</span></h1>
                        </div>
                        <div className="flex justify-center">
                            <details className="relative inline-block text-left">
                                <summary
                                    className="list-none w-12 h-12 flex justify-center items-center bg-blue-700 text-white rounded-full shadow-sm hover:bg-blue-600 transition-all cursor-pointer">
                                    <i className="fa-solid fa-user"></i>
                                </summary>

                                <div className="absolute mt-2 w-40 right-0 bg-white border rounded-md shadow-lg ">
                                    <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 transition">Login</Link>
                                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 transition">Sign in</Link>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
                <div
                    className=" grid grid-cols-3 grid-rows-5 gap-5 max-h-screen w-full p-8 bg-blue-50 font-sans overflow-scroll ">

                    {/* CARD Body */}
                    <div className=" overflow-hidden row-start-1 rounded-4xl row-end-1 col-start-1 col-end-3">

                        <div className="bg-white p-3 flex flex-row items-center justify-center h-full w-full">

                            <div className=" w-80 flex flex-row items-center justify-center gap-5 h-24 l border-r border-zinc-200">
                                <div className="w-18 h-18 bg-green-200 rounded-full flex items-center justify-center text-green-400 text-3xl">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </div>
                                <div className="flex flex-col  justify-center h-full">
                                    <p className="text-zinc-400 text-sm">Revenue</p>
                                    <h2 className="text-3xl">$198k</h2>
                                    <p className="text-sm"><span className="text-green-400 text-xs"><i className="fa-solid fa-arrow-up"></i> 32.8%</span> ce mois</p>
                                </div>
                            </div>

                            <div className=" w-80 flex flex-row items-center justify-center gap-5 h-24 border-r border-zinc-200">
                                <div className="w-18 h-18 bg-blue-200 rounded-full flex items-center justify-center text-blue-500 text-3xl">
                                    <i className="fa-solid fa-scale-balanced"></i>
                                </div>
                                <div className="flex flex-col   justify-center h-full">
                                    <p className="text-zinc-400 text-sm">Balance</p>
                                    <h2 className="text-3xl">$2.4k</h2>
                                    <p className="text-sm"><span className="text-red-400 text-xs"><i
                                        className="fa-solid fa-arrow-down "></i> 2%</span> ce mois</p>
                                </div>
                            </div>

                            <div className=" w-80 flex flex-row items-center justify-center gap-5 h-full ">
                                <div className="w-18 h-18 bg-red-200 rounded-full flex items-center justify-center text-red-400 text-3xl">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>
                                <div className="flex flex-col  justify-center h-full">
                                    <p className="text-zinc-400 text-sm">Vente total</p>
                                    <h2 className="text-3xl">$89k</h2>
                                    <p className="text-sm"><span className="text-green-400 text-xs"><i className="fa-solid fa-arrow-up"></i> 11%</span> cette semaine</p>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className=" bg-white rounded-4xl p-6 row-start-2 row-end-4 col-start-1 col-end-2">
                        <div className="flex flex-row  justify-between ">
                            <h2 className="text-xl">Visite website</h2>
                            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square text-xl transition-all text-blue-700 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                        </div>
                        <LineChart />
                    </div>
                    <div className="bg-white rounded-4xl p-6  row-start-2 row-end-4 col-start-2 col-end-3 ">
                        <div className="flex flex-row  justify-between ">
                            <h2 className="text-xl">Client</h2>
                            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square text-xl transition-all text-blue-700 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                        </div>
                        <div className="flex flex-row w-full h-64 ">
                            <div className=" flex items-center justify-center w-full h-full">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-4xl p-6  row-start-4 row-end-6 col-start-1 col-end-3">

                        <div className="flex flex-row items-center justify-between mb-3">
                            <div className=" flex flex-row   w-full h-full">
                                <h2 className="text-xl">Tableau de board - Project</h2>
                            </div>

                            <div className="p-2 flex gap-10">
                                <input type="text" placeholder="Rechercher..."
                                       className="w-60 pl-10 pr-4 py-2 border border-zinc-50  rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700">
                                </input>
                                <a href="#"><i className="fa-solid fa-arrow-up-right-from-square text-xl transition-all text-blue-700 cursor-pointer hover:translate-x-0.5 hover:-translate-y-px"></i></a>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto text-left border-collapse">
                                <thead>
                                <tr className="bg-gray-200 text-gray-700 text-sm uppercase">
                                    <th className="px-4 py-3 rounded-tl-xl">Projet</th>
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Statut</th>
                                    <th className="px-4 py-3">Avancement</th>
                                    <th className="px-4 py-3 text-right rounded-tr-xl">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="text-gray-600 divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 font-medium">Site vitrine</td>
                                    <td className="px-4 py-3">Entreprise ABC</td>
                                    <td className="px-4 py-3">
                                          <span className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                                            Terminé
                                          </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="w-full bg-gray-200 h-2 rounded">
                                            <div className="h-full bg-green-500 rounded" ></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="text-blue-700 hover:underline text-sm">Détails</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 font-medium">Application mobile</td>
                                    <td className="px-4 py-3">Start-up X</td>
                                    <td className="px-4 py-3">
                                          <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                                            En cours
                                          </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="w-full bg-gray-200 h-2 rounded">
                                            <div className="h-full bg-yellow-400 rounded" ></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="text-blue-700 hover:underline text-sm">Détails</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 font-medium">Refonte CRM</td>
                                    <td className="px-4 py-3">Agence Web</td>
                                    <td className="px-4 py-3">
                                          <span className="inline-block px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                                            En attente
                                          </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="w-full bg-gray-200 h-2 rounded">
                                            <div className="h-full bg-red-400 rounded" ></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <button className="text-blue-700 hover:underline text-sm">Détails</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-4xl p-6  row-start-1 row-end-6 col-start-3 col-end-3"></div>
                </div>
            </main>
        </div>
    )
};