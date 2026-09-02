import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Lightbulb, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import rohawkLogo from "@/assets/rohawklogo.png";
import { DecorativeBlobs, DecorativeRings, DecorativeCorners, DecorativeLines } from "@/components/DecorativeElements";
import InstagramEmbed from "@/components/InstagramEmbed";
import SocialLinks from "@/components/SocialLinks";
import SponsorRow from "@/components/SponsorRow";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.95), rgba(91, 33, 182, 0.85), rgba(245, 158, 11, 0.75)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Clean decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle gradient mesh overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-gold/5" />
          
          {/* Strategic corner rings */}
          <div className="absolute w-[600px] h-[600px] border border-white/8 rounded-full -top-[300px] -right-[200px]" />
          <div className="absolute w-[500px] h-[500px] border border-gold/8 rounded-full -bottom-[250px] -left-[150px]" />
          
          {/* Clean corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-white/15 rounded-tl-lg" />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24">
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold/15 rounded-tr-lg" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gold/12 rounded-bl-lg" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24">
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-white/12 rounded-br-lg" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Teams Banner - Above Logo */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/90 text-sm mb-8 animate-fade-in" style={{ boxShadow: '0 0 15px rgba(245, 158, 11, 0.5), 0 0 30px rgba(245, 158, 11, 0.3)' }}>
            <Sparkles size={16} className="text-gold" />
            <span>Teams 24661 (Purple) & 32863 (Gold)</span>
            <Sparkles size={16} className="text-gold" />
          </div>
          
          {/* Logo - Centered above title */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="inline-block p-4 rounded-full bg-gold/30 backdrop-blur-sm" style={{ boxShadow: '0 0 25px rgba(245, 158, 11, 0.6), 0 0 50px rgba(245, 158, 11, 0.4), 0 0 75px rgba(245, 158, 11, 0.2)' }}>
              <img 
                src={rohawkLogo} 
                alt="Rohawklings Logo" 
                className="h-40 w-40 md:h-48 md:w-48"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            FTC Rohawklings
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto animate-fade-in">
            Hunter College High School
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-4 max-w-2xl mx-auto animate-fade-in">
            <strong className="text-gold">Innovation</strong>, <strong className="text-gold">teamwork</strong>, and <strong className="text-gold">excellence</strong> in robotics competition
          </p>
          <p className="text-base md:text-lg text-white/85 mb-8 max-w-3xl mx-auto animate-fade-in">
            Our team is dedicated to exploring the past and changing the future through innovation and technology. With our program, we hope to give our members the skills needed to open new paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-10">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold shadow-gold">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <Link to="/donate">Support Us</Link>
            </Button>
          </div>
          <SocialLinks className="justify-center animate-fade-in mt-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-colorful-intense relative overflow-hidden">
        <DecorativeBlobs variant="intense" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-dots-dense opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedication, innovation, and teamwork at every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group flex flex-col items-start p-8 rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors ring-2 ring-primary/20">
                <Trophy className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Competition Ready</h3>
              <p className="text-muted-foreground leading-relaxed">
                Competing at the <strong className="text-primary">highest level in FTC robotics competitions</strong> with dedication and skill.
              </p>
            </div>

            <div className="group flex flex-col items-start p-8 rounded-2xl border border-border/60 hover:border-gold/40 hover:shadow-gold transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-14 w-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors ring-2 ring-gold/20">
                <Users className="text-gold-dark" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Strong Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                A <strong className="text-gold-dark">dedicated team of students</strong> working together to achieve <strong className="text-gold-dark">excellence in robotics</strong>.
              </p>
            </div>

            <div className="group flex flex-col items-start p-8 rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors ring-2 ring-primary/20">
                <Lightbulb className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pushing boundaries with <strong className="text-primary">creative solutions</strong> and <strong className="text-primary">cutting-edge technology</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-colorful relative overflow-hidden py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Our Sponsors
          </h2>
          <p className="text-sm text-muted-foreground">
            Thank you to our generous supporters
          </p>
        </div>
        <SponsorRow />
      </section>

      {/* Social Section */}
      <section className="py-24 bg-colorful relative overflow-hidden">
        <DecorativeBlobs variant="gold" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-gold/20 text-gold-dark rounded-full text-sm font-semibold mb-4">
                Stay Connected
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Follow Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                See what we're building, learning, and achieving
              </p>
            </div>
            
            <InstagramEmbed />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Clean decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-primary-light/6" />
          
          {/* Strategic corner rings */}
          <div className="absolute w-[500px] h-[500px] border border-white/8 rounded-full -top-[200px] right-[10%]" />
          <div className="absolute w-[400px] h-[400px] border border-gold/8 rounded-full bottom-[5%] -left-[100px]" />
          
          {/* Clean corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-white/12 rounded-tl-lg" />
          </div>
          <div className="absolute top-0 right-0 w-24 h-24">
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gold/12 rounded-tr-lg" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gold/10 rounded-bl-lg" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24">
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-white/10 rounded-br-lg" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Follow our progress as we compete, innovate, and grow together as a team.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold shadow-gold">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
