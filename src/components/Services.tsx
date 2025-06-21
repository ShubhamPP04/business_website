
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop clear, actionable strategies that align with your vision and drive measurable results.",
      features: ["Goal Setting", "Market Analysis", "Action Plans"]
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Build strong leadership skills to inspire teams and create lasting organizational change.",
      features: ["Team Building", "Communication", "Decision Making"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scale your business with proven methodologies and data-driven growth strategies.",
      features: ["Revenue Growth", "Market Expansion", "Process Optimization"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Coaching",
      description: "Foster creativity and innovation to stay ahead in today's competitive market.",
      features: ["Creative Thinking", "Problem Solving", "Digital Transformation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive <span className="text-emerald-600">Coaching Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our holistic approach combines proven methodologies with personalized strategies 
            to unlock your full potential and achieve sustainable success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
