import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import WelcomeScreen from './WelcomeScreen';
import AssessmentScreen from './AssessmentScreen';
import ResultsScreen from './ResultsScreen';

const AppLayout: React.FC = () => {
  const { currentStep } = useAppContext();

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'assessment':
        return <AssessmentScreen />;
      case 'results':
        return <ResultsScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentStep()}
    </div>
  );
};

export default AppLayout;
