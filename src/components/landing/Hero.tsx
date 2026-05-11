export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Airplane-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-neutral-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Elevate Your <br /> Travelling Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Book car hire, transfers, and flights in one seamless experience. 
            Travel with confidence.
          </p>
        </div>

        {/* Right Side: Conversion Box */}
        <div className="bg-white/95 p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign up & Book</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}