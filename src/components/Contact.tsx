import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import SectionTitle from './common/SectionTitle';
import SocialLinks from './common/SocialLinks';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact" subtitle="Get In Touch" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-soft-white mb-4">Let's Talk</h3>
            <p className="text-soft-white/80 mb-6">
              Feel free to reach out if you have any questions or want to work together. 
              I'm always open to discussing new projects, opportunities, and ideas.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-highlight font-medium mb-2">Email</h4>
                <p className="text-soft-white">vanamchandrashekar@outlook.com</p>
              </div>
              <div>
                <h4 className="text-highlight font-medium mb-2">Based in</h4>
                <p className="text-soft-white">Hyderabad, India</p>
              </div>
            </div>
            
            <SocialLinks links={socialLinks} />
          </div>
          
          <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-soft-white mb-4">Send me a message</h3>
            
            {isSubmitted ? (
              <div className="bg-highlight/20 border border-highlight rounded-md p-4 text-soft-white">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-soft-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-secondary/30 rounded-md text-soft-white focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-soft-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-secondary/30 rounded-md text-soft-white focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-soft-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-secondary/30 rounded-md text-soft-white focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-soft-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-background/60 border border-secondary/30 rounded-md text-soft-white focus:outline-none focus:ring-2 focus:ring-highlight resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-secondary hover:bg-highlight transition-colors rounded-md text-soft-white font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;