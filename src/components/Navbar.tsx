export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-10 py-6 text-white">
      <div className="text-2xl font-bold">Project Atlas</div>
      
      <ul className="hidden md:flex space-x-8 font-medium">
        <li className="cursor-pointer hover:text-gray-300">Rent a Car</li>
        <li className="cursor-pointer hover:text-gray-300">Book a Flight</li>
        <li className="cursor-pointer hover:text-gray-300">Book a Transfer</li>
      </ul>

      <div className="flex items-center space-x-6">
        <button className="hover:text-gray-300">Log in</button>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Sign up
        </button>
      </div>
    </nav>
  );
}