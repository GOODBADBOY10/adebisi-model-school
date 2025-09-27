export const metadata = {
  title: 'Student Dashboard',
  description: 'Dashboard for students to manage their activities',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
