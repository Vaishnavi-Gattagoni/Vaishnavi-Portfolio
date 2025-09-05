import { ExternalLink, Github, MousePointer, Paintbrush, Mic, Shield, QrCode } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Virtual Mouse',
      description: 'Revolutionary hand gesture-based cursor control system using OpenCV and MediaPipe for touchless computer interaction.',
      icon: <MousePointer size={24} />,
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      features: ['Gesture Recognition', 'Real-time Tracking', 'Click Controls', 'Smooth Movement'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gesture Drawing on MS Paint',
      description: 'Innovative application allowing users to draw and control MS Paint using hand gestures for creative digital art.',
      icon: <Paintbrush size={24} />,
      tech: ['Python', 'OpenCV', 'MediaPipe', 'GUI'],
      features: ['Hand Tracking', 'Drawing Controls', 'Color Selection', 'Tool Switching'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Voice-Command Laptop Controller',
      description: 'Smart voice control system for managing applications and performing Google searches through natural language commands.',
      icon: <Mic size={24} />,
      tech: ['Python', 'Speech Recognition', 'NLP', 'API Integration'],
      features: ['Voice Commands', 'App Control', 'Web Search', 'System Integration'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Safe AI Chatbot',
      description: 'Consent-driven chatbot with separate adult and child modes ensuring secure and appropriate AI interactions.',
      icon: <Shield size={24} />,
      tech: ['Python', 'NLP', 'AI Safety', 'User Authentication'],
      features: ['Consent Management', 'Age Verification', 'Content Filtering', 'Safe Interactions'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Proscan Webapp',
      description: 'Comprehensive barcode-based food product analysis system providing health ratings and personalized recommendations.',
      icon: <QrCode size={24} />,
      tech: ['React', 'Node.js', 'Barcode API', 'Health Analytics'],
      features: ['Barcode Scanning', 'Health Analysis', 'Nutrition Facts', 'Recommendations'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="hero-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions showcasing my expertise in AI, Computer Vision, and Full Stack Development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href="https://github.com/Vaishnavi-Gattagoni" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-card transition-colors group/btn"
                    >
                      <Github size={18} className="group-hover/btn:text-accent transition-colors" />
                    </a>
                    <a 
                      href="https://github.com/Vaishnavi-Gattagoni" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-card transition-colors group/btn"
                    >
                      <ExternalLink size={18} className="group-hover/btn:text-accent transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-accent">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full group-hover:bg-accent/20 group-hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))` }}
                />
              </div>
            ))}
          </div>

          {/* View More Projects CTA */}
          <div className="text-center">
            <div className="card-hover rounded-3xl p-8 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new innovative projects. Check out my GitHub for the latest updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/Vaishnavi-Gattagoni" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-hero flex items-center gap-2 justify-center"
                >
                  <Github size={18} />
                  View GitHub
                </a>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline"
                >
                  Discuss a Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;