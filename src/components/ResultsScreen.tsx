import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppContext } from '@/contexts/AppContext';
import { ExternalLink, RotateCcw } from 'lucide-react';

const ResultsScreen: React.FC = () => {
  const { scores, clearAssessmentData, setCurrentStep } = useAppContext();

  if (!scores) return null;

  // Convert score to percentage (5-point scale to percentage)
  const scoreToPercentage = (score: number) => {
    const percentage = (score / 5) * 100;
    return Math.round(percentage);
  };

  const getScoreInterpretation = (category: string, score: number) => {
    const percentage = scoreToPercentage(score);
    const interpretations = {
      fear: {
        high: "You show strong confidence in learning environments and aren't easily intimidated by others' knowledge.",
        medium: "You have moderate comfort with learning situations but may sometimes hesitate to engage.",
        low: "Fear may be significantly limiting your curiosity. Consider strategies to build confidence."
      },
      assumptions: {
        high: "You maintain an open mind and are willing to explore diverse topics and perspectives.",
        medium: "You have some openness to new ideas but may occasionally rely on past assumptions.",
        low: "Fixed assumptions may be limiting your curiosity. Practice intellectual humility."
      },
      technology: {
        high: "You embrace technology as a tool for learning and exploration.",
        medium: "You have a balanced relationship with technology but may sometimes feel overwhelmed.",
        low: "Technology resistance may be hindering your curiosity. Consider gradual adoption."
      },
      environment: {
        high: "You've experienced supportive environments that encourage curiosity and questioning.",
        medium: "Your environment has provided mixed support for curiosity.",
        low: "Environmental factors may be significantly constraining your curiosity."
      }
    };

    const level = percentage >= 70 ? 'high' : percentage >= 40 ? 'medium' : 'low';
    return interpretations[category as keyof typeof interpretations][level];
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 70) return 'bg-green-100 text-green-800';
    if (percentage >= 40) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getCardBorderColor = (index: number) => {
    const colors = [
      'border-l-4 border-l-blue-400 shadow-blue-100',
      'border-l-4 border-l-blue-600 shadow-blue-200',
      'border-l-4 border-l-blue-800 shadow-blue-300',
      'border-l-4 border-l-indigo-600 shadow-indigo-200'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="shadow-xl border-t-4 border-t-blue-500">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Your Curiosity Code Index® Results
            </CardTitle>
            <p className="text-lg text-gray-600">
              Here are your personalized FATE factor percentages
            </p>
            <p className="text-sm text-gray-500">
              Assessment completed on {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(scores).map(([category, score], index) => {
            const percentage = scoreToPercentage(score);
            return (
              <Card key={category} className={`shadow-lg ${getCardBorderColor(index)} bg-gradient-to-br from-white to-blue-50`}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl capitalize text-blue-900">{category}</CardTitle>
                    <Badge className={getScoreColor(percentage)}>
                      {percentage}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {getScoreInterpretation(category, score)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get Your Complete Curiosity Code Index® Report
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is a simplified version of the Curiosity Code Index®. For a complete report with detailed strategies to overcome the factors that have inhibited your curiosity, take the full assessment.
            </p>
            <p className="text-blue-700 font-medium mb-6">
              Learn why the Curiosity Code Index® is used by top HR teams, educators, and leaders in organizations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://curiositycode.com', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 h-auto text-sm sm:text-base leading-tight"
              >
                <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-center">
                  Take the Complete<br className="sm:hidden" /> Curiosity Code Index®
                </span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  clearAssessmentData();
                  setCurrentStep('welcome');
                }}
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Take Assessment Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsScreen;