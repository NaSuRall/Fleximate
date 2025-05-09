import Image from "next/image";
import Link from "next/link";

export default function steps2(){
    return (
        <div className="grid grid-cols-4 grid-rows-1 gap-5 h-screen w-full p-8 bg-blue-50 ">


            <div className=" rounded-4xl row-start-1  row-end-1 col-start-1 col-end-1 flex flex-col h-full w-full bg-blue-500  items-center    ">
                <div className="flex items-center flex-col justify-between">
                    <div className=" flex flex-col w-full p-6 gap-10 ">
                        <Image    className="dark:invert"
                                  src="/logo.png"
                                  alt="Vercel logomark"
                                  width={200}
                                  height={200}
                        />
                        <h1 className="text-5xl  text-white font-bold">Get started</h1>
                    </div>
                    <div className="bg-blue-500 text-white p-6 rounded-lg w-64 space-y-6">
                        <div className="flex items-start gap-3">
                            <div className="flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full border-2 border-white bg-white"></div>
                                <div className="h-6 w-px bg-white opacity-50"></div>
                            </div>
                            <p className="font-medium">Valid your phone</p>
                        </div>

                        <div className="flex items-start gap-3 ">
                            <div className="flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full border-2 border-white"></div>
                                <div className="h-6 w-px bg-white opacity-50"></div>
                            </div>
                            <p>Tell about yourself</p>
                        </div>

                        <div className="flex items-start gap-3 opacity-60">
                            <div className="flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full border-2 border-white"></div>
                                <div className="h-6 w-px bg-white opacity-50"></div>
                            </div>
                            <p>Tell about your company</p>
                        </div>

                        <div className="flex items-start gap-3 opacity-60">
                            <div className="flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full border-2 border-white"></div>
                            </div>
                            <p>Invite Team Members</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className=" rounded-4xl row-start-1  row-end-1 col-start-2 col-end-5 flex flex-col h-full w-full  justify-center items-center gap-10 ">
                <div className=" h-full flex-col flex  items-center justify-around w-full bg-white px-4 rounded-4xl">
                    <div className=" w-1/3 space-y-6">


                        <form className="p-6 space-y-6">

                            <div className="text-center">
                                <p className="text-sm font-medium text-blue-500">STEP 2/4</p>
                                <h2 className="text-2xl font-semibold text-gray-900">Tell about yourself</h2>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Why will you use the service</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-zinc-400">
                                    <option value="+33">work</option>
                                    <option value="+1">Business</option>
                                    <option value="+1">fun</option>
                                </select>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">What describes you best ?</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-zinc-400">
                                    <option value="+33">Business Owner</option>
                                    <option value="+1">---</option>
                                    <option value="+1">---</option>
                                </select>

                            </div>

                            <div className="flex flex-row justify-between items-center w-full gap-3 ">
                                <div>
                                    <p className="text-zinc-500">What describes you best?</p>

                                </div>
                                <div className="flex flex-row items-center ">
                                    <input type="checkbox" className="w-6 h-6 rounded-full px-4 py-3  border border-gray-300 "/>
                                    <label className="block text-sm font-medium text-gray-700 mb-1"> Yes</label>

                                    <input type="checkbox" className="w-6 h-6 px-4 py-3 rounded-full border border-gray-300 "/>

                                    <label className="block text-sm font-medium text-gray-700 mb-1">No</label>
                                </div>


                            </div>
                        </form>

                    </div>
                    <footer className="flex items-center justify-between w-full text-sm text-blue-500 border-t-2 border-zinc-300 p-5">
                        <Link href="/login"  className="text-center text-sm text-blue-500 hover:underline"> Vous avez dejà un compte ?</Link>
                        <div className="flex flex-row gap-10">
                            <Link href="/register" className="px-6 py-3 bg-zinc-300 text-blue-500 rounded-2xl cursor-pointer transition-all hover:bg-zinc-400 "><i
                                className="fa-solid fa-arrow-left"></i> Next back </Link>
                            <Link href="#" className="px-6 py-3 bg-blue-500 text-white rounded-2xl cursor-pointer transition-all hover:bg-blue-600 ">Next step <i
                                className="fa-solid fa-arrow-right"></i></Link>
                        </div>

                    </footer>

                </div>


            </div>

        </div>
    )
}