import { useEffect, useState } from 'react';

function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    'Full Stack Developer',
    'React Developer',
    'Frontend Developer',
    'Backend Developer',
  ];

  const colors = [
    'text-[#ff8906]',
    'text-[#a786df]',
    'text-[#ff8906]',
    'text-[#a786df]',
  ];

  // Software-themed floating code snippets
  const codeSnippets = [
    { text: '<div />', top: '10%', left: '5%', size: 'text-xs sm:text-sm', delay: '0s', dur: '8s' },
    { text: 'const app = ()', top: '20%', left: '80%', size: 'text-xs sm:text-sm', delay: '1s', dur: '10s' },
    { text: '{ }', top: '60%', left: '8%', size: 'text-base sm:text-lg', delay: '2s', dur: '9s' },
    { text: 'npm install', top: '75%', left: '75%', size: 'text-xs sm:text-sm', delay: '0.5s', dur: '11s' },
    { text: '=>', top: '40%', left: '90%', size: 'text-lg sm:text-xl', delay: '1.5s', dur: '7s' },
    { text: 'import React', top: '85%', left: '15%', size: 'text-xs', delay: '3s', dur: '12s' },
    { text: '[ ]', top: '15%', left: '45%', size: 'text-base sm:text-lg', delay: '2.5s', dur: '8s' },
    { text: 'git push', top: '50%', left: '3%', size: 'text-xs sm:text-sm', delay: '1s', dur: '10s' },
    { text: '< />', top: '30%', left: '60%', size: 'text-sm sm:text-base', delay: '0s', dur: '9s' },
    { text: 'useState()', top: '70%', left: '50%', size: 'text-xs sm:text-sm', delay: '2s', dur: '11s' },
    { text: '&&', top: '45%', left: '25%', size: 'text-lg sm:text-xl', delay: '3.5s', dur: '7s' },
    { text: '.then()', top: '90%', left: '60%', size: 'text-xs sm:text-sm', delay: '1.5s', dur: '10s' },
  ];

  // Floating tech icons as unicode/symbols
  const techSymbols = [
    { symbol: '⬡', top: '8%', left: '15%', color: '#a786df', size: 'text-2xl sm:text-3xl md:text-4xl', delay: '0s', dur: '15s' },
    { symbol: '◈', top: '25%', left: '88%', color: '#ff8906', size: 'text-xl sm:text-2xl md:text-3xl', delay: '2s', dur: '12s' },
    { symbol: '⬡', top: '65%', left: '92%', color: '#35B51F', size: 'text-2xl sm:text-3xl', delay: '4s', dur: '14s' },
    { symbol: '◈', top: '80%', left: '5%', color: '#a786df', size: 'text-xl sm:text-2xl', delay: '1s', dur: '11s' },
    { symbol: '⬡', top: '45%', left: '70%', color: '#ff8906', size: 'text-3xl sm:text-4xl md:text-5xl', delay: '3s', dur: '16s' },
    { symbol: '◇', top: '55%', left: '30%', color: '#35B51F', size: 'text-2xl sm:text-3xl', delay: '0.5s', dur: '13s' },
    { symbol: '◈', top: '12%', left: '65%', color: '#ff8906', size: 'text-xl sm:text-2xl', delay: '2.5s', dur: '9s' },
    { symbol: '◇', top: '35%', left: '10%', color: '#a786df', size: 'text-2xl sm:text-3xl md:text-4xl', delay: '1.5s', dur: '17s' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className=" min-h-25 mt-15 sm:min-h-75 md:min-h-90 lg:min-h-100 flex items-center justify-center relative overflow-hidden px-1 py-12 sm:px-2 md:px-4 lg:px-6"
      style={{ background: '#0f0e17' }}
    >

      {/* ============================================ */}
      {/* SOFTWARE THEMED BACKGROUND LAYERS           */}
      {/* ============================================ */}

      {/* Layer 1: Gradient mesh background */}
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

      {/* Layer 2: Responsive grid / circuit board pattern */}
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

      {/* Layer 3: Floating code snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className={`absolute ${snippet.size} font-mono text-lavender opacity-0 select-none hidden sm:block animate-float-code`}
          style={{
            top: snippet.top,
            left: snippet.left,
            color: index % 3 === 0 ? '#a786df' : index % 3 === 1 ? '#ff8906' : '#35B51F',
            animationDelay: snippet.delay,
            animationDuration: snippet.dur,
            animationFillMode: 'both',
          }}
        >
          {snippet.text}
        </div>
      ))}

      {/* Layer 4: Floating tech symbols */}
      {techSymbols.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.size} select-none opacity-0 animate-float-symbol`}
          style={{
            top: item.top,
            left: item.left,
            color: item.color,
            animationDelay: item.delay,
            animationDuration: item.dur,
            animationFillMode: 'both',
            textShadow: `0 0 20px ${item.color}80`,
          }}
        >
          {item.symbol}
        </div>
      ))}

      {/* Layer 5: Floating glow orbs - responsive sizes */}
      <div
        className="absolute top-10 left-5 sm:top-16 sm:left-10 md:top-20 md:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-25 animate-float"
        style={{ background: '#a786df' }}
      ></div>
      <div
        className="absolute bottom-10 right-5 sm:bottom-16 sm:right-10 md:bottom-20 md:right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-25 animate-float-delayed"
        style={{ background: '#a786df' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full blur-2xl sm:blur-3xl opacity-10 animate-pulse"
        style={{ background: '#ff8906' }}
      ></div>
      

      {/* Layer 6: Scanline effect (subtle) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      ></div>

      {/* ============================================ */}
      {/* MAIN CONTENT                                */}
      {/* ============================================ */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">

        {/* Name */}
        <div className={`mb-2 sm:mb-4 md:mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-sans mt-2 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 font-medium">
            Hello myself
          </p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight relative group leading-tight">
            <span className="block sm:inline-block relative">
              Gauri
              <span className="absolute inset-0 blur-lg sm:blur-xl md:blur-2xl text-lavender opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                Gauri
              </span>
            </span>
            {' '}
            <span className="block sm:inline-block relative mt-2 sm:mt-0">
              Kangutkar
              <span className="absolute inset-0 blur-lg sm:blur-xl md:blur-2xl text-sunset opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                Kangutkar
              </span>
            </span>
          </h1>
        </div>

        {/* Animated divider */}
        <div className={`flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-lavender to-transparent animate-pulse"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-sunset rounded-full animate-ping"></div>
          <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-sunset to-transparent animate-pulse"></div>
        </div>

        {/* Rotating roles */}
        <div className={`min-h-25 sm:min-h-30 md:min-h-37.5 lg:min-h-45 xl:min-h-50 flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative w-full">
            <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 font-medium">
              I'm a
            </p>

            <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 flex items-center justify-center overflow-hidden px-2 sm:px-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    currentRole === index
                      ? 'opacity-100 translate-y-0 scale-100'
                      : index === (currentRole - 1 + roles.length) % roles.length
                      ? 'opacity-0 -translate-y-full scale-95'
                      : 'opacity-0 translate-y-full scale-95'
                  }`}
                >
                  <h2
                    className={`font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ${colors[index]} relative px-2 sm:px-4`}
                    style={{
                      textShadow: currentRole === index
                        ? `0 0 30px ${index === 0 ? '#35B51F' : index === 1 ? '#a786df' : index === 2 ? '#ff8906' : '#35B51F'}60`
                        : 'none',
                    }}
                  >
                    <span className="whitespace-nowrap sm:whitespace-normal">
                      {role}
                    </span>
                    {currentRole === index && (
                      <span
                        className="absolute bottom-0 left-0 h-0.5 sm:h-1 animate-expandWidth"
                        style={{
                          background: index === 0 ? '#35B51F' : index === 1 ? '#a786df' : index === 2 ? '#ff8906' : '#35B51F',
                        }}
                      ></span>
                    )}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Role indicators */}
        <div className={`flex justify-center gap-2 sm:gap-2.5 md:gap-3 mt-4 sm:mt-8 md:mt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {roles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentRole(index)}
              className={`transition-all duration-300 rounded-full ${
                currentRole === index
                  ? 'w-6 sm:w-7 md:w-8 h-2 sm:h-2.5 md:h-3'
                  : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 hover:scale-125'
              }`}
              style={{
                background: currentRole === index
                  ? index === 0 ? '#ff8906' : index === 1 ? '#a786df' : index === 2 ? '#ff8906' : '#a786df'
                  : 'rgba(107, 114, 128, 0.5)',
              }}
              aria-label={`View ${roles[index]}`}
            />
          ))}
        </div>

      </div>

      {/* Embedded animations */}
      <style>{`
        @keyframes float-code {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { opacity: 0; transform: translateY(-40px); }
        }

        @keyframes float-symbol {
          0% { opacity: 0; transform: translateY(0px) rotate(0deg); }
          25% { opacity: 0.3; }
          75% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-60px) rotate(180deg); }
        }

        .animate-float-code {
          animation: float-code linear infinite;
        }

        .animate-float-symbol {
          animation: float-symbol ease-in-out infinite;
        }
      `}</style>

    </section>


    // <section id='home' className=" h-full flex items-center justify-center relative overflow-hidden  px-4 py-20 sm:px-6 md:px-8 lg:px-12 mt-10">
      
    //   {/* Animated grid background */}
    //   {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px] opacity-10"></div> */}
    //     <div
    //     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    //     style={{ backgroundImage: `url(${background})` }}
    //   ></div>

    //   {/* ✅ Dark overlay on top of background image for readability */}
    //   <div className="absolute inset-0 bg-slate-950/80"></div>

    //   {/* ✅ Grid pattern layer - On top of overlay */}
    //   <div
    //     className="absolute inset-0 opacity-10"
    //     style={{
    //       backgroundImage: `
    //         linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    //         linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    //       `,
    //       backgroundSize: '50px 50px',
    //     }}
    //   ></div>

    //   {/* Floating orbs - Using Tailwind animate-pulse and custom animate-float */}
    //   <div className="absolute top-10 left-5 sm:top-16 sm:left-10 md:top-20 md:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-lavender rounded-full blur-2xl sm:blur-3xl opacity-20 animate-float"></div>
    //   <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-10 md:bottom-20 md:right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-midnight rounded-full blur-2xl sm:blur-3xl opacity-20 animate-float-delayed"></div>
    //   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-sunset rounded-full blur-2xl sm:blur-3xl opacity-10 animate-pulse"></div>

    //   {/* Main Content */}
    //   <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        
    //     {/* Name - Playfair Display with Tailwind transitions */}
    //     <div className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    //         <p className="font-sans mt-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 font-medium">
    //           Hello myself
    //         </p>
    //       <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight relative group leading-tight">
    //         {/* Small screens: Stack names vertically for better fit */}
    //         <span className="block sm:inline-block relative">
    //           Gauri
    //           {/* Glowing effect - Tailwind blur and opacity */}
    //           <span className="absolute inset-0 blur-lg sm:blur-xl md:blur-2xl text-malachite opacity-0 group-hover:opacity-50 transition-opacity duration-500">
    //             Gauri
    //           </span>
    //         </span>
    //         {' '}
    //         <span className="block sm:inline-block relative mt-2 sm:mt-0">
    //           Kangutkar
    //           {/* Glowing effect */}
    //           <span className="absolute inset-0 blur-lg sm:blur-xl md:blur-2xl text-royalpurple opacity-0 group-hover:opacity-50 transition-opacity duration-500">
    //             Kangutkar
    //           </span>
    //         </span>
    //       </h1>
    //     </div>

    //     {/* Animated divider - Using Tailwind animate-pulse */}
    //     <div className={`flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    //       <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-cream to-transparent animate-pulse"></div>
    //       <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cream rounded-full animate-ping"></div>
    //       <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-mossgreen to-transparent animate-pulse"></div>
    //     </div>

    //     {/* Rotating roles - Using Tailwind transitions */}
    //     <div className={`min-h-25 sm:min-h-30 md:min-h-37.5 lg:min-h-45 xl:min-h-50 flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    //       <div className="relative w-full">
            
    //         {/* "I'm a" text - Inter font */}
    //         <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 font-medium">
    //           I'm a
    //         </p>

    //         {/* Rotating roles container */}
    //         <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 flex items-center justify-center overflow-hidden px-2 sm:px-4">
    //           {roles.map((role, index) => (
    //             <div
    //               key={index}
    //               className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
    //                 currentRole === index
    //                   ? 'opacity-100 translate-y-0 scale-100'
    //                   : index === (currentRole - 1 + roles.length) % roles.length
    //                   ? 'opacity-0 -translate-y-full scale-95'
    //                   : 'opacity-0 translate-y-full scale-95'
    //               }`}
    //             >
    //               {/* Role text - Playfair Display */}
    //               <h2 className={`font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ${colors[index]} relative px-2 sm:px-4`}>
    //                 <span className="whitespace-nowrap sm:whitespace-normal">
    //                   {role}
    //                 </span>
    //                 {/* Underline animation - Using Tailwind animate-expandWidth */}
    //                 {currentRole === index && (
    //                   <span 
    //                     className={`absolute bottom-0 left-0 h-0.5 sm:h-1 animate-expandWidth ${
    //                       index === 0 ? 'bg-goldenrod' : 
    //                       index === 1 ? 'bg-mossgreen' : 
    //                       index === 2 ? 'bg-burntorange' : 
    //                       'bg-olive'
    //                     }`}
    //                   ></span>
    //                 )}
    //               </h2>
    //             </div>
    //           ))}
    //         </div>

    //         {/* Blinking cursor - Using Tailwind animate-blink */}
    //         {/* <span 
    //           className={`inline-block w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 ml-1 sm:ml-2 animate-blink align-middle ${
    //             colors[currentRole].includes('35B51F') ? 'bg-malachite' :
    //             colors[currentRole].includes('490059') ? 'bg-royalpurple' :
    //             'bg-brownstone'
    //           }`}
    //         ></span> */}
    //       </div>
    //     </div>

    //     {/* Role indicators (dots) - Tailwind hover and transitions */}
    //     <div className={`flex justify-center gap-2 sm:gap-2.5 md:gap-3 mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    //       {roles.map((_, index) => (
    //         <button
    //           key={index}
    //           onClick={() => setCurrentRole(index)}
    //           className={`transition-all duration-300 rounded-full ${
    //             currentRole === index 
    //               ? 'w-6 sm:w-7 md:w-8 h-2 sm:h-2.5 md:h-3' 
    //               : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 hover:scale-125'
    //           } ${
    //             currentRole === index
    //               ? index === 0 ? 'bg-goldenrod' : 
    //                 index === 1 ? 'bg-mossgreen' : 
    //                 index === 2 ? 'bg-burntorange' : 
    //                 'bg-olive'
    //               : 'bg-gray-700 opacity-50'
    //           }`}
    //           aria-label={`View ${roles[index]}`}
    //         />
    //       ))}
    //     </div>

    //   </div>
    // </section>
  );
}


export default Home;