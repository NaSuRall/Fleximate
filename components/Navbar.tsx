export default function Navbar(){
    return (
     <nav className="p-2 flex justify-between flex-col w-52 bg-purple-500 transition-all text-white" >
         <div className="flex items-center justify-between flex-col gap-3">
             <h1 className="text-3xl justify-center items-center flex w-full mb-4 pb-4 border-b-2 ">Fleximate</h1>
             <ul className="flex flex-col gap-3 w-48  text-white  rounded-lg">
                 <li className="flex items-center gap-3 transition-all hover:bg-white hover:text-black p-2  rounded-md">
                     <i className="fa-solid fa-house"></i>
                     <a href="#" className="w-full">Home</a>
                 </li>
                 <li className="flex items-center gap-3 transition-all hover:bg-white hover:text-black p-2 rounded-md">
                     <i className="fa-solid fa-calendar"></i>
                     <a href="#" className="w-full">Calendar</a>
                 </li>
                 <li className="flex items-center gap-3 transition-all hover:bg-white hover:text-black p-2  w-full  rounded-md">
                     <i className="fa-solid fa-address-book"></i>
                     <a href="#" className="w-full">Contact</a>
                 </li>
                 <li className="flex items-center gap-3 transition-all hover:bg-white hover:text-black p-2 rounded-md">
                     <i className="fa-solid fa-envelope"></i>
                     <a href="#" className="w-full">Messages</a>
                 </li>
             </ul>
         </div>

         {/* CARD Registration */}
         <div className=" content flex absolute right-4 top-4 items-center justify-between flex-row gap-3 m-2">
             <ul className="  flex flex-row w-full ">
                 <li className="p-8 py-2 shadow-sm rounded-md w-full m-2 bg-purple-500 transition-all tran hover:bg-purple-400 text-white">
                     <a href="" className="w-full">Login</a>
                 </li>
                 <li className="p-8 py-2 shadow-sm rounded-md w-full m-2 bg-white text-black">
                     <a href="" className="w-full">Register</a>
                 </li>
             </ul>
         </div>
     </nav>
    )
}