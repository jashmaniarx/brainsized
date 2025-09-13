import { Code2, Database, Cpu, Network, Shield, Zap } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: Cpu,
      items: ["PyTorch", "TensorFlow", "Transformers", "CUDA", "OpenAI GPT"]
    },
    {
      category: "Backend Infrastructure", 
      icon: Database,
      items: ["Kubernetes", "Docker", "PostgreSQL", "Redis", "GraphQL"]
    },
    {
      category: "Security & Privacy",
      icon: Shield, 
      items: ["End-to-End Encryption", "Zero-Knowledge", "GDPR Compliant", "SOC2", "HIPAA Ready"]
    },
    {
      category: "Performance",
      icon: Zap,
      items: ["Edge Computing", "CDN", "Real-time Processing", "Auto-scaling", "99.99% Uptime"]
    },
    {
      category: "Integration APIs",
      icon: Network,
      items: ["REST APIs", "WebSocket", "SDK Support", "Webhooks", "OAuth 2.0"]
    },
    {
      category: "Development",
      icon: Code2,
      items: ["TypeScript", "React", "Python", "Go", "WebAssembly"]
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built on
            <span className="gradient-text"> Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the latest advances in AI, neuroscience, and distributed systems 
            to deliver unparalleled cognitive enhancement capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bento-card group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-secondary">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{tech.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;