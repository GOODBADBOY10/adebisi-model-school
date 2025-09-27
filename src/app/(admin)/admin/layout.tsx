export const metadata = {
  title: 'Admin Panel',
  description: 'Admin functionalities and management',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
    // // <html lang="en">
    //   // <body className="bg-gray-50 min-h-screen">
    //     {/* Separate layout for admin */}
    //     <div>
    //     <header className="bg-blue-600 text-white p-4">
    //       <h1 className="text-xl font-bold">Admin Panel</h1>
    //     </header>
    //     <main className="p-6">{children}</main>
    //     </div>
    //   // </body>
    // // </html>
  );
}
