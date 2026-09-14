"use client"
import React, { useState } from "react"
import Link from "next/link"
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
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 transition-colors duration-150 text-white rounded-lg py-3 font-semibold">QU'EST-CE QU'UN DROIT ?</button>
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 transition-colors duration-150 text-white rounded-lg py-3 font-semibold">QU'EST-CE QU'UN DEVOIR ?</button>
          </div>

          <h3 className="mt-6 text-sm text-gray-300 font-semibold">SÉLECTION DES THÈMES</h3>
          <div className="mt-3 space-y-3">
            {themes.map((t) => (
              <div key={t.id} className="flex items-center justify-between bg-[#1a1c20] rounded-lg px-3 py-3 hover:bg-[#232427] transition-colors duration-150">
                <div className="flex items-center gap-3">
                  <div className="text-xl">{t.icon}</div>
                  <div className="text-sm font-medium">{t.title}</div>
                </div>
                <div className="text-gray-400">{"\u203A"}</div>
              </div>
            ))}
          </div>
        </div>

        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-[#0f1113] rounded-2xl px-3 py-2 flex items-center justify-between text-sm text-gray-300">
          <Link href="/" className="flex flex-col items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11.5L12 4l9 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Accueil</span>
          </Link>
          <Link href="/quiz" className="flex flex-col items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Quiz</span>
          </Link>
          <Link href="/docs" className="flex flex-col items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Docs</span>
          </Link>
          <Link href="/chatbot" className="flex flex-col items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Chatbot</span>
          </Link>
        </nav>
      </div>
    </main>
  )
}
