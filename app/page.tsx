import Approach from "@/components/Approach";
import FeatureProjects from "@/components/FeatureProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "About", link: "/#about", icon: <FaHome /> },
            { name: "Projects", link: "/#projects", icon: <FaHome /> },
            { name: "Testimonials", link: "/#testimonials", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <FeatureProjects></FeatureProjects>
        <Approach></Approach>
        <Footer></Footer>
      </div>
    </main>
  );
}
