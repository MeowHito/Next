//BUS*12 Member page
import Link from "next/link";
import BUS_MEMBERS from "../store/store";



export default function MemberPage() {
  return (
    <>
    <ul>
        {/* ให้ Link-->หน้ารายละเอียดสมาชิกแต่ละคนใส่รูปด้วย */}

        {[
        ].map((member,index) => (
          <li key={index}>
            <Link href={`/member/${index + 1}`}>{index+1 }{member.nameTH}({member.nameEN})</Link>
          </li>
        ))}
    </ul>

    </>
  );
}