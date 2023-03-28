import "@/style/globals.css"

export const metadata = {
   title: "Learning Tailwind",
   description: 'Learning Tailwind CSS with Next 13 experimental folder "app"',
}

interface LayoutProps {
   children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="pt-BR">
         <body>{children}</body>
      </html>
   )
}
