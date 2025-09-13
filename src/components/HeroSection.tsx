import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import brainHero from "@/assets/brain-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Now in Beta • Limited Access
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
          <span className="block">Unlock Your</span>
          <span className="gradient-text">Brain's Potential</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Revolutionary cognitive enhancement platform that amplifies human intelligence 
          through advanced AI integration. Experience thinking at the speed of light.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button className="glow-button text-lg px-8 py-6 group">
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="ghost" className="text-lg px-8 py-6 group border border-primary/20 hover:bg-primary/5">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-floating">
            <img 
              src={brainHero} 
              alt="BrainSized AI Neural Interface" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
          
          {/* Floating stats */}
          <div className="absolute -top-8 -left-8 bento-card p-4 hidden lg:block">
            <div className="text-2xl font-bold gradient-text">10x</div>
            <div className="text-sm text-muted-foreground">Faster Processing</div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 bento-card p-4 hidden lg:block">
            <div className="text-2xl font-bold gradient-text">99.9%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-24">
          <p className="text-sm text-muted-foreground mb-8">Trusted by innovators at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">OpenAI</div>
            <div className="text-2xl font-bold">DeepMind</div>
            <div className="text-2xl font-bold">Neuralink</div>
            <div className="text-2xl font-bold">Meta AI</div>
            <div className="text-2xl font-bold">Anthropic</div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;