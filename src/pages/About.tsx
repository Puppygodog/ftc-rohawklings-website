import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorativeBlobs, DecorativeRings, DecorativeCorners, DecorativeLines } from "@/components/DecorativeElements";

const About = () => {
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-fade-in">
              About FTC Rohawklings
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Discover our mission, vision, and what makes us unique
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-colorful relative overflow-hidden">
        <DecorativeBlobs variant="mixed" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-dense opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mission & Vision - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border border-primary/30 hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm overflow-hidden animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-primary"></div>
                    </div>
                    <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded in <strong className="text-primary">1989 by inventor Dean Kamen</strong>, <strong className="text-primary">FIRST (For Inspiration and Recognition of Science and Technology)</strong> is a global nonprofit organization that prepares young people for the future through a suite of welcoming, team-based robotics programs. The mission of FIRST is to provide <strong className="text-primary">life-changing robotics programs</strong> that give young people the skills, confidence, and resilience to build a better world. Our team represents <strong className="text-primary">Hunter College High School</strong>, a school for intellectually gifted and talented students of New York City, representing academic rigor and intellectual curiosity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gold/30 hover:border-gold/50 hover:shadow-gold transition-all duration-300 bg-gradient-to-br from-gold/5 to-transparent backdrop-blur-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-gold"></div>
                    </div>
                    <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our robotics team is a <strong className="text-gold-dark">community for Hunter students</strong> interested in robotics to gather, share ideas, and learn interactively through <strong className="text-gold-dark">hands-on robotics work</strong> and competing within the <strong className="text-gold-dark">First Tech Challenge</strong>. Our Hunter robotics community is diverse and filled with people with unique sets of abilities, from those interested in surgery to climate activists. Together, these students are the <strong className="text-gold-dark">future leaders of the world</strong> that will vividly remember the amazing connections and community from high school. Our actions are focused on <strong className="text-gold-dark">making education in these core subjects accessible for everyone</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* History - Achievement Highlights */}
            <Card className="border border-primary/30 hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </div>
                  <CardTitle className="text-2xl text-foreground">Our History & Achievements</CardTitle>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">2023</div>
                    <div className="text-sm text-muted-foreground">Established</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gold/10 border border-gold/20">
                    <div className="text-xl font-bold text-gold-dark mb-1">1st Place</div>
                    <div className="text-sm text-muted-foreground">NYC Qualifier 8</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">Rank 3</div>
                    <div className="text-sm text-muted-foreground">NYC Qualifier 8</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Established in <strong className="text-primary">2023</strong>, the Rohawklings have achieved remarkable success in a short time. Our top achievements include winning the <strong className="text-gold-dark">Think Award at NYC Qualifier 6</strong>, achieving <strong className="text-gold-dark">1st Place Ranking at NYC Qualifier 8</strong>, and finishing <strong className="text-primary">Rank 3 out of 21 Teams in NYC Qualifier 8</strong>. We've also <strong className="text-primary">aided the Marymount School in starting their own FTC team</strong> and participated in <strong className="text-gold-dark">MakerFaire Coney Island</strong>, displaying our 2024 Centerstage season robot. Our journey has been marked by continuous learning, growth, and achievement.
                </p>
              </CardContent>
            </Card>

            {/* What Makes Us Special - Visual */}
            <Card className="border border-gold/30 hover:border-gold/50 hover:shadow-gold transition-all duration-300 bg-gradient-to-br from-gold/5 to-transparent backdrop-blur-sm overflow-hidden mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-gold"></div>
                  </div>
                  <CardTitle className="text-2xl text-foreground">What Makes Us Special</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 rounded-lg bg-gold/10 border border-gold/20 inline-block">
                  <p className="text-sm font-semibold text-gold-dark mb-1">This Year's Theme</p>
                  <p className="text-2xl font-bold text-foreground">DECODE</p>
                  <p className="text-xs text-muted-foreground mt-1">Archeology-based field exploration</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The theme of this year's competition is <strong className="text-gold-dark font-semibold">DECODE</strong>, in which teams explore an archeology-based field. Our team is dedicated to <strong className="text-gold-dark">exploring the past and changing the future</strong> through innovation and technology. Through our program, we hope we will give all of our members the skills they need to <strong className="text-gold-dark">open new paths to the future</strong>. Students learn to take the lead on individually initiated projects and work with fellow students–this balance is designed to allow students to develop both <strong className="text-primary">independence and teamwork skills</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Our Values - Grid Layout */}
            <Card className="border border-primary/30 hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </div>
                  <CardTitle className="text-2xl text-foreground">Our Values</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <strong className="text-primary block mb-1">Learn and Apply Java Coding Skills</strong>
                        <span className="text-sm text-muted-foreground">Programming is an increasingly competitive field, and <strong className="text-primary">hands-on experience and early education</strong> is crucial for building the fundamentals necessary to learn more advanced skills.</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-gold/20 bg-gold/5">
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <div>
                        <strong className="text-gold-dark block mb-1">Learn and Apply Computer-Aided Design (CAD) Skills</strong>
                        <span className="text-sm text-muted-foreground">CAD is integral to harnessing the power of <strong className="text-gold-dark">3-D printers</strong>, and allows custom parts for <strong className="text-gold-dark">maximum efficiency and minimum environmental impact</strong>.</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <div>
                        <strong className="text-primary block mb-1">Develop Soft Skills</strong>
                        <span className="text-sm text-muted-foreground">Students learn to take the lead on individually initiated projects and work with fellow students, developing both <strong className="text-primary">independence and teamwork skills</strong>.</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-gold/20 bg-gold/5">
                    <div className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      <div>
                        <strong className="text-gold-dark block mb-1">Develop Marketing and Outreach Skills</strong>
                        <span className="text-sm text-muted-foreground">Our Marketing and Fundraising Teams build financial and outreach skills in order to hone their <strong className="text-gold-dark">persuasive skills</strong>, which are crucial to success in future endeavors.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;