import { Building2, Home, Wrench, PaintBucket, Ruler, HardHat } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Complete commercial building solutions from ground up, including offices, retail spaces, and industrial facilities.'
    },
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom home building and residential projects designed to meet your lifestyle needs and preferences.'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services, breathing new life into your property.'
    },
    {
      icon: PaintBucket,
      title: 'Interior & Exterior Finishing',
      description: 'Professional finishing services including painting, flooring, and decorative elements for a polished look.'
    },
    {
      icon: Ruler,
      title: 'Design & Planning',
      description: 'Comprehensive design consultation and project planning to ensure your vision is perfectly executed.'
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely completion, quality control, and budget adherence.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer comprehensive construction services tailored to meet your specific needs. 
            From initial planning to final execution, we handle every aspect of your project with expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
