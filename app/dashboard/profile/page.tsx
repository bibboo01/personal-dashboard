// app/dashboard/profile/page.tsx

import Link from 'next/link';

const mockUsers = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Boom Developer' },
];

export default function ProfileListPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-800">👤 User Profiles</h1>

      <div className="grid gap-4">
        {mockUsers.map((user) => (
          <Link
            key={user.id}
            href={`/dashboard/profile/${user.id}`}
            className="flex justify-between items-center bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-blue-50 transition duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">🧑</div>
              <div className="text-lg font-medium text-gray-700">{user.name}</div>
            </div>
            <div className="text-sm text-blue-600 hover:underline">View</div>
          </Link>
        ))}

        {/* Invalid Link */}
        <Link
          href="/dashboard/profile/invalid-id"
          className="flex justify-between items-center bg-red-50 border border-red-200 rounded-2xl p-4 shadow-sm hover:bg-red-100 transition duration-200"
        >
          <div className="flex items-center space-x-4">
            <div className="text-2xl">⚠️</div>
            <div className="text-lg font-medium text-red-700">Invalid Profile (404)</div>
          </div>
          <div className="text-sm text-red-500 hover:underline">Try View</div>
        </Link>
      </div>
    </div>
  );
}
