const StatsSection = () => {
  const stats = [
    {
      value: "1M+",
      label: "Neural Connections",
      description: "Processed per second"
    },
    {
      value: "45%",
      label: "Productivity Boost",
      description: "Average user improvement"
    },
    {
      value: "0.1ms",
      label: "Response Time",
      description: "Ultra-low latency"
    },
    {
      value: "99.97%",
      label: "Uptime",
      description: "Enterprise reliability"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bento-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;