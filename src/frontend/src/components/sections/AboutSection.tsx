import { CheckCircle2, Target, Hammer, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Experienced Professionals',
      description: 'Our team brings years of construction expertise to every project, ensuring exceptional results.'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Craftsmanship',
      description: 'We use premium materials and proven techniques to deliver lasting quality in every build.'
    },
    {
      icon: Hammer,
      title: 'On-Time Delivery',
      description: 'We respect your timeline and work efficiently to complete projects on schedule.'
    },
    {
      icon: Users,
      title: 'Safety Standards',
      description: 'Safety is our top priority. We maintain strict protocols to protect our team and your property.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About Shree Aainath Construction
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a trusted construction company committed to delivering excellence in every project. 
            With a focus on quality, safety, and customer satisfaction, we transform your construction 
            dreams into reality. Our experienced team handles projects of all sizes with professionalism 
            and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Our Commitment
          </h3>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            At Shree Aainath Construction, we believe in building more than structures—we build 
            relationships. Every project is an opportunity to demonstrate our commitment to quality, 
            integrity, and customer satisfaction. We work closely with our clients from concept to 
            completion, ensuring their vision becomes reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
