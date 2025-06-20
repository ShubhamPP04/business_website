
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white pt-10">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Expert Your Life &
                <span className="block text-emerald-300">Business Coaching</span>
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 leading-relaxed">
                Transform your potential into success with personalized coaching strategies 
                that deliver real results for entrepreneurs and business leaders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-black hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">500+</div>
                <div className="text-sm text-emerald-100">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">10+</div>
                <div className="text-sm text-emerald-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-300">95%</div>
                <div className="text-sm text-emerald-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop&crop=face"
                alt="Professional Business Coach"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-400/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
