//BUS*12 Member page
import Image from "next/image";
import Link from "next/link";
export default function MemberPage() {
  return (
    <>
    <ul>
        {/* ให้ Link-->หน้ารายละเอียดสมาชิกแต่ละคนใส่รูปด้วย */}
        
        <li><Link href="/member/1">Alan</Link></li>
        <li><Link href="/member/2">Marc</Link></li>
        <li><Link href="/member/3">Khunpol</Link></li>
        <li><Link href="/member/4">Heart</Link></li>
        <li><Link href="/member/5">JinWook</Link></li>
        <li><Link href="/member/6">Thai</Link></li>
        <li><Link href="/member/7">Nex</Link></li>
        <li><Link href="/member/8">Phutatchai 8</Link></li>
        <li><Link href="/member/9">Copper</Link></li>
        <li><Link href="/member/10">AA</Link></li>
        <li><Link href="/member/11">Jung</Link></li>
        <li><Link href="/member/12">Peemwasu</Link></li>
    </ul>

    </>
  );
}