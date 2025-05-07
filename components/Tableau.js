export default function Tableau() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto text-left border-collapse rounded-2xl border border-gray-200">
                <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm uppercase">
                    <th className="px-4 py-3 rounded-tl-xl">Projet</th>
                    <th className="px-4 py-3">Client</th>
                    <th className="px-4 py-3">Statut</th>
                    <th className="px-4 py-3">Avancement</th>
                    <th className="px-4 py-3 text-right rounded-tr-xl">Actions</th>
                </tr>
                </thead>
                <tbody className="text-gray-600 divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium">Site vitrine</td>
                    <td className="px-4 py-3">Entreprise ABC</td>
                    <td className="px-4 py-3">
                                          <span className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                                            Terminé
                                          </span>
                    </td>
                    <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div className="h-full bg-green-200 rounded" ></div>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                        <button className="text-blue-700 hover:underline text-sm">Détails</button>
                    </td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium">Application mobile</td>
                    <td className="px-4 py-3">Start-up X</td>
                    <td className="px-4 py-3">
                                          <span className="inline-block px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                                            En cours
                                          </span>
                    </td>
                    <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div className="h-full bg-yellow-300 rounded" ></div>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                        <button className="text-blue-700 hover:underline text-sm">Détails</button>
                    </td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium">Refonte CRM</td>
                    <td className="px-4 py-3">Agence Web</td>
                    <td className="px-4 py-3">
                                          <span className="inline-block px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                                            En attente
                                          </span>
                    </td>
                    <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div className="h-full bg-red-400 rounded" ></div>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                        <button className="text-blue-700 hover:underline text-sm">Détails</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}