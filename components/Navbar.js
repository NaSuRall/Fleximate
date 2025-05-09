import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex w-72 flex-col justify-between bg-white p-3 font-sans text-zinc-400 transition-all">
      <div className="flex flex-col items-center justify-between gap-6">
        <div className="flex w-full flex-col items-center justify-between gap-3">
          <Link
            href="/dashboard"
            className="mb-5 flex w-full cursor-pointer flex-row items-center justify-around gap-2 p-3"
          >
            <div className="flex items-center justify-between gap-3">
              <i className="fa-solid fa-chart-line"></i>
              <h1 className="text-3xl text-black">Tableau</h1>
            </div>
            <p className="text-sm">v.01</p>
          </Link>

          <div className="flex w-full p-2">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full rounded-xl border border-zinc-50 py-2 pl-10 pr-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>

          <ul className="flex w-60 flex-col gap-3 rounded-lg text-zinc-400">
            <li className="flex w-full items-center gap-3 rounded-md p-4 transition-all hover:bg-blue-500 hover:text-white">
              <i className="fa-solid fa-users"></i>
              <a href="#" className="w-full">
                Clients & Prospects
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="flex items-center gap-3 rounded-md p-4 transition-all hover:bg-blue-500 hover:text-white">
              <i className="fa-solid fa-handshake"></i>
              <a href="#" className="w-full">
                Opportunités & Transactions
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="flex w-full items-center gap-3 rounded-md p-4 transition-all hover:bg-blue-500 hover:text-white">
              <i className="fa-solid fa-chart-bar"></i>
              <a href="#" className="w-full">
                Suivi & Reporting
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="flex items-center gap-3 rounded-md p-4 transition-all hover:bg-blue-500 hover:text-white">
              <i className="fa-solid fa-diagram-project"></i>
              <a href="#" className="w-full">
                Projets & Missions
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="flex items-center gap-3 rounded-md p-4 transition-all hover:bg-blue-500 hover:text-white">
              <i className="fa-solid fa-file-lines"></i>
              <a href="#" className="w-full">
                Documents & Automatisations
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
            <li className="flex items-center gap-3 rounded-md p-4 transition-all hover:bg-blue-500 hover:text-white">
              <i className="fa-solid fa-bell"></i>
              <a href="#" className="w-full">
                Alertes & Communication
              </a>
              <i className="fa-solid fa-angle-right"></i>
            </li>
          </ul>
        </div>
      </div>

      {/* CARD Registration */}
      <div className="flex w-full flex-col items-center justify-between gap-5 p-3">
        <div className="flex w-full flex-col items-center justify-center rounded-3xl bg-blue-500/80 p-6 text-center">
          <p className="text-white">
            Passez a PRO pour accéder a toutes les fonctionnalités
          </p>
          <button className="rounded-4xl tran m-2 w-full bg-white p-8 py-2 text-xs text-blue-700 shadow-sm transition-all hover:bg-blue-500 hover:text-white">
            {' '}
            Deviens Pro NOW!
          </button>
        </div>
        -
      </div>
    </nav>
  );
}
