// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-3xl p-10 border border-gray-200 text-center space-y-6">
        <div className="text-5xl">🚀</div>
        <h1 className="text-4xl font-extrabold text-gray-800">
          ยินดีต้อนรับสู่ <span className="text-blue-600">MyApp</span>
        </h1>
        <p className="text-lg text-gray-600">
          นี่คือหน้าแรกของแอปพลิเคชัน <strong>Next.js</strong> ของคุณ
        </p>
        <div className="pt-4">
          <a
            href="/dashboard"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            เข้าสู่ Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
