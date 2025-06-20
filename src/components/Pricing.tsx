
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Discovery Session",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "90-minute consultation",
        "Goal assessment",
        "Personalized action plan",
        "Resource recommendations"
      ],
      cta: "Book Free Session",
      popular: false
    },
    {
      name: "Individual Coaching",
      price: "$299",
      period: "/month",
      description: "For dedicated professionals",
      features: [
        "4 one-on-one sessions",
        "Email support",
        "Progress tracking",
        "Resource library access",
        "Goal setting workshop"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Executive Program",
      price: "$599",
      period: "/month",
      description: "For senior leaders",
      features: [
        "8 one-on-one sessions",
        "24/7 priority support",
        "Leadership assessment",
        "Team coaching session",
        "Quarterly review meetings",
        "Custom development plan"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-emerald-600">Growth Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the coaching package that best fits your needs and start your 
            transformation today with our proven methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-emerald-500 border-2 scale-105' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-emerald-600">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
