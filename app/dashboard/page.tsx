import Navbar from "@/components/Navbar";
export  default function dashboard(){
    return(
        <div className="flex min-h-screen h-full ">
            {/* Navbar components */}
            <Navbar/>

            {/* Main */}
            <main className=" grid grid-cols-5 grid-rows-5 gap-10 h-screen w-full p-2">



                {/* CARD Body */}
                <div className="shadow-sm p-6 border border-zinc-200 row-start-1 rounded-sm row-end-4 col-start-1 col-end-4">
                    <h1 className="text-sm/6">Romain</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias,
                        amet beatae cumque cupiditate delectus esse expedita facilis laboriosam libero
                        maiores nobis nostrum, possimus quia reiciendis rem sequi voluptas! Sit?
                    </p>
                    <button
                        className="px-4 py-2 shadow-sm rounded-md bg-purple-100 hover:bg-purple-300 focus:ring-4 ring-purple-500">Click
                        me
                    </button>
                </div>


                <div className=" shadow-sm p-6 border border-zinc-200 row-start-1 row-end-6 col-start-4 col-end-6">
                    div2
                </div>



                <div className="shadow-sm p-6 border border-zinc-200 row-start-4 row-end-6 col-start-1 col-end-4">
                    div3
                </div>





            </main>
        </div>
    )
};