import Navbar from "@/components/Navbar";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
export  default function dashboard(){
    return(
        <div className="flex min-h-screen h-full ">
            {/* Navbar components */}
            <Navbar/>

            {/* Main */}
            <main className=" grid grid-cols-5 grid-rows-5 gap-5 h-screen w-full p-4 bg-blue-50">

                {/* CARD Body */}
                <div className="overflow-hidden border-zinc-200 row-start-1 rounded-4xl row-end-1 col-start-2 col-end-5">

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


                <div className=" bg-white rounded-4xl p-6 row-start-2 row-end-4 col-start-2 col-end-4">
                    <LineChart />
                </div>
                <div className="bg-white rounded-4xl p-6  row-start-2 row-end-4 col-start-4 col-end-5">
                    <PieChart />
                </div>
                <div className="bg-white rounded-4xl p-6  row-start-4 row-end-6 col-start-2 col-end-5"></div>



            </main>
        </div>
    )
};