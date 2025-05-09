export default function Tableau() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse rounded-2xl border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-200 text-sm uppercase text-gray-700">
            <th className="rounded-tl-xl px-4 py-3">Projet</th>
            <th className="px-4 py-3">Client</th>
            <th className="px-4 py-3">Statut</th>
            <th className="px-4 py-3">Avancement</th>
            <th className="rounded-tr-xl px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-600">
          <tr className="transition hover:bg-gray-50">
            <td className="px-4 py-3 font-medium">Site vitrine</td>
            <td className="px-4 py-3">Entreprise ABC</td>
            <td className="px-4 py-3">
              <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                Terminé
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="h-2 w-full rounded bg-gray-200">
                <div className="h-full rounded bg-green-200"></div>
              </div>
            </td>
            <td className="px-4 py-3 text-right">
              <button className="text-sm text-blue-700 hover:underline">
                Détails
              </button>
            </td>
          </tr>
          <tr className="transition hover:bg-gray-50">
            <td className="px-4 py-3 font-medium">Application mobile</td>
            <td className="px-4 py-3">Start-up X</td>
            <td className="px-4 py-3">
              <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700">
                En cours
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="h-2 w-full rounded bg-gray-200">
                <div className="h-full rounded bg-yellow-300"></div>
              </div>
            </td>
            <td className="px-4 py-3 text-right">
              <button className="text-sm text-blue-700 hover:underline">
                Détails
              </button>
            </td>
          </tr>
          <tr className="transition hover:bg-gray-50">
            <td className="px-4 py-3 font-medium">Refonte CRM</td>
            <td className="px-4 py-3">Agence Web</td>
            <td className="px-4 py-3">
              <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                En attente
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="h-2 w-full rounded bg-gray-200">
                <div className="h-full rounded bg-red-400"></div>
              </div>
            </td>
            <td className="px-4 py-3 text-right">
              <button className="text-sm text-blue-700 hover:underline">
                Détails
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
