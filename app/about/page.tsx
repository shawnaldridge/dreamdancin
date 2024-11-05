import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex min-h-screen p-24 flex-row grid-cols-02 place-content-evenly">
      <div className="flex basis-1/2">
        A paragraph about us, this is what we&apos;re up to here on the farm.
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