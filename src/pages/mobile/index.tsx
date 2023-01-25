import { Lato, Montserrat } from "@next/font/google";
import Lottie from "lottie-web";
import Image from "next/image";
import QRScan from "../../../public/images/qr-code.png";
import { useEffect, useRef } from "react";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Mobile = () => {
  const container = useRef<any>(null);

  useEffect(() => {
    const animate = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../public/animation/man-with-phone.json"),
    });

    return () => animate.destroy();
  }, []);

  return (
    <div className="min-h-screen max-h-screen relative ">
      <div className="grid grid-cols-12 min-h-screen max-h-screen">
        <div className="col-span-12 lg:col-span-6  bg-[#2256be] flex flex-col justify-center items-center max-h-[50vh] lg:max-h-screen px-2 lg:px-10">
          <div className="container h-1/2" ref={container}></div>
          <div
            className={`text-2xl text-neutral-100 ${lato.className} text-center`}
          >
            <span
              className={`${montserrat.className} font-semibold text-yellow-300`}
            >
              Optimizing{" "}
            </span>
            your experience is easy by using a{" "}
            <span
              className={`${montserrat.className} font-semibold text-yellow-300`}
            >
              mobile phone
            </span>
            .
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 bg-neutral-100 flex flex-col justify-center items-center max-h-[50vh] lg:max-h-screen px-2 lg:px-10">
          <div
            className={`${montserrat.className} text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2256be] to-yellow-300`}
          >
            PRYCE
          </div>
          <div className="img h-1/2 relative">
            <Image
              src={QRScan}
              alt="qr code"
              style={{
                objectFit: "contain",
                position: "inherit",
                height: "100%",
              }}
            ></Image>
          </div>

          <div className={`${lato.className} text-center text-lg`}>
            Scan the qr code using your mobile phone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
