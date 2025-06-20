
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const achievements = [
    "Certified Business Coach with 10+ years experience",
    "Helped 500+ entrepreneurs achieve their goals",
    "Speaker at major industry conferences",
    "Author of bestselling business books"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="text-emerald-600 font-semibold text-lg">About Our Expertise</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transforming <span className="text-emerald-600">Potential</span> into 
                Performance Since 2014
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience in business coaching and organizational development, 
                I've dedicated my career to helping ambitious professionals and entrepreneurs 
                breakthrough barriers and achieve extraordinary results.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
              Learn More About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=700&fit=crop"
              alt="Professional business meeting"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-emerald-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
