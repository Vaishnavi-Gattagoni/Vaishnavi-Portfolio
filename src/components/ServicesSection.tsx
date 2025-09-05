import { BarChart3, Brain, Code, Cog } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Data Analysis & Visualization',
      description: 'Uncover valuable insights from your data using advanced ML algorithms and create compelling visualizations with tools like PowerBI.',
      features: ['Statistical Analysis', 'Data Mining', 'Interactive Dashboards', 'Predictive Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Solutions',
      description: 'Build intelligent models for automation and smart applications using machine learning, deep learning, and computer vision.',
      features: ['Machine Learning Models', 'Computer Vision', 'Natural Language Processing', 'AI Integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      description: 'Create scalable, responsive web applications using modern frameworks and technologies from frontend to backend.',
      features: ['React Applications', 'Node.js Backend', 'Database Design', 'API Development'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Cog size={32} />,
      title: 'Software Development',
      description: 'End-to-end software solutions from concept to deployment, focusing on clean code and optimal performance.',
      features: ['System Architecture', 'Performance Optimization', 'Testing & Deployment', 'Maintenance & Support'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What I <span className="hero-text">Offer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help you leverage the power of data and technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))` }}
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="card-hover rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology and data-driven solutions.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;