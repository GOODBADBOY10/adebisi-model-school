import './globals.css'

export const metadata = {
    title: 'School Portal',
    description: 'Student and admin management system',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    )
}