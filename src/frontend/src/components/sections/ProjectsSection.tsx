import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      image: '/assets/generated/sac-project-01.dim_800x600.png',
      title: 'Modern Commercial Complex',
      description: 'A state-of-the-art commercial building featuring contemporary design and sustainable construction practices.'
    },
    {
      image: '/assets/generated/sac-project-02.dim_800x600.png',
      title: 'Luxury Residential Villa',
      description: 'Custom-built luxury home with premium finishes and attention to every architectural detail.'
    },
    {
      image: '/assets/generated/sac-project-03.dim_800x600.png',
      title: 'Industrial Warehouse',
      description: 'Large-scale industrial facility built to meet specific operational requirements and safety standards.'
    },
    {
      image: '/assets/generated/sac-project-04.dim_800x600.png',
      title: 'Residential Apartment Complex',
      description: 'Multi-unit residential development combining functionality with modern aesthetic appeal.'
    },
    {
      image: '/assets/generated/sac-project-05.dim_800x600.png',
      title: 'Office Building Renovation',
      description: 'Complete transformation of existing office space with modern amenities and improved functionality.'
    },
    {
      image: '/assets/generated/sac-project-06.dim_800x600.png',
      title: 'Retail Shopping Center',
      description: 'Contemporary retail space designed for optimal customer experience and business operations.'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our portfolio of completed projects showcasing our commitment to quality, 
            innovation, and excellence in construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/50"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
