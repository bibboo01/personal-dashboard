// app/dashboard/profile/[userId]/not-found.tsx

export default function UserNotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - User Not Found</h1>
      <p className="text-gray-600">We couldn&apos;t find the user you are looking for.</p>
    </div>
  );
}
