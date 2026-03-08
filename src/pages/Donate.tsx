import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Donate = () => {

  return (
    <div className="min-h-screen py-24 bg-colorful relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gold/10 mx-auto mb-4">
              <Heart className="text-gold-dark" size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Support Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your support helps us continue our robotics journey and inspire the next generation of engineers
            </p>
          </div>

          <div className="mt-12 mb-8">
            <Card className="bg-gold/40 border border-gold/50">
              <CardContent className="py-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Thank You to Our Sponsors</h3>
                <p className="text-foreground/90 font-semibold text-sm md:text-base">
                  Think Academy | Russian School of Mathematics | Rocket Club | Hunter College High School PTA | Yeh Family | Bikel Family | Zhang Family | Pecoraro Family
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-border/60 bg-card shadow-card mb-8">
            <CardHeader className="border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <CardTitle className="text-2xl text-foreground">Why Support Us?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p className="text-muted-foreground leading-relaxed">
                We guarantee that <strong className="text-primary">all funds go directly into funding robotics-related activities</strong>, including buying parts for robots and paying competition fees. As a sponsor, we will <strong className="text-gold-dark">mention you on our social network channels</strong> and place your logo on different areas based on support level. Our Instagram account has <strong className="text-primary">over 190 followers</strong>, and is continually expanding. If placed on team items, your brand name will be visible during recordings, photographs, etc.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Competition registration and travel costs</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Robot parts and building materials</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Tools and equipment upgrades</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Team outreach and community programs</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Workshops and training opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-border/60 bg-card shadow-card mb-8">
            <CardHeader className="border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gold rounded-full"></div>
                <CardTitle className="text-2xl text-foreground">How to Donate</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <p className="text-muted-foreground leading-relaxed text-center">
                Donations should be made to the <strong className="text-primary">endowment fund</strong>. Paperwork will be provided after the donation has been processed. <strong className="text-gold-dark font-semibold">In the description for the gift, please write that it is for the Hunter College High School FTC Robotics Team.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="https://www.hunterschools.org/make-a-gift" target="_blank" rel="noopener noreferrer">
                    Make a Donation
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gold text-gold-dark hover:bg-gold hover:text-white hover:border-gold font-semibold"
                >
                  <a href="https://www.hunterschools.org/make-a-gift" target="_blank" rel="noopener noreferrer">
                    Become a Sponsor
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-primary">FIRST is a 501(c)(3) nonprofit organization</strong>. Donations may be <strong className="text-gold-dark">tax-deductible</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/60 bg-card shadow-card mb-8">
            <CardHeader className="border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gold rounded-full"></div>
                <CardTitle className="text-2xl text-foreground">Sponsorship Tiers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border/40 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Egg Tier: $150-$499</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand name and logo on our team website</li>
                  </ul>
                </div>
                <div className="border border-border/40 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Hatchling Tier: $500-$1,249</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Brand name and logo on our website</li>
                    <li>• Brand name on team T-Shirts and all other wearable merchandise</li>
                  </ul>
                </div>
                <div className="border border-border/40 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Nestling Tier: $1,250-$1,999</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All of the previous perks</li>
                    <li>• Social media recognition</li>
                    <li>• Brand name and logo on the robot</li>
                    <li>• Brand name and logo on the pit banner</li>
                  </ul>
                </div>
                <div className="border border-border/40 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Soaring Tier: $2,000-$2,499</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All of the previous perks</li>
                    <li>• Your company added as a key contributor on our engineering portfolio</li>
                  </ul>
                </div>
                <div className="border border-border/40 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Predator Tier: $2,500-$4,999</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All of the previous perks</li>
                    <li>• Company merchandise will be distributed at competitions/events upon request</li>
                    <li>• Appreciation package</li>
                  </ul>
                </div>
                <div className="border border-border/40 rounded-lg p-4">
                  <h4 className="font-bold text-foreground mb-2">Zenith Tier: $5,000+</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All of the previous perks</li>
                    <li>• All eligible negotiated advertising methods</li>
                    <li>• Team appearance at one company event upon request</li>
                    <li>• VIP tour of facilities and program</li>
                  </ul>
                </div>
              </div>
              <div className="border-2 border-gold/40 rounded-lg p-4 bg-gold/5">
                <h4 className="font-bold text-foreground mb-2">Apex: Highest overall donor ($5,000+)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All of the previous perks</li>
                  <li>• The honor of naming the robot competing in the current FTC season</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Donate;
