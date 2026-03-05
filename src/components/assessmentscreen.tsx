import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useAppContext } from '@/contexts/AppContext';
import { questions, scaleLabels, categoryMapping } from '@/data/questions';
import { AlertCircle } from 'lucide-react';

const AssessmentScreen: React.FC = () => {
  const { setCurrentStep, setScores, setAnswers: setContextAnswers } = useAppContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(36).fill(0));
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [showError, setShowError] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Load current answer when question changes
  useEffect(() => {
    setCurrentAnswer(answers[currentQuestion]?.toString() || '');
    setShowError(false);
  }, [currentQuestion, answers]);

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
    setShowError(false);
  };

  const handleNext = () => {
    if (!currentAnswer) {
      setShowError(true);
      return;
    }
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(currentAnswer);
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores and save to context
      const scores = calculateScores(newAnswers);
      setScores(scores);
      setContextAnswers(newAnswers);
      setCurrentStep('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScores = (answers: number[]) => {
    const fear = categoryMapping.fear.reduce((sum, index) => sum + answers[index], 0) / categoryMapping.fear.length;
    const assumptions = categoryMapping.assumptions.reduce((sum, index) => sum + answers[index], 0) / categoryMapping.assumptions.length;
    const technology = categoryMapping.technology.reduce((sum, index) => sum + answers[index], 0) / categoryMapping.technology.length;
    const environment = categoryMapping.environment.reduce((sum, index) => sum + answers[index], 0) / categoryMapping.environment.length;
    
    return {
      fear: Math.round(fear * 10) / 10,
      assumptions: Math.round(assumptions * 10) / 10,
      technology: Math.round(technology * 10) / 10,
      environment: Math.round(environment * 10) / 10
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl font-bold text-gray-900">
              Question {currentQuestion + 1} of {questions.length}
            </CardTitle>
            <span className="text-sm text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              {questions[currentQuestion]}
            </p>
          </div>
          
          {showError && (
            <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Please select an answer before continuing.</span>
            </div>
          )}
          
          <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange}>
            {scaleLabels.map((label, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value={(index + 1).toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-base cursor-pointer flex-1">
                  <span className="font-medium">{index + 1}.</span> {label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <div className="flex justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentScreen;
