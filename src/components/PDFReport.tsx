import React from 'react';
import { useAppContext } from '@/contexts/AppContext';

interface PDFReportProps {
  onGenerate: () => void;
}

const PDFReport: React.FC<PDFReportProps> = ({ onGenerate }) => {
  const { demographicData, scores } = useAppContext();

  if (!scores) return null;

  const scoreToPercentage = (score: number) => {
    return Math.round((score / 5) * 100);
  };

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 90) return 'All-Star';
    if (percentage >= 80) return 'Strong Curiosity';
    if (percentage >= 70) return 'Developing Curiosity';
    if (percentage >= 60) return 'Impacted Curiosity';
    return 'Concerning Curiosity';
  };

  const getScoreDescription = (percentage: number) => {
    if (percentage >= 90) return 'The scores are very high and indicate that you have done well to work on issues that impact your natural sense of curiosity.';
    if (percentage >= 80) return 'The scores are relatively high. Some slight adjustments could improve your level.';
    if (percentage >= 70) return 'The scores indicate some strengths. You could benefit from exercises to improve your level.';
    if (percentage >= 60) return 'The scores indicate several areas for improvement. Creating an action plan would be beneficial.';
    return 'The scores are lower, which indicates that development is needed. There are multiple opportunities to improve.';
  };

  const generatePDFContent = () => {
    const fearScore = scoreToPercentage(scores.fear);
    const assumptionsScore = scoreToPercentage(scores.assumptions);
    const technologyScore = scoreToPercentage(scores.technology);
    const environmentScore = scoreToPercentage(scores.environment);

    return `Curiosity Code Index\n\nResults for: ${demographicData.fullName}\nTest Complete Date: ${new Date().toLocaleDateString()}\n\nCongratulations on completing the Curiosity Code Index®! By engaging with this assessment, you've taken a significant first step toward understanding the diverse elements that shape your curiosity.`;
  };

  const handleDownload = () => {
    const content = generatePDFContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CCI-Report-${demographicData.fullName.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onGenerate();
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleDownload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate PDF Report
      </button>
    </div>
  );
};

export default PDFReport;