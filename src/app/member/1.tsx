import Image from "next/image";
import Link from "next/link";

export default function Member1() {
  return (
    <>
      <h1>Alan</h1>
      <Image
        src="/images/Alan.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <Link href="/member">Back to member page</Link>
    </>
  );
}