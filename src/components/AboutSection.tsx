import { GraduationCap, MapPin, Briefcase, Download } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    {
      year: '2020',
      title: '10th Grade',
      institution: 'Cambridge High School',
      type: 'school'
    },
    {
      year: '2022',
      title: '12th Grade',
      institution: 'Narayana Junior College',
      type: 'college'
    },
    {
      year: '2022-2026',
      title: 'B.E. in AI & Data Science',
      institution: 'Stanley College of Engineering & Technology',
      type: 'university',
      status: 'Final Year'
    }
  ];

  const experiences = [
    {
      role: 'Machine Learning Engineer Intern',
      company: 'Swecha SOAI',
      icon: '🤖'
    },
    {
      role: 'Data Visualization Associate Intern',
      company: 'Excelerate',
      icon: '📊'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="hero-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get to know the person behind the code and data
            </p>
          </div>

          {/* Personal Bio */}
          <div className="mb-16">
            <div className="card-hover rounded-3xl p-8 mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-foreground font-semibold">Vaishnavi</span>, currently pursuing a Bachelor's in Artificial Intelligence & Data Science at Stanley College of Engineering and Technology (graduating May 2026). I'm passionate about building intelligent AI-driven applications, solving real-world problems with data, and exploring opportunities in Data Analysis and Software Development Engineering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} className="text-accent" />
                <span>Based in India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap size={20} className="text-accent" />
                <span>Final Year Student</span>
              </div>
              <button className="btn-outline flex items-center gap-2">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Education Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <GraduationCap size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="card-hover rounded-2xl p-6 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.institution}</p>
                    {item.status && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Experiences */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Key Experiences</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className="service-card">
                  <div className="text-4xl mb-4">{exp.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;