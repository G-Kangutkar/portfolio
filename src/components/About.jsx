function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center bg-white py-10 px-3 sm:px-4 md:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-r from-transparent via-sunset to-sunset rounded-full"></div>
            <div className="w-2 h-2 bg-sunset rounded-full"></div>
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-l from-transparent via-sunset to-sunset rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 ">
            <p className="font-sans text-justify text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {/* I'm Gauri Kangutkar, a Full Stack Developer who builds elegant and scalable 
              web applications using React, Node.js, Express.js, Tailwind CSS, and ShadCN. 
              I specialize in creating responsive, user-friendly interfaces through a combination
               of clean code practices and creative design thinking. Every project I deliver is both 
               functional and visually compelling,
               driven by a commitment to meaningful impact. */}

               I'm Gauri Kangutkar, a Full Stack Developer specializing in
                end-to-end web application development. Working with React, 
                Node.js, Express.js, Tailwind CSS, and ShadCN, I create scalable, 
                maintainable solutions that combine technical precision with 
                user-focused design. My development approach is rooted in industry 
                best practices, 
               ensuring applications that are both robust and refined.
            </p>

            {/* Optional: Add a CTA button */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-linear-to-r from-midnight to-sunset text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-midnight via-lavender to-sunset rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/path-to-your-photo.jpg" 
                  alt="Gauri Kangutkar - Full Stack Developer" 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-midnight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sunset rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-midnight rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;



// I'm Gauri Kangutkar, a Full Stack Developer passionate about building elegant and scalable web applications. With expertise in React, Node.js, Express.js, and modern frontend technologies like Tailwind CSS and ShadCN, I create responsive, user-friendly interfaces that deliver seamless experiences. My approach combines clean code practices with creative design thinking, ensuring every project is both functional and visually compelling. I'm driven by a commitment to craft applications that make a meaningful impact.