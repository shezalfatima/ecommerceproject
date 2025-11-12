import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Instagram, Linkedin, Github, Phone, MessageSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">ModeMuse</h3>
            <p className="text-sm text-muted-foreground mb-4">Elevate your style with the latest trends in women's fashion.</p>
            <div className="space-y-2 text-sm">
              <a href="tel:+441234567890" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span>9877339405</span>
              </a>
              <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/shop" className="text-muted-foreground hover:text-foreground">Shop</NavLink></li>
              <li><NavLink to="/about" className="text-muted-foreground hover:text-foreground">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-muted-foreground hover:text-foreground">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/___fatima__011?igsh=MW9nNWJnZTB2M3l0Mw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/shezal75?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </Button>
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </Button>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-2">Subscribe for updates and special offers.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ModeMuse. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
