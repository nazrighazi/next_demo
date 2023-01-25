import { Montserrat } from "@next/font/google";
import { Lato } from "@next/font/google";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const Login = () => {
  const container = useRef<any>(null);

  useEffect(() => {
    const animate = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/animation/mobile.json"),
    });

    return () => animate.destroy();
  }, []);
  return (
    <div className="h-screen max-h-screen w-screen max-w-screen relative">
      <div ref={container} className="pt-10 h-[500px]"></div>
      <div className="flex justify-center items-center flex-col">
        <div className={`${montserrat.className} text-3xl font-semibold pb-3`}>
          celcomdigi
        </div>
        <div className={`${lato.className}`}>
          PWA built for CelcomDigi Device Pricing
        </div>
        <div className=" min-w-full">
          <div className="flex justify-center px-10 space-y-20 flex-col">
            <button className="px-auto py-3 bg-blue-500 w-full rounded-full text-white hover:border-2 hover:border-blue-500 hover:bg-white hover:text-black">
              Start
            </button>
            <div className="text-sm text-center">CelcomDigi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
