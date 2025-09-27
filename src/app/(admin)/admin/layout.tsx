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
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  );
}
