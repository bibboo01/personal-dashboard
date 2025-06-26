import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("DashboardLayout rendered");

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-3xl shadow-xl font-sans">
      <header className="bg-gray-50 p-6 rounded-t-3xl border-b border-gray-300">
        <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
          <span>📊</span> Dashboard Navigation
        </h2>
        <nav className="mt-6 flex flex-wrap gap-8 text-lg">
          {[
            { href: '/dashboard', label: '🏠 Dashboard Home' },
            { href: '/dashboard/settings', label: '⚙️ Settings' },
            { href: '/dashboard/profile', label: '👤 Profile' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="py-12">{children}</main>
    </div>
  );
}
