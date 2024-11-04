import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24 flex-col grid-cols-02 place-content-around">
      <div className="flex">

        <div className="basis-1/2 flex-col">
          <p className="col-span-1">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat scelerisque augue praesent nulla ultrices nascetur sit at mattis. Feugiat elementum varius facilisis pulvinar efficitur. Primis in ante lectus leo elit neque pharetra. Cras sodales vitae commodo maecenas nascetur ac. Arutrum a; nulla per finibus tortor ad potenti. 
          </p>
          <br/>
          <p className="">
            Morbi malesuada conubia dictum vel parturient. Cubilia gravida potenti efficitur senectus, neque iaculis tristique. Consequat velit tellus egestas vestibulum eu magnis porta. Mauris per rhoncus primis dapibus eget aliquet diam ultricies venenatis. Ut odio venenatis finibus vestibulum eleifend lacus. 
          </p>
          <br/>
          <p className="">
            Condimentum risus tristique vehicula montes dui mattis fringilla ante dictum. Fusce aptent a morbi per; porta facilisi nam. Sagittis sem vulputate tellus eleifend lacinia iaculis. Laoreet ullamcorper ex habitant quam, ex mi risus. Neque consectetur mollis nulla donec aptent finibus a amet. 
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
