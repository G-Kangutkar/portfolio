import { useEffect, useState } from 'react';
function Home (){


  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer"
  ];

  const colors = [
    "text-[#DDA15E]",  // goldenrod
    "text-[#283618]",  // mossgreen
    "text-[#BC6C25]",  // burntorange
    "text-[#606C38]"   // olive
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through roles every 3 seconds
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
// min-h-screen  from  
  return (
    <section id='home' className=" h-[80vh] flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-20 sm:px-6 md:px-8 lg:px-12 mt-20">
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px] opacity-10"></div>
      
      {/* Floating orbs - Using Tailwind animate-pulse and custom animate-float */}
      <div className="absolute top-10 left-5 sm:top-16 sm:left-10 md:top-20 md:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-cream rounded-full blur-2xl sm:blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-10 md:bottom-20 md:right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-olive rounded-full blur-2xl sm:blur-3xl opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-burntorange rounded-full blur-2xl sm:blur-3xl opacity-10 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
        
        {/* Name - Playfair Display with Tailwind transitions */}
        <div className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="font-sans mt-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 font-medium">
              Hello myself
            </p>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight relative group leading-tight">
            {/* Small screens: Stack names vertically for better fit */}
            <span className="block sm:inline-block relative">
              Gauri
              {/* Glowing effect - Tailwind blur and opacity */}
              <span className="absolute inset-0 blur-lg sm:blur-xl md:blur-2xl text-malachite opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                Gauri
              </span>
            </span>
            {' '}
            <span className="block sm:inline-block relative mt-2 sm:mt-0">
              Kangutkar
              {/* Glowing effect */}
              <span className="absolute inset-0 blur-lg sm:blur-xl md:blur-2xl text-royalpurple opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                Kangutkar
              </span>
            </span>
          </h1>
        </div>

        {/* Animated divider - Using Tailwind animate-pulse */}
        <div className={`flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-cream to-transparent animate-pulse"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cream rounded-full animate-ping"></div>
          <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-linear-to-r from-transparent via-mossgreen to-transparent animate-pulse"></div>
        </div>

        {/* Rotating roles - Using Tailwind transitions */}
        <div className={`min-h-25 sm:min-h-30 md:min-h-37.5 lg:min-h-45 xl:min-h-50 flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative w-full">
            
            {/* "I'm a" text - Inter font */}
            <p className="font-sans text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 font-medium">
              I'm a
            </p>

            {/* Rotating roles container */}
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
                  {/* Role text - Playfair Display */}
                  <h2 className={`font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ${colors[index]} relative px-2 sm:px-4`}>
                    <span className="whitespace-nowrap sm:whitespace-normal">
                      {role}
                    </span>
                    {/* Underline animation - Using Tailwind animate-expandWidth */}
                    {currentRole === index && (
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 sm:h-1 animate-expandWidth ${
                          index === 0 ? 'bg-goldenrod' : 
                          index === 1 ? 'bg-mossgreen' : 
                          index === 2 ? 'bg-burntorange' : 
                          'bg-olive'
                        }`}
                      ></span>
                    )}
                  </h2>
                </div>
              ))}
            </div>

            {/* Blinking cursor - Using Tailwind animate-blink */}
            {/* <span 
              className={`inline-block w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 ml-1 sm:ml-2 animate-blink align-middle ${
                colors[currentRole].includes('35B51F') ? 'bg-malachite' :
                colors[currentRole].includes('490059') ? 'bg-royalpurple' :
                'bg-brownstone'
              }`}
            ></span> */}
          </div>
        </div>

        {/* Role indicators (dots) - Tailwind hover and transitions */}
        <div className={`flex justify-center gap-2 sm:gap-2.5 md:gap-3 mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {roles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentRole(index)}
              className={`transition-all duration-300 rounded-full ${
                currentRole === index 
                  ? 'w-6 sm:w-7 md:w-8 h-2 sm:h-2.5 md:h-3' 
                  : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 hover:scale-125'
              } ${
                currentRole === index
                  ? index === 0 ? 'bg-goldenrod' : 
                    index === 1 ? 'bg-mossgreen' : 
                    index === 2 ? 'bg-burntorange' : 
                    'bg-olive'
                  : 'bg-gray-700 opacity-50'
              }`}
              aria-label={`View ${roles[index]}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


export default Home;