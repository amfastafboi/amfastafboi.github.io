import Image from 'next/image'; // Import next/image for optimized images
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-10">
      <div className="container" id="contact">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          {/* Background grain image */}
          <div className="absolute inset-0 opacity-5 -z-10">
            <Image
              src={grainImage}
              alt="Grain texture background"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's Create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
              </p>
            </div>

            <div>
              <a
                href="https://www.instagram.com/amfastafboi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};