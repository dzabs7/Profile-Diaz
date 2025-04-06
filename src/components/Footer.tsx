
import React from 'react';
import { Github, Linkedin, Instagram, Mail, } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {!isMobile && (
          <p className="text-sm text-white">
          Jangan ragu untuk menghubungi saya, ayo jalin koneksi lebih lanjut!
            <br />
            <span className="text-sm text-gray-400 italic"> &copy; {new Date().getFullYear()} Diaz Abi Sudira. All rights reserved.</span>
          </p>
          )}
          <div className="flex gap-6 mb-2">
            <a href="mailto:sudiradiaz@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Gmail</span>
            </a>
            <a href="https://github.com/dzabs7" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/diaz-abi-sudira" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/sbazd__" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        {isMobile && (
          <p className="text-sm text-white text-center">
          Jangan ragu untuk menghubungi saya, ayo jalin koneksi lebih lanjut!
            <br />
            <span className="text-sm text-gray-400 italic"> &copy; {new Date().getFullYear()} Diaz Abi Sudira. All rights reserved.</span>
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
