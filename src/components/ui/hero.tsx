import { motion } from "framer-motion";
import { GithubIcon, Star } from "lucide-react";
import { Button } from "./button";
import { GradientText } from "./gradient-text";

export const Hero = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-4xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          <GradientText>Beautiful UI Components</GradientText>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl">
          A collection of beautiful and reusable UI components for modern web applications.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline">
            <GithubIcon size={20} />
            Star on GitHub
          </Button> 
          <Button variant="outline">
            <Star size={16} className="text-yellow-500" />
            <span>2.5k stars</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};