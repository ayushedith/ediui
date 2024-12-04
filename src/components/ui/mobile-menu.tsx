import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-y-0 right-0 w-full bg-black/95 backdrop-blur-xl p-6 z-50"
        >
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="!p-2"
            >
              <X size={24} />
            </Button>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            <a href="#" className="text-xl text-gray-300 hover:text-white py-2">
              Components
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white py-2">
              Documentation
            </a>
            <a href="#" className="text-xl text-gray-300 hover:text-white py-2">
              Pricing
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};