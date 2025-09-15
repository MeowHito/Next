// Admin Layout
import React from 'react';
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <h2 className="text-2xl">Admin Page</h2>
        {children}
    </div>
  );
}