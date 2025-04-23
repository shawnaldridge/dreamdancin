import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-emerald-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-emerald-800">
                Welcome to Dream Dancin&apos; Acres
              </h1>
              <p className="text-lg text-gray-700">
                We are a small but growing farm just outside of Eugene, Oregon.
              </p>
              <p className="text-lg text-gray-700">
                We raise and show dairy goats! Specifically ADGA-registered Nigerian Dwarf goats.
              </p>
              <p className="text-lg text-gray-700">
                We also raise and sell Coturnix quail, including hatching eggs, as well as live and processed birds and eggs for both breeding and feeding.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/herd_1.jpg"
                  alt="The Girls"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
                <div className="bg-emerald-800 bg-opacity-80 text-white text-center py-2 px-4">
                  <p className="text-sm md:text-base">The Girls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-emerald-800">
            Our Farm
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Our Goats</h3>
              <p className="text-gray-700">
                We specialize in breeding and showing high-quality Nigerian Dwarf goats with excellent conformation and milk production.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Our Quail</h3>
              <p className="text-gray-700">
                We offer Coturnix quail for breeding, meat, and eggs. Our birds are raised on feed that is grown, processed, and packaged right here in the Willamette Valley!
                We are confident you will quickly notice the difference between what we offer and birds raised on minimal-calorie, mass-produced diets. 
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Contact Us</h3>
              <p className="text-gray-700">
                Interested in our goats or quail? We&apos;d love to hear from you!
                <br />
                <a href="mailto:farm@dreamdancinacres.com" className="text-emerald-600 hover:text-emerald-800 mt-2 inline-block">
                  farm@dreamdancinacres.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
