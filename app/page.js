import React, { useState } from "react"
import Header from "../components/Header"

export default function Page() {
  const [country, setCountry] = useState("Cameroun")

  const themes = [
    { id: 1, title: "Aéroport", icon: "✈️" },
    { id: 2, title: "Route & Police", icon: "🚓" },
    { id: 3, title: "Travail & Contrats", icon: "💼" },
    { id: 4, title: "Logement & Bail", icon: "🏠" },
  ]

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#121212]">
      <div className="w-full max-w-md bg-[#121212] rounded-2xl shadow-md overflow-hidden relative">
        <Header country={country} setCountry={setCountry} />

        <div className="p-4">
          <div className="space-y-3">
            <button className="w-full bg-emerald-600 text-white rounded-lg py-3 font-semibold">QU'EST-CE QU'UN DROIT ?</button>
            <button className="w-full bg-emerald-600 text-white rounded-lg py-3 font-semibold">QU'EST-CE QU'UN DEVOIR ?</button>
          </div>

          <h3 className="mt-6 text-sm text-gray-300 font-semibold">SÉLECTION DES THÈMES</h3>
          <div className="mt-3 space-y-3">
            {themes.map((t) => (
              <div key={t.id} className="flex items-center justify-between bg-[#1a1c20] rounded-lg px-3 py-3">
                <div className="flex items-center gap-3">
                  <div className="text-xl">{t.icon}</div>
                  <div className="text-sm font-medium">{t.title}</div>
                </div>
                <div className="text-gray-400">›</div>
              </div>
            ))}
          </div>
        </div>

        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-[#0f1113] rounded-2xl px-4 py-2 flex items-center justify-between text-sm text-gray-300">
          <button className="flex flex-col items-center gap-1">
            <span>🏠</span>
            <span>Accueil</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <span>❓</span>
            <span>Quiz</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <span>📄</span>
            <span>Docs</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <span>💬</span>
            <span>Chatbot</span>
          </button>
        </nav>
      </div>
    </main>
  )
}
