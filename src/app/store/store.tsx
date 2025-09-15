import { create } from 'zustand';
import React from 'react';

// Define the shape of a member
export default function MemberPage() {


type Member = {
    nameTH: string;    // ชื่อภาษาไทย
    nameEN: string;    // ชื่อภาษาอังกฤษ
    heightCm: number;  // ส่วนสูง (เซนติเมตร)
    age: number;       // อายุ (ปี)
    id?: string;       // รหัสสมาชิก (สร้างจากชื่ออังกฤษตัวพิมพ์เล็ก)
  };
  
  const BUS_MEMBERS: Member[] = [
  { nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23 },
  { nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22 },
  { nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22 },
  { nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22 },
  { nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21 },
  { nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20 },
  { nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20 },
  { nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20 },
  { nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19 },
  { nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19 },
  { nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19 },
  { nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19 }];}