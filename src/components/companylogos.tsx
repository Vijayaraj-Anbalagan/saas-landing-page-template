import Image from 'next/image'
import aic from "../assets/images/aic.png";
import ps from "../assets/images/ps.png";
import kcg from "../assets/images/kcg.png";
import act from "../assets/images/act.png";
import mfs from "../assets/images/mfs.png";

export default function LogoCarousel() {

  const logos = [
    { src: aic, alt: "AIC Logo" },
    { src: ps, alt: "PS Logo" },
    { src: kcg, alt: "KCG Logo" },
    { src: act, alt: "ACT Logo" },
    { src: mfs, alt: "MFS Logo" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}