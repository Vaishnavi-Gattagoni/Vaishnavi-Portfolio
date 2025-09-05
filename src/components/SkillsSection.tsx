import { useEffect, useState } from 'react';
import { Code, Database, Brain, BarChart } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'SQL', level: 88 },
        { name: 'C', level: 75 }
      ]
    },
    {
      title: 'Web Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Angular.js', level: 75 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      title: 'Data & AI',
      icon: <Brain size={24} />,
      skills: [
        { name: 'Machine Learning', level: 88 },
        { name: 'Deep Learning', level: 82 },
        { name: 'Computer Vision', level: 85 },
        { name: 'LLMs', level: 78 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <BarChart size={24} />,
      skills: [
        { name: 'PowerBI', level: 85 },
        { name: 'OpenCV', level: 88 },
        { name: 'MediaPipe', level: 80 },
        { name: 'Big Data', level: 75 }
      ]
    }
  ];

  const databases = [
    { name: 'MySQL', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Neo4j', icon: '🔗' }
  ];

  const expertiseAreas = [
    'Data Visualization',
    'AI/ML Solutions',
    'Computer Vision',
    'Data Analysis',
    'System Design',
    'Full Stack Development'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="hero-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </div>

          {/* Skill Categories with Progress Bars */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-hover rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="tech-icon text-accent">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Databases */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Database Technologies</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {databases.map((db, index) => (
                <div key={index} className="tech-icon hover:scale-110 transition-transform">
                  <div className="text-3xl mb-2">{db.icon}</div>
                  <p className="text-sm font-medium text-center">{db.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Areas of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {expertiseAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full bg-card border border-accent/20 text-accent font-medium hover:bg-accent/10 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;