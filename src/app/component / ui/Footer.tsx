import React from 'react';
export default function Footer( { txt}: { txt: string }){

  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
        <p>{txt}</p>
    </footer>
  );
}