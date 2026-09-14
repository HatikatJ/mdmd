export const metadata = {
  title: "Mes Droits Mes Devoirs",
  description: "Application éducative sur les droits et devoirs des citoyens",
}

import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#121212] text-white">
        {children}
      </body>
    </html>
  )
}
