import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail compose URL
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const to = 'rohawklings@gmail.com,rohawklings32683@gmail.com';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
    
    // Try to open Gmail in new tab
    window.open(gmailUrl, '_blank');
    
    // Clear form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 500);
  };

  return (
    <div className="min-h-screen py-20 bg-colorful relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Get in touch with our team
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" required value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more..." 
                      rows={5}
                      required 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={!isFormValid}
                    className={`w-full font-semibold ${
                      isFormValid 
                        ? 'bg-primary hover:bg-primary-dark text-primary-foreground' 
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-gold mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Main Faculty Contacts</p>
                      <p className="text-muted-foreground">Max Everett - max.everett@hccs.hunter.cuny.edu</p>
                      <p className="text-muted-foreground">Lisa Siegmann - lsiegman@hunter.cuny.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-gold mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">Lisa Siegmann: 646-963-6341</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gold mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">71 East 94th Street</p>
                      <p className="text-muted-foreground">New York, NY 10128</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Meeting Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="pt-2">
                      <span className="font-semibold text-foreground">Regular Meetings:</span><br />
                      <strong className="text-primary">Hunter College High School</strong>, every <strong className="text-primary">Wednesday from 11:00-11:54</strong>
                    </p>
                    <p className="pt-2">
                      <span className="font-semibold text-foreground">Build Sessions:</span><br />
                      <strong className="text-gold-dark">Multiple times a week at Cornell Tech's STEM Center on Roosevelt Island</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gold/20 border border-gold/30">
                <CardContent className="py-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Want to Join?</h3>
                  <p className="text-foreground/90 mb-4">
                    Our robotics team is open to all Hunter College High School students interested in robotics. Join us for hands-on learning, teamwork, and competition!
                  </p>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
