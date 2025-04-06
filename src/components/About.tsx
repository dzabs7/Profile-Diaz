
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  GraduationCap, 
  Code, 
  FileCode, 
  Workflow, 
  Columns, 
  Braces, 
  Github, 
  Figma, 
  Trello, 
  FileImage, 
  FileText, 
  Table, 
  PresentationIcon 
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const About = () => {
  const education = [
    {
      institution: "SMKN 4 Bandung",
      degree: "Rekayasa Perangkat Lunak",
      year: "2023 - Sekarang"
    },
    {
      institution: "SMPN 18 Bandung",
      degree: "",
      year: "2020 - 2023"
    },
    {
      institution: "SDN 119 Cijagra, Bandung",
      degree: "",
      year: "2014 - 2020"
    }
  ];

  const skillCategories = [
    {
      title: "Development",
      skills: [
        {
          name: "HTML",
          icon: <FileCode className="h-12 w-12 text-orange-500" />,
          level: "Intermediate" ,
          description: "Memiliki pemahaman yang kuat dalam membuat struktur halaman web menggunakan HTML. Terbiasa menggunakan elemen-elemen semantik untuk meningkatkan keterbacaan kode dan aksesibilitas."
        },
        {
          name: "CSS",
          icon: <Code className="h-12 w-12 text-blue-400" />,
          level: "Intermediate",
          description: "Menguasai styling tampilan halaman web menggunakan CSS. Mampu menghasilkan desain yang bersih dan rapi. Mengatur tampilan web dengan Flexbox, Grid, media queries, dan animasi dasar."
        },
        {
          name: "Bootstrap",
          icon: <div className="h-12 w-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-12 w-12 text-purple-500">
              <path fill="currentColor" d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z" />
            </svg>
          </div>,
          level: "Intermediate",
          description: "Menggunakan komponen siap pakai seperti navbar, card, dan modal untuk mempercepat proses pengembangan antarmuka. Memanfaatkan grid system untuk layout yang fleksibel dan responsif."
        },
        {
          name: "Tailwind CSS",
          icon: <div className="h-12 w-12 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
              <path d="M12 6C10 6 8.66667 6.66667 8 8C8.66667 7.33333 9.33333 7 10 7C11.2 7 11.8 7.83333 12.5 8.83333C13.3333 10 14.3333 11.3333 16 11.3333C18 11.3333 19.3333 10.6667 20 9.33333C19.3333 10 18.6667 10.3333 18 10.3333C16.8 10.3333 16.2 9.5 15.5 8.5C14.6667 7.33333 13.6667 6 12 6Z" fill="#38BDF8"/>
              <path d="M8 12.6667C6 12.6667 4.66667 13.3333 4 14.6667C4.66667 14 5.33333 13.6667 6 13.6667C7.2 13.6667 7.8 14.5 8.5 15.5C9.33333 16.6667 10.3333 18 12 18C14 18 15.3333 17.3333 16 16C15.3333 16.6667 14.6667 17 14 17C12.8 17 12.2 16.1667 11.5 15.1667C10.6667 14 9.66667 12.6667 8 12.6667Z" fill="#0EA5E9"/>
            </svg>
          </div>,
          level: "Intermediate",
          description: "Terbiasa menggunakan utility-first framework Tailwind CSS dalam membangun UI yang fleksibel dan mudah dikustomisasi. Memahami praktik terbaik dalam penulisan class yang efisien."
        },
        {
          name: "JavaScript",
          icon: <Braces className="h-12 w-12 text-yellow-400" />,
          level: "Intermediate",
          description: "Menguasai dasar-dasar JavaScript, seperti tipe data, kondisi, perulangan, fungsi. Mampu menambahkan interaktivitas pada website dan membuat logika dasar yang diperlukan website."
        },
        {
          name: "React.js",
          icon: <div className="h-12 w-12 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
              <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#61DAFB"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 6.75C14.7167 6.75 17.4778 7.4483 19.2802 8.59242C21.3542 9.93758 22.5 11.6909 22.5 12C22.5 12.3091 21.3542 14.0624 19.2802 15.4076C17.4778 16.5517 14.7167 17.25 12 17.25C9.28328 17.25 6.52219 16.5517 4.71979 15.4076C2.64581 14.0624 1.5 12.3091 1.5 12C1.5 11.6909 2.64581 9.93758 4.71979 8.59242C6.52219 7.4483 9.28328 6.75 12 6.75ZM19.8147 10.3266C18.0793 9.33895 15.7139 8.625 12 8.625C8.28614 8.625 5.92074 9.33895 4.18534 10.3266C3.09573 10.9426 2.40883 11.5691 2.03802 12C2.40883 12.4309 3.09573 13.0574 4.18534 13.6734C5.92074 14.661 8.28614 15.375 12 15.375C15.7139 15.375 18.0793 14.661 19.8147 13.6734C20.9043 13.0574 21.5912 12.4309 21.962 12C21.5912 11.5691 20.9043 10.9426 19.8147 10.3266Z" fill="#61DAFB"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M16.5 12C16.5 9.42157 14.8856 7.28103 12.75 6.34444C14.1006 3.81474 15.8351 2.06951 17.0933 2.00478C17.7898 1.97357 18.3934 2.3095 18.8134 2.89659C19.6832 4.10404 19.5123 6.52749 18.4869 9.40939C19.6107 10.2714 20.25 11.095 20.25 12C20.25 12.905 19.6107 13.7286 18.4869 14.5906C19.5123 17.4725 19.6832 19.896 18.8134 21.1034C18.3934 21.6905 17.7898 22.0264 17.0933 21.9952C15.8351 21.9305 14.1006 20.1853 12.75 17.6556C14.8856 16.719 16.5 14.5784 16.5 12ZM14.7276 17.0245C14.5582 16.7312 14.3777 16.4192 14.1886 16.0925C14.5181 15.5513 14.8004 14.9628 15.0256 14.3395C15.3398 14.5451 15.6257 14.758 15.8775 14.9762C16.4908 15.5026 16.7499 15.9194 16.7499 16.125C16.7499 16.3306 16.4908 16.7474 15.8775 17.2738C15.5294 17.5708 15.1419 17.8439 14.7276 18.0925C14.7357 17.7381 14.7357 17.3818 14.7276 17.0245ZM14.7276 6.97552C14.7357 6.6182 14.7357 6.26195 14.7276 5.9075C15.1419 6.15606 15.5294 6.42925 15.8775 6.72616C16.4908 7.25255 16.7499 7.66939 16.7499 7.875C16.7499 8.08061 16.4908 8.49745 15.8775 9.02384C15.6257 9.24196 15.3398 9.45492 15.0256 9.66045C14.8004 9.03721 14.5181 8.44866 14.1886 7.90752C14.3777 7.58085 14.5582 7.26876 14.7276 6.97552Z" fill="#61DAFB"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.5 12C7.5 14.5784 9.11441 16.719 11.25 17.6556C9.89936 20.1853 8.16487 21.9305 6.90673 21.9952C6.21018 22.0264 5.60657 21.6905 5.18663 21.1034C4.31685 19.896 4.48766 17.4725 5.51312 14.5906C4.38929 13.7286 3.75 12.905 3.75 12C3.75 11.095 4.38929 10.2714 5.51312 9.40939C4.48766 6.52749 4.31685 4.10404 5.18663 2.89659C5.60657 2.3095 6.21018 1.97357 6.90673 2.00478C8.16487 2.06951 9.89936 3.81474 11.25 6.34444C9.11441 7.28103 7.5 9.42157 7.5 12ZM9.2724 6.97552C9.44178 7.26876 9.62229 7.58085 9.81142 7.90752C9.48189 8.44866 9.19962 9.03721 8.97438 9.66045C8.66024 9.45492 8.37432 9.24196 8.12245 9.02384C7.50923 8.49745 7.25014 8.08061 7.25014 7.875C7.25014 7.66939 7.50923 7.25255 8.12245 6.72616C8.47062 6.42925 8.85807 6.15606 9.2724 5.9075C9.26427 6.26195 9.26427 6.6182 9.2724 6.97552ZM9.2724 17.0245C9.26427 17.3818 9.26427 17.7381 9.2724 18.0925C8.85807 17.8439 8.47062 17.5708 8.12245 17.2738C7.50923 16.7474 7.25014 16.3306 7.25014 16.125C7.25014 15.9194 7.50923 15.5026 8.12245 14.9762C8.37432 14.758 8.66024 14.5451 8.97438 14.3395C9.19962 14.9628 9.48189 15.5513 9.81142 16.0925C9.62229 16.4192 9.44178 16.7312 9.2724 17.0245Z" fill="#61DAFB"/>
            </svg>
          </div>,
          level: "Beginner",
          description: "Mendalami pengembangan UI sederhana menggunakan React. Sudah memahami konsep dasar seperti komponen, props, state, dan JSX. Mengeksplorasi penggunaan React Hooks serta struktur folder skala kecil."
        },
        {
          name: "TypeScript",
          icon: <FileText className="h-12 w-12 text-blue-300" />,
          level: "Beginner",
          description: "Menambah sistem pengetikan statis. Memahami tipe data dasar, interface, dan manfaat TypeScript dalam menulis kode yang lebih terstruktur serta dapat meminimalisir kesalahan debugging."
        },
        {
          name: "PHP",
          icon: <div className="h-12 w-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-12 w-12">
              <path fill="#8993be" d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"/>
            </svg>
          </div>,
          level: "Beginner",
          description: "Mampu menghubungkan halaman website dengan server dan database menggunakan PHP untuk website dinamis, serta memahami sintaks dasar dan struktur kontrol alur program."
        }
      ]
    },
    {
      title: "Tools",
      skills: [
        {
          name: "GitHub",
          icon: <Github className="h-12 w-12 text-white" />,
          level: "Intermediate",
          description: "Menggunakan Git dan GitHub untuk version control dan kolaborasi proyek. Melakukan commit, push, pull, serta menggunakan branch dalam pengembangan website. Mampu mengelola repository di GitHub"
        },
        {
          name: "Figma",
          icon: <Figma className="h-12 w-12 text-purple-400" />,
          level: "Intermediate",
          description: "Menggunakan Figma untuk mendesain UI/UX website dan aplikasi mobile secara kolaboratif, mulai dari wireframe hingga prototype. Menggunakan Auto Layout untuk mempercepat desain responsif."
        },
        {
          name: "Adobe Illustrator",
          icon: <FileImage className="h-12 w-12 text-orange-500" />,
          level: "Beginner",
          description: "Memiliki pemahaman dasar menggunakan Illustrator dalam pembuatan ikon, logo sederhana, dan elemen grafis berbasis vektor yang mendukung tampilan UI website atau media digital menggunakan tools dasar."
        },
        {
          name: "Adobe Photoshop Lightroom",
          icon: <FileImage className="h-12 w-12 text-blue-700" />,
          level: "Intermediate",
          description: "Mengoptimalkan kualitas foto melalui penyesuaian warna, pencahayaan, kontras, dan tone. Digunakan untuk editing dokumentasi, serta visual presentasi agar lebih estetis dan profesional."
        },
        {
          name: "Canva",
          icon: <FileImage className="h-12 w-12 text-blue-400" />,
          level: "Intermediate",
          description: "Mengoptimalkan tata letak, kombinasi warna, tipografi, serta elemen grafis untuk menciptakan desain yang estetis dan sesuai dengan kebutuhan. Merancang berbagai materi visual seperti poster, banner, dan presentasi."
        },
        {
          name: "Notion",
          icon: <FileText className="h-12 w-12 text-gray-300" />,
          level: "Intermediate",
          description: "Mencatat ide, menyusun dokumentasi proyek, serta mengelola daftar tugas secara sistematis, baik individu maupun tim. Mengoptimalkan sistem untuk meningkatkan produktivitas serta keteraturan dalam manajemen informasi."
        },
        {
          name: "Trello",
          icon: <Trello className="h-12 w-12 text-blue-400" />,
          level: "Intermediate",
          description: "Mengelola tugas dan alur kerja proyek secara efisien, mengoptimalkan penggunaan label, checklist, dan deadline untuk memantau progres secara visual, serta meningkatkan kolaborasi tim dalam penyelesaian proyek."
        },
        {
          name: "MS Word",
          icon: <FileText className="h-12 w-12 text-blue-600" />,
          level: "Intermediate",
          description: "Menyusun dokumen formal seperti laporan, makalah, proposal, dan surat resmi. Menggunakan fitur lanjutan seperti heading styles, daftar isi otomatis, tabel, mail merge, serta formatting yang sesuai dengan standar penulisan."
        },
        {
          name: "MS Excel",
          icon: <Table className="h-12 w-12 text-green-600" />,
          level: "Intermediate",
          description: "Menggunakan formula dan fungsi Excel, mengelola data dengan tabel dinamis dan pivot table. Mampu menyajikan informasi secara visual melalui pembuatan grafik dan diagram untuk analisis data yang lebih jelas."
        },
        {
          name: "MS PowerPoint",
          icon: <PresentationIcon className="h-12 w-12 text-red-400" />,
          level: "Intermediate",
          description: "Mendesain presentasi yang menarik dan profesional, menambahkan animasi dan transisi untuk meningkatkan interaktivitas, penyusunan materi yang sistematis untuk mendukung penyampaian yang jelas."
        }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
          <Card className="p-6 glass-card text-gray-200">
            <p className="leading-relaxed mb-1 text-justify">
            Halo! Saya Diaz Abi Sudira, seorang siswa yang berdedikasi dengan minat dalam pengembangan website juga desain UI/UX. Melalui studi saya, saya telah memperoleh banyak pengalaman dan keterampilan dalam berbagai framework, serta mahir dalam pengembangan front-end. Selain itu, eksplorasi saya dalam UI/UX dan juga desain grafis lainnya dapat meningkatkan kemampuan saya dalam membuat solusi digital yang tidak hanya tampak hebat tetapi juga memberikan nilai fungsional bagi pengguna. Saya memiliki kemampuan lainnya yang mendukung produktivitas dan presentasi serta pengelolaan dokumentasi menggunakan Microsoft Office seperti Word, Excel, dan Powerpoint. 
            <br /><br />Saya juga telah mengembangkan kemampuan pribadi saya melalui pengalaman berorganisasi di PASKIBRA Kota Bandung, saya unggul dalam kerja sama tim, rasa disiplin yang tinggi, manajemen waktu, rasa bertanggung jawab, memiliki mental dan fisik yang kuat, serta rasa solidaritas yang tinggi. Saya ingin terus mengembangkan keterampilan saya dalam front-end maupun back-end untuk memperluas pengalaman serta kesiapan di industri teknologi.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-white text-xl mb-4 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" />Skills
                </h3>
              
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-10">
                  <h4 className="text-lg font-medium text-white mb-4 text-center">{category.title}</h4>
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      {category.skills.map((skill, skillIndex) => (
                        <CarouselItem key={skillIndex} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-4">
                            <Card className="p-5 h-full flex flex-col glass-card border border-white/10 hover:border-white/20 transition-all">
                              <div className="mb-4 flex justify-center">
                                {skill.icon}
                              </div>
                              <h5 className="text-white font-medium text-lg text-center">{skill.name}</h5>
                              <h4 className="text-sm text-gray-400 text-center mb-2">({skill.level})</h4>
                              <p className="text-gray-400 text-sm text-center">{skill.description}</p>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-white text-xl mb-4 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h4 className="font-medium text-white">{item.institution}</h4>
                        <p className="text-sm text-gray-400">{item.degree}</p>
                      </div>
                      <span className="text-xs text-gray-400 mt-1 md:mt-0 md:ml-4">{item.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;