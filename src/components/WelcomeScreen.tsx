import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppContext } from '@/contexts/AppContext';
import { Clock, Brain, BarChart3 } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const { setCurrentStep, hasCompletedAssessment } = useAppContext();

  const handleGetStarted = () => setCurrentStep('assessment');
  const handleViewResults = () => setCurrentStep('results');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-xl border border-gray-200 bg-white">
        <CardHeader className="text-center pb-6 pt-10 px-8">

          <CardTitle className="text-4xl font-bold text-indigo-600 mb-6">
            Meaning Alignment Profile
          </CardTitle>

          <CardDescription className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover how closely your work, strengths, and motivations align with the life you want to build.
            This short assessment highlights areas where greater meaning and engagement may exist.
          </CardDescription>

          {/* Alignment Icons */}
          <div className="grid grid-cols-4 gap-6 mb-10 max-w-xl mx-auto">
            {[
              { color: 'from-blue-400 to-blue-600', emoji: '🎯', label: 'Purpose' },
              { color: 'from-purple-400 to-purple-600', emoji: '💡', label: 'Strengths' },
              { color: 'from-green-400 to-green-600', emoji: '🧭', label: 'Autonomy' },
              { color: 'from-orange-400 to-orange-600', emoji: '🌱', label: 'Growth' },
            ].map(({ color, emoji, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-2 shadow-md`}>
                  <span className="text-white text-2xl">{emoji}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            <div className="flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              <span className="font-medium text-sm">Takes just a few minutes</span>
            </div>

            <div className="flex items-center text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
              <Brain className="w-5 h-5 mr-2 text-purple-500" />
              <span className="font-medium text-sm">Reveals how aligned your work and meaning are</span>
            </div>
          </div>

        </CardHeader>

        <CardContent className="text-center pb-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 text-lg font-semibold rounded-lg shadow-md"
            >
              Take the Assessment
            </Button>

            {hasCompletedAssessment && (
              <Button 
                onClick={handleViewResults}
                variant="outline"
                size="lg"
                className="px-10 py-5 text-lg font-semibold rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View My Results
              </Button>
            )}

          </div>
        </CardContent>

      </Card>
    </div>
  );
};

export default WelcomeScreen;
