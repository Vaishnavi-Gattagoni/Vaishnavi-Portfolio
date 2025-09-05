import { ArrowRight, Download } from 'lucide-react';
import portraitImage from '@/assets/vaishnavi-profile.jpg';
const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Floating geometric elements */}
      <div className="floating-circle w-32 h-32 top-20 right-20 animate-float"></div>
      <div className="floating-circle w-20 h-20 top-40 right-80 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="floating-circle w-16 h-16 bottom-40 right-60 animate-float" style={{
      animationDelay: '4s'
    }}></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg font-medium text-white">Hi, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="hero-text text-yellow-300">Gattagoni</span>
                <br />
                <span className="hero-text text-yellow-300">Vaishnavi</span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-white">
                Aspiring Data Analyst | AI & ML Enthusiast | Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg max-w-xl leading-relaxed text-white">
              Turning ideas into intelligent solutions with Data, AI, and Code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToProjects} className="btn-hero flex items-center gap-2 justify-center text-stone-950 bg-inherit">
                View My Work
                <ArrowRight size={20} className="bg-yellow-300" />
              </button>
              <button onClick={scrollToContact} className="btn-outline flex items-center gap-2 justify-center">
                Contact Me
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold hero-text">5+</p>
                <p className="text-sm text-white">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold hero-text">2</p>
                <p className="text-sm text-white">Internships</p>
              </div>
              <div>
                <p className="text-2xl font-bold hero-text">2026</p>
                <p className="text-sm text-white">Graduate</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative mx-auto lg:ml-auto w-80 h-80">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-2xl opacity-30 blur-2xl animate-pulse-slow" style={{
              background: 'var(--gradient-primary)'
            }}></div>
              
              <img src={portraitImage} alt="Gattagoni Vaishnavi - Data Analyst and AI Engineer" className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl" style={{
              boxShadow: 'var(--shadow-card)'
            }} />
              
              {/* Decorative border */}
              <div className="absolute -inset-1 rounded-2xl opacity-50 blur-sm" style={{
              background: 'var(--gradient-secondary)'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;