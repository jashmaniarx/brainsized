import { Brain, Zap, Users, Target, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BentoGrid = () => {
  const features = [
    {
      title: "Neural Enhancement",
      description: "AI-powered cognitive amplification tailored to your unique brain patterns",
      icon: Brain,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      title: "Real-time Analytics",
      description: "Track cognitive performance with advanced metrics",
      icon: BarChart3,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Lightning Fast",
      description: "Instant processing with sub-millisecond response times",
      icon: Zap,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-secondary/20 to-accent/20"
    },
    {
      title: "Secure & Private",
      description: "End-to-end encryption protects your neural data",
      icon: Shield,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Collaborative Learning",
      description: "Connect with other enhanced minds",
      icon: Users,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-accent/20 to-secondary/20"
    },
    {
      title: "Precision Targeting",
      description: "Focus enhancement on specific cognitive domains",
      icon: Target,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-secondary/20 to-primary/20"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation
            <span className="gradient-text"> Cognitive Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of human-AI collaboration with our revolutionary 
            brain enhancement technology designed for the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bento-card ${feature.className} group cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bento-card md:col-span-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Mind?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who have already unlocked their cognitive potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="glow-button text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;