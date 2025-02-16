import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer.</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Syahrun Fathan Hidayah</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;am proficient in various programming languages javascript
              and technology react native or next js.
            </p>
            {/* Button and Social Media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                className="uppercase flex items-center gap-3 border px-7 py-3 text-xl transition-all duration-500 font-semibold rounded-full border-accent text-accent hover:bg-accent hover:text-primary"
                href={"/assets/MyCV.pdf"}
                target="_blank"
                download
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent flex justify-center items-center text-accent rounded-full text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 mr-8 xl:mr-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
