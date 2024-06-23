import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog1() {
  return (
    <main className="container bg-red-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/blog" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Back
          </Link>
        </div>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            As “Developers” indeed we are the student of the world
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg ng nh c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="https://miro.medium.com/v2/resize:fit:1400/1*2tYSCDFH-frWWb1veAV86Q.png"
          />
        </div>
        <div>
          <p className="mb-4">
            📚 About learning
            <br />
            ย้อนกลับดูพื้นฐาน ของการเรียนรู้
            รู้จักกับวิธีการทำงานของสมองเราเพิ่มหน่อย
          </p>
          <p className="mb-4">
            🧩 Solving impossible puzzle
            <br />
            เวลาเราเจอสิ่งที่เรียกว่าเป็น ปริศนาที่ไม่มีทางแก้
            เราทำอย่างไรได้บ้างนะ?
          </p>
          <p className="mb-4">
            💻 Reading code better
            <br />
            ความสับสนและความไม่เข้าใจ เป็นส่วนหนึ่งของการพัฒนาซอฟต์แวร์
            และมันก็โอเคในช่วงขณะหนึ่ง
          </p>
          <p className="mb-4">
            😎 How to look (be) cool!
            <br />
            เคล็ดลับของ Genius? (อ่ะ ใช่หรือเปล่า)
          </p>
        </div>
      </div>
    </main>
  );
}
