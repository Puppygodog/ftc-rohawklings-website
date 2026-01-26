import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DecorativeBlobs, DecorativeRings, DecorativeCorners, DecorativeLines } from "@/components/DecorativeElements";
import charlieImg from "@/assets/charlie.png";
import catherineImg from "@/assets/catherine.png";
import zoeImg from "@/assets/zoe.png";
import zhiyanImg from "@/assets/zhiyan.png";
import lilyImg from "@/assets/lily.png";
import kateImg from "@/assets/kate.png";

const Captains = () => {
  const captains = [
    {
      name: "Charlie Zhang",
      role: "Team Captain",
      image: charlieImg,
      description: "Hello! My name is Charlie Zhang and I am one of the co-captains for the 2025 to 2026 FTC Season. I'm looking forward to spreading my love of STEM and teaching my teammates the fundamentals of robotics this year, and also expanding my own knowledge! Outside of robotics, I enjoy playing golf, tennis, badminton, and guitar! Looking forward to the season ahead!",
    },
    {
      name: "Catherine Zhu",
      role: "Co-Captain",
      image: catherineImg,
      description: "Hi! My name is Catherine Zhu and I am one of the co-captains for Rohawklings Gold. I help to guide the decision making process and serve as a part of the mentorship that keeps Rohawklings alive, promoting robotics education by supporting the programming-oriented side of 32863 in its rookie year. I love working with our dedicated team, including managing outreach and working closely with my fellow leads. Outside of robotics, I am obsessed with earth and environmental sciences and believe that a better world is fought for with unity and cohesion.",
    },
    {
      name: "Zoe Yeh",
      role: "Co-Captain",
      image: zoeImg,
      description: "Hi guys!! My name is Zoe Yeh and I'm one of the co-captains for 32863 Rohawklings Gold!!! I'm so excited to be captain this year and work with all of you for robotics! I come from some robotics background, with an interest in STEM since I was very young. Ever since I started coding with blocks on scratch and experimenting with high voltage, I've been attracted to robotics like a magnet! Last year, I helped lead and participate in an FLL team that placed 8th in the NYC Semifinals, and I also have been on FTC at Hunter since 7th grade. On the robotics team I hope to value creativity as well as feasibility, making sure all our ideas get heard and iterated so that we could implement them on the robot! I love trying new things and figuring out how to make it work, so I'm always ready for a challenge! I'll also be valuing good teamwork and gracious professionalism!",
    },
    {
      name: "Zhiyan Huang",
      role: "Co-Captain",
      image: zhiyanImg,
      description: "Hi! My name is Zhiyan Huang and I am one of the co-captains for 24661 Rohawklings Purple. I enjoy the process of problem-solving, making and refining things; I used to do a lot of origami and DIY. I played around with Scratch quite a bit, which helped me transition pretty smoothly to actual programming languages and competitive coding. I have been on FRC Rohawks since last year and learn a lot about the design process, from an abstract idea all the way to hardware and software, including trade-offs. We value efforts and enthusiasm over anything, so don't be afraid if you're new to this; everyone started by learning, and we'll be working together as a supportive team! I really look forward to an exciting season and wish everyone the best of luck!",
    },
  ];

  const managers = [
    {
      name: "Lily Wu",
      role: "Treasurer",
      image: lilyImg,
      description: "My name is Liliana (Lily) Wu, and I'm the treasurer for the Rohawklings FTC teams! This means that I manage the Rohawklings finances under the supervision of our faculty advisor and school director. I'm so excited to be a part of this team, especially since my love for robotics only increases as I get older. I got into robotics in the 3rd grade, when I first realized the joy of making something with your hands and watching it run. I hope to help make this team as efficient as possible, while also making sure that everyone is included and has a fun experience!",
    },
    {
      name: "Kate Thuya",
      role: "Outreach Manager",
      image: kateImg,
      description: "Hi, I'm Kate!! The Outreach Manager of Rohawklings! This year, I'm focused on creating as much impact on our community as possible, so I'm who you should reach out to if you ever want to collaborate. (Wink wink.) My first forays into robotics started in kindergarten, where I sobbed after being denied a place on the FLL team. Since then, I've been working in the sidelines to improve myself… haha… #graciousprofessionalism But besides that, I love physics, art, and engineering, and hope to express my love of the subjects through the beautiful intertwining of them in robotics! 🤫",
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
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 animate-fade-in">
              Leadership Team
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              Our Leadership
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Meet the dedicated leaders guiding our team to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Captains Section */}
      <section className="py-16 bg-colorful relative overflow-hidden">
        <DecorativeBlobs variant="purple" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-dense opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Team Captains</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {captains.map((captain, index) => (
                <Card 
                  key={index}
                  className="group border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-card-hover bg-card/80 backdrop-blur-sm animate-fade-in overflow-hidden relative flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:bg-gold/10 transition-colors" />
                  <CardHeader className="space-y-4 relative">
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                        <img 
                          src={captain.image} 
                          alt={captain.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left flex-1">
                        <CardTitle className="text-xl text-foreground mb-1">{captain.name}</CardTitle>
                        <p className="text-primary font-semibold text-sm">{captain.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {captain.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managers Section */}
      <section className="py-16 bg-colorful-intense relative overflow-hidden">
        <DecorativeBlobs variant="gold" />
        <DecorativeRings />
        <DecorativeCorners />
        <DecorativeLines />
        {/* Subtle dots pattern */}
        <div className="absolute inset-0 bg-dots-dense opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-1 w-16 bg-gold rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">Team Managers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {managers.map((manager, index) => (
                <Card 
                  key={index}
                  className="group border border-border/60 hover:border-gold/40 transition-all duration-300 hover:shadow-gold bg-card/80 backdrop-blur-sm animate-fade-in overflow-hidden relative flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                  <CardHeader className="space-y-4 relative">
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-gold/20 group-hover:ring-gold/40 transition-all">
                        <img 
                          src={manager.image} 
                          alt={manager.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left flex-1">
                        <CardTitle className="text-xl text-foreground mb-1">{manager.name}</CardTitle>
                        <p className="text-gold-dark font-semibold text-sm">{manager.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {manager.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Captains;