
import aic from "../assets/images/aic.png";
import ps from "../assets/images/ps.png";
import kcg from "../assets/images/kcg.png";
import act from "../assets/images/act.png";
import mfs from "../assets/images/mfs.png";
import Image from 'next/image';
import LogoCarousel from "./companylogos";

const logos = [
  { src: aic, alt: "AIC Logo" },
  { src: ps, alt: "PS Logo" },
  { src: kcg, alt: "KCG Logo" },
  { src: act, alt: "ACT Logo" },
  { src: mfs, alt: "MFS Logo" },
];
export const LogoTicker = () => {
  return(
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-lg text-center text-white/70 mb-16">Trusted by Most forward-thinking institution&apos;s and teams</h2>
        <LogoCarousel/>
        
        
      </div>

    </div>
  )
};
