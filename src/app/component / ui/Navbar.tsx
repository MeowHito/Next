import Link from 'next/link';


export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link><br />
      <Link href="/about">About</Link><br />
      <Link href="/contact">Contact</Link><br />
      <Link href="/Admin">Blog</Link>
    </nav>
  );
}