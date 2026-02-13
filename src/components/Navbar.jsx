import { useState } from 'react';
import { Menu, ExternalLink } from 'lucide-react';
import { FileText } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

function Navbar (){
 
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Replace this with your actual resume URL
  const resumeUrl = 'https://drive.google.com/file/d/1QlHAeWLxBgEe5SlKvK7dgcFIFnwMh9eR/view?usp=sharing';

  const handleResumeClick = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex gap-3">
            <CircleUser className='mt-2 text-sunset text-7xl'/>
            <a href="#home" className=" text-lavender font-heading text-3xl font-bold">
              Gauri Kangutkar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lavender hover:text-sunset transition-colors duration-300 font-heading text-2xl font-bold"
              >
                {link.name}
              </a>
            ))}

            {/* Resume Button */}
            <Button
              onClick={handleResumeClick}
              className="bg-sunset  hover:bg-lavender text-white flex items-center gap-2"
            >
              Resume
              <FileText className="w-4 h-4"/>
              {/* <ExternalLink className="w-4 h-4" /> */}
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-white">
                  <Menu className="h-6 w-6 " />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 sm:w-100 bg-midnight text-xl text-cream">
                <SheetHeader>
                  <SheetTitle className="text-left text-sunset ">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-1 ml-5 ">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className=" text-lavender hover:text-sunset transition-colors duration-300 py-2 font-heading text-2xl font-bold"
                    >
                      {link.name}
                    </a>
                  ))}

                  {/* Mobile Resume Button */}
                  <div className="pt-4 mt-6 mr-auto border-t border-gray-200">
                    <Button
                      onClick={() => {
                        handleResumeClick();
                        setIsOpen(false);
                      }}
                      className="w-60 bg-sunset hover:bg-lavender text-white flex items-center justify-center gap-2 m-3"
                    >
                      Resume
                      <FileText className="w-4 h-4"/>
                      {/* <ExternalLink className="w-4 h-4" /> */}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );

}
export default Navbar;