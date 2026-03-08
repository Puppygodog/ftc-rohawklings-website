import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Award } from "lucide-react";

const Competitions = () => {
  const upcomingEvents = [
    {
      title: "NYC Superqualifier 1",
      date: "February 28, 2026",
      location: "John Dewey High School",
      description: "Our next major competition where we'll compete against top teams from the qualifiers.",
    },
  ];

  const pastAchievements = [
    {
      title: "NYC Qualifier 8",
      award: "1st Place Ranking, Sustain Award #2, Alliance 1 Captain",
      year: "2026 - Jan 17",
      description: "Won 1st Place Ranking, Sustain Award #2, and Alliance 1 Captain at NYC Qualifier 8 on January 17, 2026.",
    },
    {
      title: "NYC Qualifier 6",
      award: "Think Award",
      year: "2026 - Jan 3",
      description: "Won the Think Award at NYC Qualifier 6 on January 3, 2026.",
    },
    {
      title: "NYC Qualifier 8",
      award: "Rank 3",
      year: "2024",
      description: "Finished Rank 3 out of 21 Teams in NYC Qualifier 8, demonstrating exceptional performance and teamwork.",
    },
    {
      title: "NYC Superqualifier 1",
      award: "Rank 18",
      year: "2024",
      description: "Finished Rank 18 out of 32 Teams in NYC Superqualifier 1. Top 14% of teams in the qualifiers go to superqualifiers.",
    },
    {
      title: "MakerFaire Coney Island",
      award: "Participation",
      year: "2024",
      description: "Participated in MakerFaire Coney Island, displaying our 2024 Centerstage season robot to the community.",
    },
  ];

  return (
    <div className="min-h-screen py-24 bg-colorful-intense relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Competitions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Competitions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey through FTC robotics competitions
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card 
                  key={index}
                  className="group border border-border/60 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 bg-card"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-2 text-sm">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Achievements */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gold rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Past Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastAchievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="group border border-border/60 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 bg-card"
                >
                  <CardHeader className="space-y-3">
                    <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                      <Award className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-base text-foreground mb-2">{achievement.title}</CardTitle>
                      <p className="text-gold-dark font-semibold text-sm">{achievement.award}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.year}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Competition Info */}
          <section>
            <Card className="border border-border/60 bg-card shadow-card">
              <CardHeader className="border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <CardTitle className="text-2xl text-foreground">About FTC Competitions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Founded in <strong className="text-primary">1989 by inventor Dean Kamen</strong>, <strong className="text-primary">FIRST (For Inspiration and Recognition of Science and Technology)</strong> is a global nonprofit organization that prepares young people for the future through a suite of welcoming, team-based robotics programs. The theme of this year's competition is <strong className="text-gold-dark font-semibold">DECODE</strong>, in which teams explore an archeology-based field. Our team is dedicated to <strong className="text-primary">exploring the past and changing the future</strong> through innovation and technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Established in <strong className="text-primary">2023</strong>, we've achieved remarkable success: winning the <strong className="text-gold-dark">Think Award at NYC Qualifier 6</strong>, achieving <strong className="text-gold-dark">1st Place Ranking at NYC Qualifier 8</strong>, and finishing <strong className="text-primary">Rank 3 out of 21 Teams in NYC Qualifier 8</strong>. We've also participated in <strong className="text-gold-dark">MakerFaire Coney Island</strong>, displaying our 2024 Centerstage season robot.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
