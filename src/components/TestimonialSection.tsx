import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Researcher at MIT",
      content: "BrainSized has revolutionized how I approach complex research problems. The cognitive enhancement is genuinely transformative.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, TechCorp",
      content: "Our entire team's productivity increased by 60% within the first month. The real-time neural feedback is incredible.",
      rating: 5, 
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Neuroscientist",
      content: "The science behind BrainSized is solid. I've never experienced such seamless human-AI cognitive integration.",
      rating: 5,
      avatar: "EW"
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      content: "Debugging complex systems is now effortless. BrainSized helps me see patterns I'd never notice otherwise.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Lisa Park",
      role: "Data Scientist",
      content: "The analytical capabilities are mind-blowing. I can process datasets 10x faster with perfect accuracy.",
      rating: 5,
      avatar: "LP"
    },
    {
      name: "James Miller",
      role: "Startup Founder",
      content: "BrainSized gave us the edge we needed. Making better decisions faster has accelerated our growth tremendously.",
      rating: 5,
      avatar: "JM"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by
            <span className="gradient-text"> Brilliant Minds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of researchers, entrepreneurs, and innovators who have already 
            enhanced their cognitive capabilities with BrainSized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bento-card group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="h-6 w-6 text-primary mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <div className="bento-card inline-block">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-semibold border-2 border-background"
                  >
                    {testimonial.avatar}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold border-2 border-background">
                  +1k
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold">Join 1,000+ Enhanced Minds</div>
                <div className="text-sm text-muted-foreground">Start your cognitive journey today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;