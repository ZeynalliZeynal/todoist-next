import Container from "@/app/_components/container";
import Button from "@/app/_components/button";
import { IoLogoVercel } from "react-icons/io5";
import Image from "next/image";

const Page = async () => {
  return (
    <>
      <section>
        <Container>
          <div className="text-center w-full max-w-[600px] mx-auto">
            <h1 className="text-6xl font-bold leading-snug mb-6">
              Organize your work and life, finally.
            </h1>
            <p className="text-xl mb-8">
              Simplify life for both you and your team. The world’s #1 task
              manager and to-do list app.
            </p>
            <Button
              size="lg"
              href="/"
              rounded="full"
              icon={<IoLogoVercel className="size-3.5" />}
            >
              Start for free
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="relative w-full rounded-2xl overflow-hidden h-[768px]">
            <img
              src="/home-teams_intro_background.avif"
              alt="home intro background"
              className="object-cover"
            />
            <Image
              fill
              src="/home-teams_intro_wide_headerui.en.avif"
              alt="home intro"
              className="object-cover object-top"
            />
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <ul className="divide-x divide-gray-500">
            <li className="flex-col justify-between items-center text-center px-6 h-[136px]">
              <span className="font-indieFlower italic text-xl">
                “Simple, straightforward, and super powerful”
              </span>
              <div className="relative w-72 h-5">
                <Image
                  fill
                  src="/logos/the-verge_gdh1dw.png"
                  alt="the verge"
                  className="object-contain"
                />
              </div>
            </li>
            <li className="flex-col justify-between items-center text-center px-6 h-[136px]">
              <span className="font-indieFlower italic text-xl">
                “Simply a joy to use”
              </span>
              <div className="relative w-72 h-5">
                <Image
                  fill
                  src="/logos/techradar_qt0nt6.png"
                  alt="techradar"
                  className="object-contain"
                />
              </div>
            </li>
            <li className="flex-col justify-between items-center text-center px-6 h-[136px]">
              <span className="font-indieFlower italic text-xl">
                “The best to-do list app on the market”
              </span>
              <div className="relative w-72 h-10">
                <Image
                  fill
                  src="/logos/pc-mag_ak9mna.png"
                  alt="pc mag"
                  className="object-contain"
                />
              </div>
            </li>
            <li className="flex-col justify-between items-center text-center px-6 h-[136px]">
              <span className="font-indieFlower italic text-xl">
                “Nothing short of stellar”
              </span>
              <div className="relative w-72 h-5">
                <Image
                  fill
                  src="/logos/wirecutter_blf8c5.png"
                  alt="wirecutter"
                  className="object-contain"
                />
              </div>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default Page;
