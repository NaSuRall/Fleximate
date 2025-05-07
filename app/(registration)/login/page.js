import Image from "next/image";

export default function login(){
    return (

        <div className="grid grid-cols-2 grid-rows-1 gap-5 h-screen w-full p-8">


            <div className=" rounded-bl-4xl rounded-tl-4xl row-start-1  row-end-1 col-start-1 col-end-1 flex flex-col h-full w-full bg-blue-500 justify-around items-center ">
                <div className=" flex flex-col w-full justify-center gap-5 pl-40 ">
                    <h1 className="text-6xl text-start">Fleximate</h1>
                    <p className="text-5xl text-white">Your place to work <br/> Plan. Create. Control.</p>
                </div>

                <div className="flex flex-col items-center justify-center ">
                    <Image    className="dark:invert"
                              src="/loginImg.svg"
                              alt="Vercel logomark"
                              width={600}
                              height={600}
                    />
                </div>
            </div>


            <div className=" rounded-4xl row-start-1  row-end-1 col-start-2 col-end-2 flex flex-col h-full w-full  justify-center items-center gap-10 ">
                <div className="min-h-screen flex items-center justify-center w-full bg-white px-4">
                    <div className="w-full max-w-sm space-y-6">
                        <h2 className="text-center text-3xl font-semibold text-gray-900">Sign In to Woorkroom</h2>

                        <form className="space-y-4">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email"
                                       placeholder="email@email.com"
                                       className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"/>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <input type="password"
                                           placeholder="••••••••"
                                           className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"/>
                                    <div
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">

                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="accent-blue-500 w-4 h-4 rounded border-gray-300"/>
                                    Remember me
                                </label>
                                <a href="#" className="hover:underline">Forgot Password?</a>
                            </div>


                            <button type="submit"
                                    className="w-full flex justify-center items-center gap-2 bg-blue-500
                                    hover:bg-blue-600
                                    hover:justify-between
                                     text-white font-medium py-3 px-6 rounded-xl  transition-all ease-in-out ">
                                Sign In
                                <div>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>

                            </button>
                        </form>


                        <p className="text-center text-sm text-blue-500 hover:underline">
                            Don’t have an account?
                        </p>
                    </div>
                </div>


            </div>

        </div>


    )
}