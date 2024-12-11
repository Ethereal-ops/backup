import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-[url('/phe7.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="text-center px-4 flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-bold">Introducing DappDoctor</h1>
        <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto">
          Your ultimate solution for troubleshooting wallet issues in the
          blockchain world.
        </p>

        <div className="items-center">
          <a
            href="/solutions"
            className="font-semibold  rounded-lg"
          >
            <button className="bg-[#28C76F] hover:bg-[#2be27d] text-white font-semibold py-3 px-6 rounded-[30px] shadow-lg transition-all duration-300 transform  active:shadow-none">
              Explore Solution
            </button>
          </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
