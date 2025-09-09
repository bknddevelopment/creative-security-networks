"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Building2, Home, Warehouse, Store } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteData {
  businessType: string;
  squareFootage: number;
  cameras: number;
  doors: number;
  alarmZones: number;
  monitoring: boolean;
  installation: boolean;
}

const businessTypes = [
  { id: "retail", label: "Retail", icon: Store },
  { id: "office", label: "Office", icon: Building2 },
  { id: "warehouse", label: "Warehouse", icon: Warehouse },
  { id: "residential", label: "Residential", icon: Home },
];

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    businessType: "",
    squareFootage: 2000,
    cameras: 4,
    doors: 2,
    alarmZones: 8,
    monitoring: true,
    installation: true,
  });

  const calculatePrice = () => {
    let basePrice = 0;
    
    // Base price by business type
    const typeMultiplier = {
      retail: 1.2,
      office: 1.0,
      warehouse: 1.3,
      residential: 0.8,
    }[quoteData.businessType] || 1;
    
    // Equipment costs
    basePrice += quoteData.cameras * 299; // Camera cost
    basePrice += quoteData.doors * 450; // Access control per door
    basePrice += quoteData.alarmZones * 50; // Alarm zones
    
    // Apply business type multiplier
    basePrice *= typeMultiplier;
    
    // Add services
    if (quoteData.installation) basePrice += 299;
    
    // Monthly monitoring (shown separately)
    const monthlyFee = quoteData.monitoring ? 49 : 0;
    
    return {
      equipment: Math.round(basePrice),
      monthly: monthlyFee,
      total: Math.round(basePrice),
    };
  };

  const pricing = calculatePrice();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-600">
            Calculate your security system cost in minutes
          </p>
        </div>

        <Card className="p-8">
          {/* Step Indicator */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300" />
            {[1, 2, 3].map((s) => (
              <div key={s} className="relative z-10 flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors",
                    step >= s
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-white"
                  )}
                >
                  {s}
                </div>
                <span className="text-sm text-gray-600 mt-2">
                  {s === 1 && "Type"}
                  {s === 2 && "Equipment"}
                  {s === 3 && "Review"}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Business Type */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Select Your Property Type
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() =>
                        setQuoteData({ ...quoteData, businessType: type.id })
                      }
                      className={cn(
                        "p-6 border-2 rounded-lg transition-all",
                        quoteData.businessType === type.id
                          ? "border-primary bg-primary-pale"
                          : "border-gray-300 hover:border-primary-light"
                      )}
                    >
                      <Icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                      <span className="font-medium">{type.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!quoteData.businessType}
                >
                  Next Step
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Equipment Selection */}
          {step === 2 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Customize Your Security System
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Square Footage: {quoteData.squareFootage.toLocaleString()} sq ft
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={quoteData.squareFootage}
                    onChange={(e) =>
                      setQuoteData({
                        ...quoteData,
                        squareFootage: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Cameras: {quoteData.cameras}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="32"
                    value={quoteData.cameras}
                    onChange={(e) =>
                      setQuoteData({
                        ...quoteData,
                        cameras: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Access Control Doors: {quoteData.doors}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={quoteData.doors}
                    onChange={(e) =>
                      setQuoteData({
                        ...quoteData,
                        doors: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alarm Zones: {quoteData.alarmZones}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    value={quoteData.alarmZones}
                    onChange={(e) =>
                      setQuoteData({
                        ...quoteData,
                        alarmZones: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={quoteData.monitoring}
                      onChange={(e) =>
                        setQuoteData({
                          ...quoteData,
                          monitoring: e.target.checked,
                        })
                      }
                      className="mr-3 h-4 w-4 text-primary"
                    />
                    <span className="font-medium">
                      24/7 Professional Monitoring (+$49/month)
                    </span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={quoteData.installation}
                      onChange={(e) =>
                        setQuoteData({
                          ...quoteData,
                          installation: e.target.checked,
                        })
                      }
                      className="mr-3 h-4 w-4 text-primary"
                    />
                    <span className="font-medium">
                      Professional Installation (+$299)
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Previous
                </Button>
                <Button onClick={() => setStep(3)}>
                  Calculate Quote
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Quote Summary */}
          {step === 3 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Your Custom Quote
              </h3>
              
              <div className="bg-primary-pale rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Equipment Cost:</span>
                    <span className="font-semibold">
                      ${pricing.equipment.toLocaleString()}
                    </span>
                  </div>
                  
                  {quoteData.monitoring && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly Monitoring:</span>
                      <span className="font-semibold">${pricing.monthly}/mo</span>
                    </div>
                  )}
                  
                  <div className="pt-3 border-t-2 border-primary flex justify-between text-xl">
                    <span className="font-bold text-primary">Total:</span>
                    <span className="font-bold text-primary">
                      ${pricing.total.toLocaleString()}
                      {quoteData.monitoring && ` + $${pricing.monthly}/mo`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">Your System Includes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {quoteData.cameras} HD Security Cameras</li>
                  {quoteData.doors > 0 && (
                    <li>• {quoteData.doors} Access Control Doors</li>
                  )}
                  {quoteData.alarmZones > 0 && (
                    <li>• {quoteData.alarmZones} Alarm Zones</li>
                  )}
                  {quoteData.monitoring && <li>• 24/7 Professional Monitoring</li>}
                  {quoteData.installation && <li>• Professional Installation</li>}
                </ul>
              </div>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(2)}>
                  Adjust Quote
                </Button>
                <Button>Contact Sales Team</Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}