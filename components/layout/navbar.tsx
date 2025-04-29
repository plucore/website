'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                TransformAI
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button className="flex items-center text-foreground/80 hover:text-foreground transition-colors group">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1">
                  <Link href="/services/ai-automation" className="block px-4 py-2 text-sm text-foreground hover:bg-accent">
                    AI Automation
                  </Link>
                  <Link href="/services/odoo-implementation" className="block px-4 py-2 text-sm text-foreground hover:bg-accent">
                    Odoo Implementation
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About Us
            </Link>
            
            <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button
              variant="primary"
              className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-md mr-4"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="md:hidden ml-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground rounded-md p-2 inline-flex items-center justify-center"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="space-y-1 ml-4">
              <p className="px-3 py-2 font-medium">Services</p>
              <Link 
                href="/services/ai-automation" 
                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Automation
              </Link>
              <Link 
                href="/services/odoo-implementation" 
                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Odoo Implementation
              </Link>
            </div>
            
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button
              variant="primary"
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-md"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}