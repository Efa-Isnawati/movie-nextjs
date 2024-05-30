import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-2">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="mb-4 md:mb-0 md:mr-4">
            <Image
              src="/img/Efa.png"
              alt="Efa Isnawati"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-lg mb-2">
              Hello! I am Efa Isnawati, I am passionate about web Development.
            </p>
            <p className="text-lg mb-4">
              Feel free to connect with me on social media:
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/efaisnawati" passHref>
                <span className="text-blue-500 hover:underline cursor-pointer">
                  LinkedIn
                </span>
              </Link>
              <Link href="https://www.instagram.com/efaisnt1911" passHref>
                <span className="text-pink-500 hover:underline cursor-pointer">
                  Instagram
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
