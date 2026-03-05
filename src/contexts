import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  currentStep: 'welcome' | 'assessment' | 'results';
  setCurrentStep: (step: 'welcome' | 'assessment' | 'results') => void;
  answers: number[];
  setAnswers: (answers: number[]) => void;
  scores: { fear: number; assumptions: number; technology: number; environment: number } | null;
  setScores: (scores: { fear: number; assumptions: number; technology: number; environment: number }) => void;
  hasCompletedAssessment: boolean;
  clearAssessmentData: () => void;
}

const defaultAppContext: AppContextType = {
  currentStep: 'welcome',
  setCurrentStep: () => {},
  answers: [],
  setAnswers: () => {},
  scores: null,
  setScores: () => {},
  hasCompletedAssessment: false,
  clearAssessmentData: () => {}
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'assessment' | 'results'>('welcome');
  const [answers, setAnswers] = useState<number[]>([]);
  const [scores, setScores] = useState<{ fear: number; assumptions: number; technology: number; environment: number } | null>(null);
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('curiosityCodeData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.scores) setScores(parsed.scores);
        if (parsed.hasCompletedAssessment) {
          setHasCompletedAssessment(true);
          setCurrentStep('results');
        }
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const dataToSave = {
      answers,
      scores,
      hasCompletedAssessment
    };
    localStorage.setItem('curiosityCodeData', JSON.stringify(dataToSave));
  }, [answers, scores, hasCompletedAssessment]);

  // Update completion status when scores are set
  useEffect(() => {
    if (scores && answers.length > 0) {
      setHasCompletedAssessment(true);
    }
  }, [scores, answers]);

  const clearAssessmentData = () => {
    setAnswers([]);
    setScores(null);
    setHasCompletedAssessment(false);
    setCurrentStep('welcome');
    localStorage.removeItem('curiosityCodeData');
  };

  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        answers,
        setAnswers,
        scores,
        setScores,
        hasCompletedAssessment,
        clearAssessmentData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
