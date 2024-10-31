import InstaIcon from '../assets/icons/insta.svg';
import XIcon from '../assets/icons/x-social.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';

export const Footer = () => {
  return (
    <footer className="py-6 bg-black text-white/80 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Footer Text */}
          <div className="text-center text-sm sm:text-left">
            © 2024 Interain. All rights reserved.
          </div>
          
          {/* Social Icons */}
          <ul className="flex gap-4">
            <li className="hover:text-white transition-colors duration-200">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <XIcon className="w-5 h-5" />
              </a>
            </li>
            <li className="hover:text-white transition-colors duration-200">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </li>
            <li className="hover:text-white transition-colors duration-200">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstaIcon className="w-5 h-5" />
              </a>
            </li>
            <li className="hover:text-white transition-colors duration-200">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
