// Import all skill logos
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import tailwindLogo from '../assets/tailwindcss.png';
import jsLogo from '../assets/JavaScript.png';
import expressLogo from '../assets/Express.png';
import nodeLogo from '../assets/node.png';
import supabaseLogo from '../assets/supabase.png';
import firebaseLogo from '../assets/firebase.png';
// import shadcnLogo from '../assets/shadcn.png';
import reactLogo from '../assets/react.png';
 import githubLogo from '../assets/github.png';
import vscodeLogo from '../assets/vscode.png';
import postmanLogo from '../assets/postman.png';

function Skills() {
  // Skills data with logos and their respective glow colors
  const skills = [
    { name: 'HTML', logo: htmlLogo, glowColor: 'rgba(217, 52, 24, 0.85)' },
    { name: 'CSS', logo: cssLogo, glowColor: 'rgba(39, 83, 245, 0.85)' },
    { name: 'Tailwind CSS', logo: tailwindLogo, glowColor: 'rgba(39, 143, 245, 0.85)' },
    { name: 'JavaScript', logo: jsLogo, glowColor: 'rgba(241, 245, 39, 0.85)' },
    { name: 'React.js', logo: reactLogo, glowColor: 'rgba(17, 200, 190, 0.85)' },
    { name: 'Node.js', logo: nodeLogo, glowColor: 'rgba(122, 200, 17, 0.85)' },
    { name: 'Express.js', logo: expressLogo, glowColor: 'rgba(192, 199, 182, 0.85)' },
    { name: 'Supabase', logo: supabaseLogo, glowColor: 'rgba(24, 217, 26, 0.85)' },
    { name: 'Firebase', logo: firebaseLogo, glowColor: 'rgba(245, 118, 39, 0.85)' },
    // { name: 'ShadCN', logo: shadcnLogo, glowColor: 'rgba(100, 100, 100, 0.25)' },
  ];

  const tools = [
    { name: 'GitHub', logo: githubLogo, glowColor: 'rgba(63, 50, 48, 0.85)' },
    { name: 'VS Code', logo: vscodeLogo, glowColor: 'rgba(43, 26, 183, 0.85)' },
    { name: 'Postman', logo: postmanLogo, glowColor: 'rgba(232, 130, 29, 0.85)' },
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen  flex items-center justify-center bg-linear-to-br from-lavender to-white py-10 sm:py-18 md:py-22 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Tools
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-r from-transparent via-sunset to-sunset rounded-full"></div>
            <div className="w-2 h-2 bg-sunset rounded-full"></div>
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-l from-transparent via-sunset to-sunset rounded-full"></div>
          </div>
        </div>

        <div className="mb-10 sm:mb-14">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 text-center">
            Technologies
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 sm:hover:scale-110 md:hover:scale-115 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 hover:rotate-1 sm:hover:rotate-2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 32px ${skill.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-midnight/5 via-lavender/5 to-sunset/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 sm:group-hover:scale-125 md:group-hover:scale-140 group-hover:-rotate-6 sm:group-hover:-rotate-12 md:group-hover:-rotate-15 group-hover:drop-shadow-2xl">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                  />
                  
                  <div className="absolute inset-0 rounded-full border-2 sm:border-[3px] md:border-4 border-midnight/0 transition-all duration-700 ease-out group-hover:border-midnight/60 group-hover:scale-125 sm:group-hover:scale-150 md:group-hover:scale-[1.75] group-hover:animate-ping"></div>
                </div>

                <p className="relative z-10 font-sans text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center transition-all duration-500 ease-out group-hover:text-gray-900 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 md:group-hover:-translate-y-3 group-hover:scale-105 sm:group-hover:scale-110">
                  {skill.name}
                </p>

                <div className=" absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out skew-x-12"></div>

                <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-bl from-malachite/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-2xl rounded-tr-2xl"></div>

                <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-tr from-royalpurple/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 rounded-tr-2xl rounded-bl-2xl"></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 text-center">
            Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 sm:hover:scale-110 md:hover:scale-115 hover:-translate-y-2 sm:hover:-translate-y-3 md:hover:-translate-y-4 hover:rotate-1 sm:hover:rotate-2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 32px ${tool.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-midnight/5 via-lavender/5 to-sunset/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 sm:group-hover:scale-125 md:group-hover:scale-140 group-hover:-rotate-6 sm:group-hover:-rotate-12 md:group-hover:-rotate-15 group-hover:drop-shadow-2xl">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain drop-shadow-lg transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110"
                  />
                  
                  <div className="absolute inset-0  rounded-full border-2 sm:border-[3px] md:border-4 border-midnight/0 transition-all duration-700 ease-out group-hover:border-midnight/60 group-hover:scale-125 sm:group-hover:scale-150 md:group-hover:scale-[1.75] group-hover:animate-ping"></div>
                </div>

                <p className="relative z-10 font-sans text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center transition-all duration-500 ease-out group-hover:text-gray-900 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 md:group-hover:-translate-y-3 group-hover:scale-105 sm:group-hover:scale-110">
                  {tool.name}
                </p>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out skew-x-12"></div>

                <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-bl from-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-2xl rounded-tr-2xl"></div>

                <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-linear-to-tr from-lavender/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 rounded-tr-2xl rounded-bl-2xl"></div>
              </div>
            ))}
          </div>
        </div> 

      </div>
    </section>
    // <section 
    //   id="skills" 
    //   className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
    // >
    //   <div className="max-w-7xl mx-auto w-full">
        
    //     {/* Section Title - Using Playfair Display */}
    //     <div className="text-center mb-12 sm:mb-16 md:mb-20">
    //       <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
    //         Skills & Tools
    //       </h2>
    //       {/* Decorative underline - Using theme colors */}
    //       <div className="flex items-center justify-center gap-3 mt-6">
    //         <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-r from-transparent via-malachite to-malachite rounded-full"></div>
    //         <div className="w-2 h-2 bg-malachite rounded-full"></div>
    //         <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-l from-transparent via-malachite to-malachite rounded-full"></div>
    //       </div>
    //     </div>

    //     {/* Skills Section */}
    //     <div className="mb-16 sm:mb-20">
    //       <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 text-center">
    //         Technologies
    //       </h3>
          
    //       {/* Skills Grid */}
    //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
    //         {skills.map((skill, index) => (
    //           <div
    //             key={index}
    //             className={`group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${skill.glowClass}`}
    //           >
    //             {/* Logo */}
    //             <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
    //               <img 
    //                 src={skill.logo} 
    //                 alt={`${skill.name} logo`}
    //                 className="w-full h-full object-contain drop-shadow-lg"
    //               />
    //             </div>

    //             {/* Skill Name - Using Inter font */}
    //             <p className="relative z-10 font-sans text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
    //               {skill.name}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Tools Section */}
    //     <div>
    //       <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-8 sm:mb-12 text-center">
    //         Tools
    //       </h3>
          
    //       {/* Tools Grid */}
    //       <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-3xl mx-auto">
    //         {tools.map((tool, index) => (
    //           <div
    //             key={index}
    //             className={`group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${tool.glowClass}`}
    //           >
    //             {/* Logo */}
    //             <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
    //               <img 
    //                 src={tool.logo} 
    //                 alt={`${tool.name} logo`}
    //                 className="w-full h-full object-contain drop-shadow-lg"
    //               />
    //             </div>

    //             {/* Tool Name - Using Inter font */}
    //             <p className="relative z-10 font-sans text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
    //               {tool.name}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div> 

    //   </div>
    // </section>
  );
}

export default Skills;