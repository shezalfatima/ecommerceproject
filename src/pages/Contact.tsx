import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">We'd love to hear from you. Send us a message!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-muted-foreground">Model Town , BLY</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-muted-foreground">shezalfatima2@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-muted-foreground">9877339405</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." rows={6} />
            </div>
            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
