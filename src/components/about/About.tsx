"use client";

import { AboutHero } from "./AboutHero";
import { VisionMission } from "./VisionMission";
import { CoreValues } from "./CoreValues";
import Services from "../services/Service";
import { Team } from "./Team";

const About = () => {
  return (
    <>
      <section className="">
        <AboutHero />
        <VisionMission />
        <CoreValues />
        <Team />
        {/* <Services/> */}
      </section>
    </>
  );
};

export default About;
