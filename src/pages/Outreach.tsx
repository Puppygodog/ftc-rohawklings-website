import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorativeBlobs, DecorativeRings, DecorativeCorners, DecorativeLines } from "@/components/DecorativeElements";

const Outreach = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-colorful-intense overflow-hidden">
        <DecorativeBlobs variant="intense" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        <div className="absolute inset-0 bg-dots opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Community & Outreach
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Outreach
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing robotics, supporting other teams, and growing the STEM community.
            </p>
          </div>
        </div>
      </section>

      {/* Outreach Content */}
      <section className="py-16 bg-colorful relative overflow-hidden">
        <DecorativeBlobs variant="mixed" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        <div className="absolute inset-0 bg-grid-dense opacity-15" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="border border-primary/30 bg-card/80 backdrop-blur-sm shadow-card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Connecting with the Robotics Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We met with <strong className="text-primary">Apeiro #23409</strong> and{" "}
                  <strong className="text-primary">SITHS Mercury #23463</strong> to share ideas on how to further
                  connect with the robotics community.
                </p>
                <p>
                  We majorly assisted other teams consisting of middle schoolers such as the{" "}
                  <strong className="text-primary">Moo Moo Moovers #31670</strong>. Throughout December 2025, we gave
                  them advice and help, after which they won finalist alliance in{" "}
                  <strong className="text-primary">NYC Qualifier 7</strong>.
                </p>
                <p>
                  We presented FTC locally to all-girls schools like{" "}
                  <strong className="text-primary">Marymount</strong> and{" "}
                  <strong className="text-primary">Nightingale</strong>, building a foundation for young women to
                  enter engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gold/30 bg-card/80 backdrop-blur-sm shadow-gold">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Ambassadors for FIRST
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are <strong className="text-gold-dark">AMBASSADORS for FIRST</strong> with the{" "}
                  <strong className="text-gold-dark">Russian School of Mathematics</strong> to teach their summer
                  robotics enrichment program, which we helped initiate. We are exposing young minds to robotics by
                  introducing them to <strong className="text-gold-dark">First Lego League</strong>, growing the
                  engineering community from its roots.
                </p>
                <p>
                  We met with <strong className="text-gold-dark">Iron Phoenix #22942</strong>, who graciously donated{" "}
                  <strong className="text-gold-dark">$4,500 in spare parts</strong> that will be used to fund future
                  generations. Their coach also provided advice on our robot.
                </p>
                <p>
                  We are <strong className="text-gold-dark">AMBASSADORS for FIRST</strong> with{" "}
                  <strong className="text-gold-dark">C2C Robotics</strong> for VEX, sharing the differences between FTC
                  and VEX and expanding our community beyond FIRST Tech Challenge.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/30 bg-card/80 backdrop-blur-sm shadow-card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Global Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We have shown our dedication to FTC by connecting with teams around the world, trying to collaborate
                  and share our experiences.
                </p>
                <p>
                  We have held meetings with multiple international teams such as{" "}
                  <strong className="text-primary">The Merge #33593</strong> in Greece and{" "}
                  <strong className="text-primary">Mooneye #32635</strong> in Kazakhstan. In these meetings, we have
                  exchanged tips and assisted with various problems such as problematic intake systems and coding
                  problems related to turret aim.
                </p>
                <p>
                  Through this process, we have also learned more about FTC and robotics accessibility in various areas
                  of the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outreach;

