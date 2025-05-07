import Image from "next/image";
import Link from "next/link";

export default function register(){
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
                                <div className="w-5 h-5 rounded-full border-2 border-white"></div>
                                <div className="h-6 w-px bg-white opacity-50"></div>
                            </div>
                            <p className="font-medium">Valid your phone</p>
                        </div>

                        <div className="flex items-start gap-3 opacity-60">
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
                                <p className="text-sm font-medium text-blue-500">STEP 1/4</p>
                                <h2 className="text-2xl font-semibold text-gray-900">Valid your phone</h2>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <div className="flex">
                                    <select className="border border-gray-300 rounded-l-md px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="+33">+33</option>
                                        <option value="+1">+1</option>

                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="+33 6-50-59-30-78"
                                        className="w-full border border-gray-300 rounded-r-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Code from SMS</label>
                                <div className="flex gap-3">
                                    {Array(4)
                                        .fill(0)
                                        .map((_, idx) => (
                                            <input
                                                key={idx}
                                                type="text"
                                                maxLength="1"
                                                className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        ))}
                                </div>
                            </div>


                            <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 text-sm text-blue-600 border border-blue-100">
                                <i className="fa-solid fa-circle-info mt-1 text-blue-500"></i>
                                <p>
                                    SMS was sent to your number <strong>+1 345 673-56-67</strong><br />
                                    It will be valid for <strong>01:25</strong>
                                </p>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="youremail@gmail.com"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                />
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                        <i className="fa-regular fa-eye"></i>
                                    </div>
                                </div>
                            </div>
                        </form>



                    </div>
                    <footer className="flex items-center justify-between w-full text-sm text-blue-500 border-t-2 border-zinc-300 p-5">
                        <Link href="/login"  className="text-center text-sm text-blue-500 hover:underline"> Vous avez dejà un compte ?</Link>

                        <button className="px-6 py-3 bg-blue-500 text-white rounded-2xl cursor-pointer transition-all hover:bg-blue-600 ">Next step <i
                            className="fa-solid fa-arrow-right"></i></button>
                    </footer>

                </div>


            </div>

        </div>
    )
}