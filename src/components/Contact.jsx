import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import contactImage from '../assets/contact-image.png';

const Contact = () => {
  return (
   
    <section
      id="contact"
      className="min-h-5 sm:min-h-15 md:min-h-25 lg:min-h-45 relative  text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0e17' }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)]"></div>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(167, 134, 223, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255, 137, 6, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 50% 50%, rgba(53, 181, 31, 0.1) 0%, transparent 70%)
          `,
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-5 sm:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 134, 223, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 134, 223, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      ></div>
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Contact Info
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-400">
            Feel free to reach out.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side - Contact Info & Social */}
          <div className="w-full space-y-8 sm:space-y-10 order-2 lg:order-1">
            
            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4 sm:gap-5 group">
                <div className="p-3 sm:p-4 rounded-xl bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors duration-300 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
                </div>
                <span className="text-sm sm:text-base md:text-lg text-slate-300 group-hover:text-white transition-colors duration-300 break-all">
                  kangutkargauri9205@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 sm:gap-5 group">
                <div className="p-3 sm:p-4 rounded-xl bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors duration-300 shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
                </div>
                <span className="text-sm sm:text-base md:text-lg text-slate-300 group-hover:text-white transition-colors duration-300">
                  +91 9322594147
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 sm:gap-5 group">
                <div className="p-3 sm:p-4 rounded-xl bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors duration-300 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
                </div>
                <span className="text-sm sm:text-base md:text-lg text-slate-300 group-hover:text-white transition-colors duration-300">
                  Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-700">
              <a
                href="https://github.com/G-Kangutkar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 sm:py-4 rounded-xl border border-slate-600 hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
                <span className="font-sans text-sm sm:text-base font-medium text-slate-300">Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/gauri-kangutkar-654745280/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 sm:py-4 rounded-xl border border-slate-600 hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
                <span className="font-sans text-sm sm:text-base font-medium text-slate-300">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-linear-to-br from-sky-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl opacity-50"></div>
              
              {/* Image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src={contactImage} 
                  alt="Contact illustration"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-sky-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-28 sm:h-28 bg-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>


  );
};

export default Contact;












// import { Github } from 'lucide-react';
// import { Linkedin } from 'lucide-react';
// function Contact (){

//     return(
//         <section>
//             <div>
//                 <div className=''>
//                     <p>
//                         <a href="https://github.com/G-Kangutkar"><Github />Github</a>

//                     </p>
//                     <p>
//                         <a href="https://www.linkedin.com/in/gauri-kangutkar-654745280/"><Linkedin />Github</a>

//                     </p>
//                     <p>
//                         <a href=""></a>
//                     </p>
                    

                    
//                 </div>
//             </div>
//         </section>
//     )

// }
// export default Contact;