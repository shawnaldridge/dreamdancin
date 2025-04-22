import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24 flex-col grid-cols-02 place-content-around">
      <div className="flex">

        <div className="basis-1/2 flex-col">
          <p className="col-span-1">
            Welcome! We are a small but growing farm just outside of Eugene, Oregon.
          </p>
          <br/>
          <p className="">
            We raise and show dairy goats! Specifically ADGA-registered Nigerian Dwarf goats. 
          </p>
          <br/>
          <p className="">
            We also raise and sell Coturnix quail, including hatching eggs, as well as live and processed birds and eggs for both breeding and feeding. 
          </p>

        </div>

        <div className="basis-1/2">
          <Image
            src="/Cover.jpg"
            alt="2024 Babies lined up in their feeder"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>
    </main>
  );
}
