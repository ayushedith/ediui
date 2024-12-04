import { motion } from "framer-motion";
import { Card } from "./card";
import { Code, Palette, Zap } from "lucide-react";
import { GradientText } from "./gradient-text";

const features = [
  {
    icon: <Code className="h-6 w-6 text-purple-500" />,
    title: "Ready to use components",
    description: "Copy and paste beautiful, responsive components into your project.",
    gradient: { from: "from-purple-500", to: "to-pink-500" }
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-500" />,
    title: "Fast and optimized",
    description: "Built with performance in mind. Smooth animations and zero dependencies.",
    gradient: { from: "from-cyan-500", to: "to-blue-500" }
  },
  {
    icon: <Palette className="h-6 w-6 text-pink-500" />,
    title: "Customizable",
    description: "Easily customize components to match your brand and requirements.",
    gradient: { from: "from-pink-500", to: "to-purple-500" }
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group">
                <div className="space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">
                    <GradientText
                      from={feature.gradient.from}
                      to={feature.gradient.to}
                    >
                      {feature.title}
                    </GradientText>
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};