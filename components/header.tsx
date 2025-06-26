import Navbar from '@/components/Navbar';

export default function Header() {
  return (
    <header className="bg-gray-100 border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          My<span className="text-blue-600">Website</span>
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
