"use client"
import React, { useState } from "react"

const COUNTRIES = [
  { code: "CM", name: "Cameroun", flag: "🇨🇲" },
  { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "SN", name: "Sénégal", flag: "🇸🇳" },
]

export default function Header() {
  const [country, setCountry] = useState(COUNTRIES[0].name)
  const active = COUNTRIES.find((c) => c.name === country) || COUNTRIES[0]

  return (
    <header className="bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-800 to-gray-700">
            <svg viewBox="0 0 64 64" width="56" height="56" role="img" aria-label="MDMD logo" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="topArc" d="M8,32 A24,24 0 1,1 56,32" />
                <path id="bottomArc" d="M56,32 A24,24 0 1,1 8,32" />
              </defs>
              <circle cx="32" cy="32" r="30" fill="transparent" stroke="rgba(255,255,255,0.06)" />
              <text fontSize="6" fill="#ffffff" fontWeight="600">
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">MES DROITS</textPath>
              </text>
              <text x="32" y="38" textAnchor="middle" fontSize="14" fontWeight="800" fill="#ffffff">MDMD</text>
              <text fontSize="6" fill="#ffffff">
                <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">MES DEVOIRS</textPath>
              </text>
            </svg>
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold">MES DROITS MES DEVOIRS</h1>
            <p className="text-sm text-gray-400">Pilote — {active.name}</p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-2xl" aria-hidden>{active.flag}</div>
          <label className="sr-only" htmlFor="country-select">Choisir le pays</label>
          <select id="country-select" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 bg-transparent border border-gray-600 text-white text-sm rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-label="Changer de pays">
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.name} className="text-black">{c.flag} {c.name}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
