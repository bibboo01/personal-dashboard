// app/dashboard/profile/[userId]/page.tsx

import { notFound } from 'next/navigation';

type Props = {
  params: {
    userId: string;
  };
};

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: '3', name: 'Boom Developer', email: 'boom@example.com', role: 'Developer' },
];

export default function UserProfilePage({ params }: Props) {
  const user = mockUsers.find((u) => u.id === params.userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full space-y-4 border border-gray-200">
        <div className="text-center">
          <div className="text-5xl mb-2">🧑‍💻</div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>

        <div className="space-y-2">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">📧 Email</p>
            <p className="text-base font-medium text-gray-800">{user.email}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500">🛡️ Role</p>
            <p className="text-base font-medium text-gray-800">{user.role}</p>
          </div>
        </div>

        <div className="text-center pt-4">
          <a
            href="/dashboard/profile"
            className="inline-block text-sm text-blue-600 hover:underline transition"
          >
            ← Back to Profiles
          </a>
        </div>
      </div>
    </div>
  );
}
