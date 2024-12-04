import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./button";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full border-b border-transparent dark:border-white/[0.2] bg-black/50 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-white"> ediUI</span>
            </motion.div>
            
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:flex items-center gap-6"
              >
                <a href="https://meayush.xyz" className="text-sm text-gray-300 hover:text-white">Documentation</a>
                <a href="https://meayush.xyz" className="text-sm text-gray-300 hover:text-white">Components</a>
                <a href="https://meayush.xyz" className="text-sm text-gray-300 hover:text-white">Pricing</a>
              </motion.div>
              
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};