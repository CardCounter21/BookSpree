import Image from "next/image";
import Nav from "@/components/Navbar";
import BookGrid from "@/components/BookGrid";

export default function Home() {
  return (
    <>
      <main className="w-full h-full relative">
        <nav className="h-full w-full mb-10">
          <Nav />
        </nav>
        <div className=" w-full h-full px-5">
          <BookGrid />
        </div>
      </main>
    </>
  );
}
