import Header from "../components/Header"

export default function Page() {
  return (
    <main>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold">Bienvenue sur Mes Droits Mes Devoirs</h2>
        <p className="mt-4 text-gray-300">Application pilote.</p>
      </div>
    </main>
  )
}
