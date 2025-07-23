import HeaderCPN from "@/components/Header/HeaderCPN";
import { requireAdmin } from "@/lib/auth-utils";

export default async function AdminPage() {
  const user = await requireAdmin(); // Redirection automatique si pas admin

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <HeaderCPN />
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Dashboard Admin
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Informations Admin</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Rôle: {user.role}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Gestion des Templates
            </h3>
            <p className="text-gray-600 mb-4">Gérer les templates premium</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
              Voir les templates
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Gestion des Composants
            </h3>
            <p className="text-gray-600 mb-4">
              Ajouter/modifier des composants
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Voir les composants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
