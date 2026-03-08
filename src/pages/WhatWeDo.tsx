import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Code, Wrench, Users2, Calendar, Award } from "lucide-react";
import { DecorativeBlobs, DecorativeRings, DecorativeCorners, DecorativeLines } from "@/components/DecorativeElements";

const WhatWeDo = () => {
  const subteams = [
    {
      icon: Wrench,
      title: "Mechanical and Electrical",
      lead: "Co-captains",
      description: "Design and build the physical components of our robots, including <strong class='text-primary'>mechanical systems, electrical wiring</strong>, and <strong class='text-primary'>integration of sensors and motors</strong>.",
      color: "primary",
    },
    {
      icon: Code,
      title: "Programming",
      lead: "Co-captains",
      description: "Learn and apply <strong class='text-gold-dark'>Java coding skills</strong> to program robot behaviors, <strong class='text-gold-dark'>autonomous routines</strong>, and <strong class='text-gold-dark'>teleoperated controls</strong>. Programming is crucial for building the fundamentals necessary for advanced robotics.",
      color: "gold",
    },
    {
      icon: Cog,
      title: "Computer Aided Design",
      lead: "Co-captains",
      description: "Create custom parts using <strong class='text-primary'>Computer-Aided Design software</strong>. CAD is integral to harnessing the power of <strong class='text-primary'>3-D printers</strong>, allowing custom parts for <strong class='text-primary'>maximum efficiency and minimum environmental impact</strong>.",
      color: "primary",
    },
    {
      icon: Award,
      title: "Sponsorship and Fundraising",
      lead: "Lily Wu",
      description: "Build <strong class='text-gold-dark'>financial and outreach skills</strong> to secure funding for the team. This includes <strong class='text-gold-dark'>managing sponsorship relationships</strong>, organizing fundraising events, and maintaining donor communications.",
      color: "gold",
    },
    {
      icon: Users2,
      title: "Media",
      lead: "Kate Thuya",
      description: "Manage team <strong class='text-primary'>social media presence</strong>, create content for competitions and events, document team activities, and maintain our online presence. Our Instagram account has <strong class='text-primary'>over 190 followers</strong> and is continually expanding.",
      color: "primary",
    },
    {
      icon: Calendar,
      title: "Outreach",
      lead: "Kate Thuya and Lily Wu",
      description: "Organize <strong class='text-gold-dark'>community events</strong>, participate in outreach programs like <strong class='text-gold-dark'>MakerFaire</strong>, help other schools start their own FTC teams, and make <strong class='text-gold-dark'>robotics education accessible to everyone</strong>. We've aided the <strong class='text-gold-dark'>Marymount School in starting their own FTC team</strong>.",
      color: "gold",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-colorful-intense overflow-hidden">
        <DecorativeBlobs variant="intense" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Team Structure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">What We Do</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Six Specialized Subteams
            </p>
          </div>
        </div>
      </section>

      {/* Subteams Grid */}
      <section className="py-16 bg-colorful relative overflow-hidden">
        <DecorativeBlobs variant="mixed" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-dense opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {subteams.map((subteam, index) => {
                const Icon = subteam.icon;
                const isPrimary = subteam.color === 'primary';
                return (
                  <Card 
                    key={index}
                    className={`group border border-border/60 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden relative animate-fade-in ${
                      isPrimary 
                        ? 'hover:border-primary/40 hover:shadow-card-hover' 
                        : 'hover:border-gold/40 hover:shadow-gold'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 transition-colors ${
                      isPrimary ? 'bg-primary/5 group-hover:bg-primary/10' : 'bg-gold/5 group-hover:bg-gold/10'
                    }`} />
                    <div className={`absolute bottom-0 left-0 w-20 h-20 rounded-full translate-y-1/2 -translate-x-1/2 transition-colors ${
                      isPrimary ? 'bg-gold/5 group-hover:bg-gold/8' : 'bg-primary/5 group-hover:bg-primary/8'
                    }`} />
                    <CardHeader className="space-y-5 relative p-8">
                      <div className={`h-16 w-16 rounded-xl flex items-center justify-center transition-colors ring-2 ${
                        isPrimary 
                          ? 'bg-primary/10 group-hover:bg-primary/20 ring-primary/20' 
                          : 'bg-gold/10 group-hover:bg-gold/20 ring-gold/20'
                      }`}>
                        <Icon className={isPrimary ? 'text-primary' : 'text-gold-dark'} size={30} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">{subteam.title}</CardTitle>
                        <p className={`text-sm font-medium ${isPrimary ? 'text-primary' : 'text-gold-dark'}`}>
                          Lead: {subteam.lead}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-base text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: subteam.description }} />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-colorful-intense relative overflow-hidden">
        <DecorativeBlobs variant="gold" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle dots pattern */}
        <div className="absolute inset-0 bg-dots-dense opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="border border-border/60 bg-card/80 backdrop-blur-sm shadow-elegant overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardHeader className="border-b border-border/40 pl-8">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                  <CardTitle className="text-2xl text-foreground">Our Process</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6 pl-8">
                <p className="text-muted-foreground leading-relaxed">
                  Our team meets every <strong className="text-primary">Wednesday at Hunter College High School from 11:00-11:54</strong>, with additional build sessions <strong className="text-gold-dark">multiple times a week at Cornell Tech's STEM Center on Roosevelt Island</strong>. The structure of our STEM center meets is designed to build skills for our students to attend <strong className="text-primary">FRC, the high school division</strong>, as well as to apply these skills to future workplace and learning settings.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Students learn to take the lead on individually initiated projects and work with fellow students–this balance is designed to allow students to develop both <strong className="text-primary">independence and teamwork skills</strong>. Especially in a world rapidly being shaped by artificial intelligence, <strong className="text-primary font-semibold">soft skills are more important to develop than ever</strong>. Experiential learning often happens in the educational and workplace settings, and Rohawklings aims to train students to adapt to these structured environments while ensuring learning is done.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;