import Navbar from '@/components/Navbar';
import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';
import Link from 'next/link';
import Tableau from '@/components/Tableau';
import Calendar from '@/components/Calendar';

export default function Dashboard() {
  return (
    <div className="flex h-full min-h-screen text-black">
      {/* Navbar components */}
      <Navbar />

      {/* Main */}
      <main className="flex h-screen w-full flex-col overflow-hidden bg-blue-50">
        <div className="flex w-full flex-row justify-between bg-white">
          <div className="flex w-full flex-row items-center justify-between p-3">
            <div>
              <h1 className="text-xl">
                Bienvenue sur <span className="text-blue-500">Fleximate</span>
              </h1>
            </div>
            <div className="flex justify-center">
              <details className="relative inline-block text-left">
                <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-full bg-blue-500 text-white shadow-sm transition-all hover:bg-blue-600">
                  <i className="fa-solid fa-user"></i>
                </summary>
                <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-lg">
                  <Link
                    href="/login"
                    className="block px-4 py-2 transition hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 transition hover:bg-gray-100"
                  >
                    Sign in
                  </Link>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="grid max-h-screen w-full grid-cols-3 grid-rows-5 gap-5 overflow-scroll bg-blue-50 p-8 font-sans">
          {/* CARD Body */}
          <div className="rounded-4xl col-start-1 col-end-3 row-start-1 row-end-1 overflow-hidden">
            <div className="flex h-full w-full flex-row items-center justify-center bg-white p-3">
              <div className="l flex h-24 w-80 flex-row items-center justify-center gap-5 border-r border-zinc-200">
                <div className="w-18 h-18 flex items-center justify-center rounded-full bg-green-200 text-3xl text-green-400">
                  <i className="fa-solid fa-dollar-sign"></i>
                </div>
                <div className="flex h-full flex-col justify-center">
                  <p className="text-sm text-zinc-400">Revenue</p>
                  <h2 className="text-3xl">$198k</h2>
                  <p className="text-sm">
                    <span className="text-xs text-green-400">
                      <i className="fa-solid fa-arrow-up"></i> 32.8%
                    </span>{' '}
                    ce mois
                  </p>
                </div>
              </div>

              <div className="flex h-24 w-80 flex-row items-center justify-center gap-5 border-r border-zinc-200">
                <div className="w-18 h-18 flex items-center justify-center rounded-full bg-blue-200 text-3xl text-blue-500">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <div className="flex h-full flex-col justify-center">
                  <p className="text-sm text-zinc-400">Balance</p>
                  <h2 className="text-3xl">$2.4k</h2>
                  <p className="text-sm">
                    <span className="text-xs text-red-400">
                      <i className="fa-solid fa-arrow-down"></i> 2%
                    </span>{' '}
                    ce mois
                  </p>
                </div>
              </div>

              <div className="flex h-full w-80 flex-row items-center justify-center gap-5">
                <div className="w-18 h-18 flex items-center justify-center rounded-full bg-red-200 text-3xl text-red-400">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="flex h-full flex-col justify-center">
                  <p className="text-sm text-zinc-400">Vente total</p>
                  <h2 className="text-3xl">$89k</h2>
                  <p className="text-sm">
                    <span className="text-xs text-green-400">
                      <i className="fa-solid fa-arrow-up"></i> 11%
                    </span>{' '}
                    cette semaine
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-4xl col-start-1 col-end-2 row-start-2 row-end-4 bg-white p-6">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-bold">Visite website</h2>
              <a href="#">
                <i className="fa-solid fa-arrow-up-right-from-square cursor-pointer text-xl text-blue-500 transition-all hover:-translate-y-px hover:translate-x-0.5"></i>
              </a>
            </div>
            <LineChart />
          </div>

          <div className="rounded-4xl col-start-2 col-end-3 row-start-2 row-end-4 bg-white p-6">
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-bold">Client</h2>
              <a href="#">
                <i className="fa-solid fa-arrow-up-right-from-square cursor-pointer text-xl text-blue-500 transition-all hover:-translate-y-px hover:translate-x-0.5"></i>
              </a>
            </div>
            <div className="flex h-64 w-full flex-row">
              <div className="flex h-full w-full items-center justify-center">
                <PieChart />
              </div>
            </div>
          </div>

          <div className="rounded-4xl col-start-1 col-end-3 row-start-4 row-end-6 bg-white p-6">
            <div className="mb-3 flex flex-row items-center justify-between">
              <div className="flex h-full w-full flex-row">
                <h2 className="text-xl font-bold">
                  Tableau de board - Project
                </h2>
              </div>
              <div className="flex gap-10 p-2">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-60 rounded-xl border border-zinc-50 py-2 pl-10 pr-4 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square cursor-pointer text-xl text-blue-500 transition-all hover:-translate-y-px hover:translate-x-0.5"></i>
                </a>
              </div>
            </div>
            <Tableau />
          </div>

          <div className="rounded-4xl col-start-3 col-end-3 row-start-1 row-end-6 bg-white p-6">
            <Calendar />
            <div className="flex flex-col justify-between gap-6 p-3">
              <div className="flex flex-row items-center justify-between gap-3 p-3">
                <h1 className="text-xl font-bold text-black">Evenements</h1>
              </div>
              <div>
                <div className="flex flex-row items-center justify-between gap-3">
                  <div className="flex w-full flex-col">
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
                            <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700">
                              A venir
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3">10/12/2025</td>
                          <td className="py-3">Reunion </td>
                          <td className="py-3">....</td>
                          <td className="py-3">
                            <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                              Aujourd'hui
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3">10/12/2025</td>
                          <td className="py-3">Reunion </td>
                          <td className="py-3">....</td>
                          <td className="py-3">
                            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
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
