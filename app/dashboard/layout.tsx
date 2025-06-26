import Link from 'next/link';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log("DashboardLayout rendered");

    return (
        <div className="max-w-6xl mx-auto my-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg font-sans">
            <header className="bg-gray-100 p-6 rounded-t-2xl border-b border-gray-300">
                <h2 className="text-2xl font-semibold text-gray-800">📊 Dashboard Navigation</h2>
                <nav className="mt-4 flex flex-wrap gap-6">
                    <Link
                        href="/dashboard"
                        className="text-blue-600 font-medium hover:underline transition"
                    >
                        🏠 Dashboard Home
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="text-blue-600 font-medium hover:underline transition"
                    >
                        ⚙️ Settings
                    </Link>
                    <Link
                        href="/dashboard/profile"
                        className="text-blue-600 font-medium hover:underline transition"
                    >
                        👤 Profile
                    </Link>
                </nav>
            </header>

            <main className="py-10">
                {children}
            </main>

        </div>
    );
}
