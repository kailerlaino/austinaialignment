import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { NotesAndSemester } from "@/components/NotesAndSemester";
import { Fellowships } from "@/components/Fellowships";
import { Organizers } from "@/components/Organizers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <Hero />
      <NotesAndSemester />
      <Fellowships />
      <Organizers />
      <Footer />
    </div>
  );
}
