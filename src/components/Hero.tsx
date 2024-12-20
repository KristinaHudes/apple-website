import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';
import { useHeroStore } from '../store';

export const Hero: React.FC = () => {
  const { videoSrc, handleResize } = useHeroStore();

  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, delay: 2.5 });

    gsap.to('#cta', { opacity: 1, y: -50, delay: 2.5 });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>

        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};
