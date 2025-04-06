
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';


const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4">
         <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          {!isMobile && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
              <div className="order-2 md:order-1 space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <h2 className="text-sm font-medium tracking-wide text-gray-400 animate-fade-in">Frontend Developer & Graphic Designer</h2>
                  <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white animate-fade-in delay-100">
                    Hello, I'm
                    <br /> Diaz Abi Sudira
                  </h1>
                </div>
                <p className="max-w-[600px] mx-auto md:mx-0 text-gray-300 md:text-lg animate-fade-in delay-200">
                Passionate about crafting seamless, responsive, functional, and user-first digital experiences with precision and style.
                </p>
                <div className="flex justify-center md:justify-start gap-4 animate-fade-in delay-300">
                <a href="#projects">
                  <Button className="group bg-white/10 hover:bg-white/20 text-white border border-white/20">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  </a>
                </div>
              </div>
              
              <div className="order-1 md:order-2 mb-8 md:mb-0 animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-white/5 blur-sm"></div>
                  <Avatar className="h-64 w-64 border-4 border-white/10">
                    <AvatarImage src="/Diaz_Profile.jpg" alt="Profile Photo" />
                    <AvatarFallback className="bg-white/5 text-white text-2xl">ME</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          )}

          {isMobile && (
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              <div className="space-y-8 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight text-white animate-fade-in delay-100">
                    Hello, I'm
                    <br /> Diaz Abi Sudira
                  </h1>
                  <h2 className="text-sm font-medium tracking-wide text-gray-400 animate-fade-in">Frontend Developer & Graphic Designer</h2>
                </div>
              </div>
              
              <div className="mt-4 mb-8 animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-white/5 blur-sm"></div>
                  <Avatar className="h-64 w-64 border-4 border-white/10">
                    <AvatarImage src="/Diaz_Profile.jpg" alt="Profile Photo" />
                    <AvatarFallback className="bg-white/5 text-white text-2xl">ME</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="space-y-8 text-center">
                <p className="max-w-[600px] mx-auto text-gray-300 animate-fade-in delay-200">
                Passionate about crafting seamless, responsive, functional, and user-first digital experiences with precision and style.
                </p>
                <div className="flex justify-center gap-4 animate-fade-in delay-300">
                  <a href="#projects">
                  <Button className="group bg-white/10 hover:bg-white/20 text-white border border-white/20">
                    View Projects
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
