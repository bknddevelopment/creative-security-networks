import { Camera, Shield, Smartphone, Zap, Lock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const features = [
  {
    icon: Camera,
    title: "HD Security Cameras",
    description: "Crystal clear 4K video surveillance with night vision and motion detection capabilities.",
  },
  {
    icon: Shield,
    title: "24/7 Monitoring",
    description: "Round-the-clock professional monitoring with immediate response to any security alerts.",
  },
  {
    icon: Smartphone,
    title: "Mobile Control",
    description: "Control your entire security system from anywhere using our intuitive mobile app.",
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Real-time notifications sent directly to your phone when unusual activity is detected.",
  },
  {
    icon: Lock,
    title: "Smart Access Control",
    description: "Advanced keyless entry systems with biometric and card access options.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated security experts available 24/7 to assist with any concerns or emergencies.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art technology combined with professional expertise to keep your property safe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover className="text-center">
                <CardContent>
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-pale to-accent-teal/20 rounded-2xl flex items-center justify-center">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}