import './globals.css'

export const metadata = {
  title: 'Tokyo Fresh — Culinária Japonesa Premium',
  description: 'Peixes frescos, cortes precisos e uma experiência gastronômica que vai além do sabor.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
