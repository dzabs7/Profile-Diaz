
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const Certificates = () => {
  const certificates = [
    {
      title: "Piagam Penghargaan Peraih Medali Emas",
      issuer: "Olimpiade Sains Nusantara (Presmanesia)",
      date: "9 Juni 2024",
      description: "Meraih Juara 1 di bidang mata pelajaran Sejarah, olimpiade yang diadakan oleh Presmanesia.",
      imageUrl: "/OSN_Sejarah.png" 
    },
    {
      title: "Sertifikat Peserta Lomba",
      issuer: "Olimpiade Sains Hardiknas (Puskanas)",
      date: "26 Mei 2024",
      description: "Aktif sebagai peserta Olimpiade di bidang Informatika, yang diadakan oleh Puskanas.",
      imageUrl: "/OSH_Informatika.png"
    },
    {
      title: "Sertifikat Peserta Lomba",
      issuer: "Olimpiade Sains Hardiknas (Puskanas)",
      date: "26 Mei 2024",
      description: "Aktif sebagai peserta Olimpiade di bidang Bahasa Inggris, yang diadakan oleh Puskanas.",
      imageUrl: "/OSH_English.png"
    },
    {
      title: "Sertifikat Pelatihan Data Analytics",
      issuer: "Thematic Academy Digital Talent Scholarship",
      date: "30-31 Juli 2024",
      description: "Menyelesaikan pelatihan Data Analytics yang diselenggarakan oleh Kementrian Komunikasi dan Informatika.",
      imageUrl: "/Digitalent_Certificate.png"
    },
    {
      title: "Sertifikat Kursus Basis Data",
      issuer: "Oracle Academy",
      date: "6 Desember 2024",
      description: "Telah menyelesaikan kursus basis data, yang diselenggarakan oleh Oracle.",
      imageUrl: "/Certificate_Oracle.png"
    },
    {
      title: "Sertifikat Bandung Digital Academy",
      issuer: "Dinas Komunikasi dan Informatika Kota Bandung",
      date: "26 Februari 2025",
      description: "Mengikuti acara Bandung Digital Academy Road to School sebagai peserta.",
      imageUrl: "/Bandung_Digital_Academy.png"
    }
  ];

  const isMobile = useIsMobile();
  return (
    <section id="certificates" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">My Certificates</h2>
          {!isMobile && (
          <p className="text-gray-300 text-center mb-10">
            Penghargaan dan Sertifikat yang diperoleh selama menempuh pendidikan <br />(Klik area gambar untuk melihat secara lengkap)
          </p>
          )}
          {isMobile && (
            <p className="text-gray-300 text-center mb-10">
            (Klik area gambar untuk melihat secara lengkap)
          </p>
          )}
          
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certificates.map((cert, index) => (
             <Card key={index} className="p-6 glass-card border border-white/10 hover:border-white/20 transition-all group relative">
                <div className="flex flex-col h-full">
                 <div className="mb-4 overflow-hidden rounded-lg relative">
                    <img 
                      src={cert.imageUrl} 
                      alt={`${cert.title} Certificate`}
                      className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                    />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            See Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-1 bg-transparent border-none">
                          <div className="max-h-[80vh] overflow-auto flex items-center justify-center p-1 bg-black/80 rounded-lg">
                            <img 
                              src={cert.imageUrl} 
                              alt={`${cert.title} Certificate Full View`} 
                              className="w-auto max-w-full h-auto max-h-[75vh] object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{cert.title}</h3>
                  <div className="text-gray-400 text-sm mb-3 text-center">
                    <span className="block">{cert.issuer}</span>
                    <span className="block mt-1">{cert.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-auto text-center">{cert.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {certificates.map((cert, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                    <Card className="p-6 glass-card border border-white/10 hover:border-white/20 transition-all group relative">
                        <div className="flex flex-col h-full">
                          <div className="mb-4 overflow-hidden rounded-lg relative">
                            <img 
                              src={cert.imageUrl} 
                              alt={`${cert.title} Certificate`}
                              className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    See Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] p-1 bg-transparent border-none">
                                  <div className="max-h-[80vh] overflow-auto flex items-center justify-center p-1 bg-black/80 rounded-lg">
                                    <img 
                                      src={cert.imageUrl} 
                                      alt={`${cert.title} Certificate Full View`} 
                                      className="w-auto max-w-full h-auto max-h-[75vh] object-contain"
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2 text-center">{cert.title}</h3>
                          <div className="text-gray-400 text-sm mb-3 text-center">
                            <span className="block">{cert.issuer}</span>
                            <span className="block mt-1">{cert.date}</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-auto text-center">{cert.description}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white/10 hover:bg-white/20 text-white border-none" />
              <CarouselNext className="right-0 bg-white/10 hover:bg-white/20 text-white border-none" />
            </Carousel>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 italic">
            "Menuntut ilmu adalah takwa. Menyampaikan ilmu adalah ibadah. Mengulang-ulang ilmu adalah zikir. Mencari ilmu adalah jihad."<span className="text-white">— Imam Al Ghazali</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;