//BUS*12 Member page
import Image from "next/image";
import Link from "next/link";
export default function MemberPage() {
  return (
    <>
    <ul>
        {/* ให้ Link-->หน้ารายละเอียดสมาชิกแต่ละคนใส่รูปด้วย */}
        
        {[
          { id: 1, name: "Alan" },
          { id: 2, name: "Marc" },
          { id: 3, name: "Khunpol" },
          { id: 4, name: "Heart" },
          { id: 5, name: "JinWook" },
          { id: 6, name: "Thai" },
          { id: 7, name: "Nex" },
          { id: 8, name: "Phutatchai" },
          { id: 9, name: "Copper" },
          { id: 10, name: "AA" },
          { id: 11, name: "Jung" },
          { id: 12, name: "Peemwasu" },
        ].map((member) => (
          <li key={member.id}>
            <Link href={`/member/${member.id}`}>{member.name}</Link>
          </li>
        ))}
    </ul>

    </>
  );
}