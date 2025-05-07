import Link from "next/link";

export default function Navbar(){
    return (
    <nav className="p-3 flex justify-between  flex-col w-72 bg-white transition-all text-zinc-400 font-sans" >
          <div className="flex items-center justify-between flex-col gap-6">
              <div className="flex items-center justify-between flex-col w-full gap-3">

                  <Link href="/dashboard"
                        className="flex cursor-pointer items-center justify-around gap-2 flex-row w-full p-3 mb-5">
                      <div className="flex items-center justify-between gap-3">
                          <i className="fa-solid fa-chart-line"></i>
                          <h1 className="text-3xl text-black ">Tableau</h1>
                      </div>
                      <p className="text-sm">v.01</p>
                  </Link>

                  <div className="p-2 flex w-full">
                      <input type="text" placeholder="Rechercher..."
                          className="w-full pl-10 pr-4 py-2 border border-zinc-50  rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          </input>
                  </div>


              <ul className="flex flex-col w-60 gap-3  text-zinc-400  rounded-lg">
                      <li className="flex items-center gap-3 transition-all w-full  hover:bg-blue-500 p-4  hover:text-white rounded-md">
                          <i className="fa-solid fa-users"></i>
                          <a href="#" className="w-full">Clients & Prospects</a>
                          <i className="fa-solid fa-angle-right "></i>
                      </li>
                      <li className="flex items-center gap-3 transition-all  hover:bg-blue-500  hover:text-white p-4 rounded-md">
                          <i className="fa-solid fa-handshake"></i>
                          <a href="#" className="w-full">Opportunités & Transactions</a>
                          <i className="fa-solid fa-angle-right "></i>
                      </li>
                      <li className="flex items-center gap-3 transition-all  hover:bg-blue-500 p-4  hover:text-white w-full  rounded-md">
                          <i className="fa-solid fa-chart-bar"></i>
                          <a href="#" className="w-full">Suivi & Reporting</a>
                          <i className="fa-solid fa-angle-right "></i>
                      </li>
                      <li className="flex items-center gap-3 transition-all  hover:bg-blue-500 p-4 hover:text-white rounded-md">
                          <i className="fa-solid fa-diagram-project"></i>
                          <a href="#" className="w-full">Projets & Missions</a>
                          <i className="fa-solid fa-angle-right "></i>
                      </li>
                      <li className="flex items-center gap-3 transition-all  hover:bg-blue-500 p-4 hover:text-white rounded-md">
                          <i className="fa-solid fa-file-lines"></i>
                          <a href="#" className="w-full">Documents & Automatisations</a>
                          <i className="fa-solid fa-angle-right "></i>
                      </li>
                      <li className="flex items-center gap-3 transition-all  hover:bg-blue-500 p-4 hover:text-white rounded-md">
                          <i className="fa-solid fa-bell"></i>
                          <a href="#" className="w-full">Alertes & Communication</a>
                          <i className="fa-solid fa-angle-right "></i>
                      </li>
                  </ul>
              </div>
          </div>


        {/* CARD Registration */}
        <div className="flex items-center justify-between flex-col w-full gap-5 p-3">

            <div className="flex items-center text-center justify-center flex-col w-full bg-blue-500/80 p-6 rounded-3xl ">
                 <p className="text-white">Passez a PRO pour accéder a toutes les fonctionnalités</p>
                 <button className="p-8 py-2 shadow-sm rounded-4xl w-full m-2 bg-white transition-all tran hover:bg-blue-500 hover:text-white text-blue-700 text-xs"> Deviens Pro NOW!</button>
             </div>
-
        </div>
    </nav>
    )
}