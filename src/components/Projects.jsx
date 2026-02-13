import { useState } from 'react';
import { ExternalLink, Github, Code2, Sparkles, ArrowUpRight, Calendar, Tag } from 'lucide-react';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'Todos management',
            description: 'A full-stack online shopping platform with real-time inventory, payment integration, and admin dashboard.',
            image: '/project1.jpg', 
            category: 'Full Stack',
            tags: ['React', 'Tailwindcss', 'Node.js', 'Express.js', 'Supabase', 'JWT'],
            demoLink: 'https://demo.com',
            githubLink: 'https://github.com/yourusername/project1',
            date: '2026',
            featured: true,
        },
        {
            id: 2,
            title: 'Book Management App',
            description: 'A responsive Book Management App with full CRUD, real-time search, and Firebase cloud sync — built with React, Axios, and Tailwind CSS',
            image: '/Book_management.png',
            category: 'Frontend',
            tags: ['React', 'Tailwind', 'Axios', 'Firebase'],
            demoLink: 'https://book-management-three-iota.vercel.app',
            githubLink: 'https://github.com/G-Kangutkar/book-management',
            date: '2025',
            featured: true,
        },
        //needed=> {
        //     id: 3,
        //     title: '',
        //     description: '',
        //     image: '/project3.jpg',
        //     category: 'Full Stack',
        //     tags: ['React', 'Tailwind', 'Axios', 'Node.js', 'Express.js', 'JWT', 'Supabase'],
        //     demoLink: 'https://demo.com',
        //     githubLink: 'https://github.com/yourusername/project3',
        //     date: '2026',
        //     featured: false,
        // },
        // needed=>{
        //     id: 4,
        //     title: '',
        //     description: '',
        //     image: '/project4.jpg',
        //     category: 'Backend',
        //     tags: ['Express', 'Supabase', 'JWT'],
        //     demoLink: '',
        //     githubLink: 'https://github.com/yourusername/project4',
        //     date: '2026',
        //     featured: false,
        // },
    ];

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section
            id="projects"
            className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 py-10 sm:py-18 md:py-22 px-4 sm:px-4 md:px-6 lg:px-10"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-midnight/10 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-midnight" />
                        <span className="font-sans text-sm font-medium text-midnight">My Work</span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Projects
                    </h2>

                    <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        A collection of projects showcasing my skills in full-stack development
                    </p>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-r from-transparent via-sunset to-sunset rounded-full"></div>
                        <div className="w-2 h-2 bg-sunset rounded-full"></div>
                        <div className="h-1 w-12 sm:w-16 md:w-20 bg-linear-to-l from-transparent via-sunset to-sunset rounded-full"></div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-sans font-semibold text-sm sm:text-base transition-all duration-300 ${activeFilter === category
                                ? 'bg-midnight text-white shadow-lg shadow-midnight/30 scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10  ">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-midnight"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-lavender text-white text-xs font-bold rounded-full flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" />
                                    <span>Project</span>
                                </div>
                            )}

                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 md:h-64 bg-linear-to-br from-malachite/20 via-royalpurple/20 to-brownstone/20 ">
                                {/* Placeholder for project image */}
                                <div
                                    className="h-44 w-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Code2 className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 opacity-50" />
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 pointer-events-none">
                                    {/* {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full hover:bg-malachite hover:text-white transition-colors duration-300 transform hover:scale-110 pointer-events-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )} */}
                                    {/* {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 transform hover:scale-110 pointer-events-auto"
                                            onClick={(e) =>
                                                // {
                                                e.stopPropagation()
                                                // ;window.open(project.githubLink, '_blank');}
                                            }
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )} */}
                                </div>

                                {/* Animated border on hover */}
                                <div className="absolute inset-0 border-3 border-transparent group-hover:border-sunset transition-all duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                {/* Category & Date */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-malachite/10 text-malachite text-xs font-semibold rounded-full">
                                        <Tag className="w-3 h-3" />
                                        {project.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-500">
                                        <Calendar className="w-3 h-3" />
                                        {project.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-malachite transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-malachite hover:text-white transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View Details Link */}
                                <div className="flex items-center justify-center gap-2 text-malachite font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                    {/* <span>View Details</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /> */}




                                    {/* Buttons */}
                                    <div className="flex items-center gap-2 w-full sm:w-auto  ">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-midnight text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-gray-700 transition-colors duration-300"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-sunset text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-malachite/80 transition-colors duration-300"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Element */ }
                        < div className = "absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-malachite/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" ></div>
            </div>
                    ))}
        </div>

                {/* Empty State */ }
    {
        filteredProjects.length === 0 && (
            <div className="text-center py-20">
                <Code2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="font-sans text-lg text-gray-600">No projects found in this category.</p>
            </div>
        )
    }

    {/* View All Projects Button */ }
    {/* <div className="text-center mt-12 sm:mt-16">
                    <a
                        href="https://github.com/G-Kangutkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-malachite to-royalpurple text-white font-sans font-bold rounded-full hover:shadow-xl hover:shadow-malachite/30 transition-all duration-300 hover:scale-105"
                    >
                        <Github className="w-5 h-5" />
                        <span>View All on GitHub</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div> */}

            </div >
        </section >
    );
}

export default Projects;



// function Projects (){

//     return(
//         <section id="project">
//             <div >


//             </div>
//         </section>
//     )

// }
// export default Projects;