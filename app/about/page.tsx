import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex min-h-screen p-24 flex-row grid-cols-02 place-content-evenly">
      <div className="flex basis-1/2">
        We are an ADGA-registered herd located in Noti, Oregon. 
        We have goats, mostly Nigerian Dwarf, chickens, turkeys, coturnix quail, a couple of horses, and whoever else may have wandered into the pasture recent.
      </div>
      <div className="flex basis-1/2">
      </div>
      <div className="flex basis-1/2">
        <Image
          src="/dda_skyline.jpg"
          alt="The sky above the farm"
          width={800}
          height={600}
          priority
        />
      </div>
    </div>
  )
};

export default About;