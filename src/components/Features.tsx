
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Video, Users, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Sessions that fit your busy lifestyle with 24/7 online booking"
    },
    {
      icon: Video,
      title: "Virtual & In-Person",
      description: "Choose between virtual sessions or meet in our modern office space"
    },
    {
      icon: Users,
      title: "Group Workshops",
      description: "Join like-minded professionals in our exclusive group coaching sessions"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track your progress with our comprehensive success measurement system"
    }
  ];

  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our <span className="text-emerald-300">Coaching Approach</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Experience a comprehensive coaching methodology designed to deliver 
            sustainable results and lasting transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-emerald-800/50 border-emerald-700 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-emerald-100">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
