
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-emerald-300">Transform</span> Your Future?
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Take the first step towards achieving your goals. Let's discuss how our 
            coaching can help you unlock your full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <Card className="bg-emerald-800/50 border-emerald-700">
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-emerald-700/50 border-emerald-600 text-white placeholder:text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 ease-in-out"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-emerald-700/50 border-emerald-600 text-white placeholder:text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 ease-in-out"
                  />
                </div>
                <Input 
                  placeholder="Subject" 
                  className="bg-emerald-700/50 border-emerald-600 text-white placeholder:text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 ease-in-out"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="bg-emerald-700/50 border-emerald-600 text-white placeholder:text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all duration-300 ease-in-out"
                />
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-emerald-100 mb-8">
                Ready to start your transformation journey? Contact us today to schedule 
                your free discovery session and take the first step towards achieving your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-emerald-100">hello@businesscoaching.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-emerald-100">+01789 859 664</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-emerald-100">123 Business District, City, State 12345</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-emerald-100">Mon-Fri: 9AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
