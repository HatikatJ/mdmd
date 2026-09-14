"use client"
import React from "react"

const COUNTRIES = [
  { code: "CM", name: "Cameroun", flag: "🇨🇲" },
  { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮" },
  { code: "SN", name: "Sénégal", flag: "🇸🇳" },
]

export default function Header({ country, setCountry }) {
  const active = COUNTRIES.find((c) => c.name === country) || COUNTRIES[0]

  return (
    <div className="w-full bg-[#151619] rounded-t-xl px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-gray-800 to-gray-700">
            <svg viewBox="0 0 64 64" width="52" height="52" role="img" aria-label="MDMD logo" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="topArcMobile" d="M8,32 A24,24 0 1,1 56,32" />
                <path id="bottomArcMobile" d="M56,32 A24,24 0 1,1 8,32" />
              </defs>
              <circle cx="32" cy="32" r="30" fill="transparent" stroke="rgba(255,255,255,0.06)" />
              <text fontSize="5" fill="#ffffff" fontWeight="600">
                <textPath href="#topArcMobile" startOffset="50%" textAnchor="middle">MES DROITS</textPath>
              </text>
              <text x="32" y="36" textAnchor="middle" fontSize="12" fontWeight="800" fill="#ffffff">MDMD</text>
              <text fontSize="5" fill="#ffffff">
                <textPath href="#bottomArcMobile" startOffset="50%" textAnchor="middle">MES DEVOIRS</textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-2xl">{active.flag}</div>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 bg-[#151619] border border-gray-700 text-white text-sm rounded-full px-3 py-1 focus:outline-none"
            aria-label="Changer de pays"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.name}>{c.flag} {c.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
