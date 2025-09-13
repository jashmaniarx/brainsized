import { Brain, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API", href: "#" },
      { name: "Documentation", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Research", href: "#" },
      { name: "Status", href: "#" }
    ]
  };

  return (
    <footer className="relative mt-32 border-t border-primary/10">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb orb-1 opacity-30" />
        <div className="floating-orb orb-2 opacity-20" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">BrainSized</span>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Pioneering the future of cognitive enhancement through revolutionary 
              AI-human collaboration technology. Unlock your mind's true potential.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 BrainSized by Jash Maniar. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;