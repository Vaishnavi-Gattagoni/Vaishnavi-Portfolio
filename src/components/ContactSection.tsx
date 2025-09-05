import { Mail, Phone, Linkedin, Github, Code, Trophy } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_uzucvxm', // Service ID
        'template_cvr2dys', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vaishnavi'
        },
        'lAZWOOHZ5GWBm22NP' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'Vaishnavigattagonigoud@gmail.com',
      href: 'mailto:Vaishnavigattagonigoud@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8297667477',
      href: 'tel:+918297667477',
      color: 'text-green-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      username: '@vaishnavi-g-a89808298',
      href: 'https://www.linkedin.com/in/vaishnavi-g-a89808298/',
      color: 'text-blue-400',
      description: 'Professional Network'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      username: '@Vaishnavi-Gattagoni',
      href: 'https://github.com/Vaishnavi-Gattagoni',
      color: 'text-purple-400',
      description: 'Code Repository'
    },
    {
      icon: <Code size={24} />,
      label: 'LeetCode',
      username: '@Vaishnavi_Gattagoni',
      href: 'https://leetcode.com/u/Vaishnavi_Gattagoni/',
      color: 'text-orange-400',
      description: 'Coding Practice'
    },
    {
      icon: <Trophy size={24} />,
      label: 'HackerRank',
      username: '@h160622747021',
      href: 'https://www.hackerrank.com/profile/h160622747021',
      color: 'text-green-400',
      description: 'Programming Skills'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="hero-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? I'd love to hear from you!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Direct Contact */}
            <div className="card-hover rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className={`p-3 rounded-xl bg-accent/10 ${method.color} group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-medium">{method.label}</p>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Message */}
            <div className="card-hover rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none transition-colors"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Find Me Online</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mx-auto mb-4 p-3 rounded-xl bg-accent/10 ${social.color} group-hover:scale-110 transition-transform w-fit`}>
                    {social.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{social.label}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{social.description}</p>
                  <p className="text-xs font-mono text-accent">{social.username}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Gattagoni Vaishnavi. Built with ❤️ using React & TypeScript
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Ready to turn ideas into intelligent solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;