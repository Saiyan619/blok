import Image from "next/image";
// import { ThreeDCardDemo } from "./components/threeDCard";
// import { TypewriterEffectDemo } from "./components/typewriter";
// import { AuroraBackgroundDemo } from "./components/auroraBg";
import TestBody from "./Body/testBody";
import Header from "./Header/Header";

export default function Home() {
  return (
     
    <div className="relative">
      
      <div className="sticky top-0">
      <Header />
      </div>
      
      <TestBody />
</div>
      
       
     
  );
}
