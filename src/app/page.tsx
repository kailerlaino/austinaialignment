import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { WhyWeExist } from "@/components/WhyWeExist";
import { GeneralMeetings } from "@/components/GeneralMeetings";
import { Fellowships } from "@/components/Fellowships";
import { Organizers } from "@/components/Organizers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <Hero />
      <WhyWeExist />
      <GeneralMeetings />
      <Fellowships />
      <Organizers />
      <Footer />
    </div>
  );
}
