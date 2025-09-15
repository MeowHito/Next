// Admin Layout
import React from 'react';
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <h1 className="text-2xl">Admin Dashboard</h1>
    </div>
  );
}