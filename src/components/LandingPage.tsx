import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection"; 
import BentoGrid from "./BentoGrid";
import TechStack from "./TechStack";
import TestimonialSection from "./TestimonialSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold gradient-text">BrainSized</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#technology" className="text-muted-foreground hover:text-foreground transition-colors">Technology</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        
        <StatsSection />
        
        <div id="features">
          <BentoGrid />
        </div>
        
        <div id="technology">
          <TechStack />
        </div>
        
        <div id="testimonials">
          <TestimonialSection />
        </div>
        
        {/* Additional Sections for Scalability */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  The Science Behind
                  <span className="gradient-text"> Cognitive Enhancement</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our breakthrough neural interface technology is backed by decades of 
                  neuroscience research and validated through rigorous clinical studies.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Neuroplasticity Optimization</h3>
                      <p className="text-muted-foreground">Enhance your brain's ability to form new neural connections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Real-time Feedback</h3>
                      <p className="text-muted-foreground">Continuous monitoring and adjustment of cognitive load</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Personalized Learning</h3>
                      <p className="text-muted-foreground">AI adapts to your unique cognitive patterns and preferences</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bento-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Cognitive Enhancement Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Processing Speed</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-primary" />
                      </div>
                      <span className="text-sm gradient-text font-semibold">+80%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Memory Retention</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-secondary" />
                      </div>
                      <span className="text-sm gradient-text font-semibold">+75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Focus Duration</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-gradient-accent" />
                      </div>
                      <span className="text-sm gradient-text font-semibold">+90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your
                <span className="gradient-text"> Enhancement Level</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Start your cognitive enhancement journey with our flexible plans
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bento-card">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-muted-foreground mb-6">Perfect for individual users</p>
                <div className="text-3xl font-bold mb-6">
                  <span className="gradient-text">$29</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Basic cognitive enhancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>5 hours/day usage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full py-3 border border-primary/30 hover:bg-primary/5 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bento-card relative border-primary/50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-primary text-white text-sm rounded-full">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-muted-foreground mb-6">For serious cognitive athletes</p>
                <div className="text-3xl font-bold mb-6">
                  <span className="gradient-text">$99</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Advanced enhancement suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Unlimited usage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300">
                  Upgrade to Pro
                </button>
              </div>

              <div className="bento-card">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">For teams and organizations</p>
                <div className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Full platform access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Team collaboration tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <button className="w-full py-3 border border-primary/30 hover:bg-primary/5 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;