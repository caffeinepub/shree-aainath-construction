import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/sac-hero.dim_1600x900.png"
          alt="Construction site showcasing quality workmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Building Your Dreams with{' '}
            <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Professional construction services delivering quality, safety, and innovation. 
            From residential projects to commercial developments, we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 group"
            >
              Request a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="text-lg px-8 py-6"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Safety First</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Quality</div>
                <div className="text-sm text-muted-foreground">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Expert</div>
                <div className="text-sm text-muted-foreground">Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
