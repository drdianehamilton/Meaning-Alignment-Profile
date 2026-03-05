export const generateDetailedReport = (demographicData: any, scores: any) => {
  const scoreToPercentage = (score: number) => Math.round((score / 5) * 100);
  
  const fearScore = scoreToPercentage(scores.fear);
  const assumptionsScore = scoreToPercentage(scores.assumptions);
  const technologyScore = scoreToPercentage(scores.technology);
  const environmentScore = scoreToPercentage(scores.environment);

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

  return `CURIOSITY CODE INDEX

Results for: ${demographicData.fullName}
Test Complete Date: ${new Date().toLocaleDateString()}

Congratulations on completing the Curiosity Code Index®! By engaging with this assessment, you've taken a significant first step toward understanding the diverse elements that shape your curiosity. This report is designed to serve as your compass, guiding you through exploring these influences.

Curiosity, a vital spark of our existence, enriches all facets of our lives. It's the driving force that leads us to unmask the unknown, propelling us towards new horizons that bring joy, invigorate our spirits, and open doors to endless possibilities. Whether in the comfort of our homes or the dynamics of our workplaces, embracing curiosity can lead to profound transformations.

However, it's not uncommon to encounter barriers that dampen our curious spirit. Recognizing and addressing these obstacles is a vital part of our journey. This report delves into what might be holding you back from fully engaging with your curiosity. Is it fear, assumptions, the rapid pace of technology, or perhaps the environment around you? By identifying these inhibitors, we can begin dismantling them, paving the way for a resurgence of curiosity in your life.

As you proceed through this exploration, remember that curiosity is not just about seeking new information; it's about embracing a mindset that welcomes growth, change, and the joy of discovery. It challenges us to look beyond the familiar, to question the status quo, and to dream about what could be. By fostering this mindset, you'll find that curiosity makes us happier and energizes us, creating new opportunities for learning, innovation, and experiences that enrich our personal and professional lives.

---

UNDERSTANDING THE CCI

This report is packed with valuable insights tailored to your curiosity journey. After completing the CCI, it provides a detailed look at how the four FATE factors—fear, assumptions, technology, and environment—play a role in shaping your curiosity.

Here's how to navigate and make the most out of the information provided:
• Initial Overview: The report kicks off with your FATE scores, breaking down what the percentages imply about your curiosity levels.
• In-Depth Analysis: For each FATE factor, you'll find a comprehensive review detailing its influence on your curiosity, alongside strategies for improvement.
• Actionable Planning: An action plan template is included as a guide to creating your personalized plan, aimed at addressing areas needing improvement based on your lower scores.
• Concluding Resources: The report wraps up with a summary, contact details for further support, and a section dedicated to frequently asked questions.

By carefully reviewing each section and engaging with the recommended activities, you'll be well-equipped to foster your curiosity and overcome any obstacles identified through the CCI.

---

YOUR FATE RESULTS

Welcome to your Curiosity Code Index results! The graphic below illustrates your scores across four key factors that can inhibit curiosity. Each score is listed under the corresponding area of Fear, Assumptions, Technology, and Environment, offering insight into areas where you may face challenges in nurturing curiosity.

Your Scores:
Fear: ${fearScore}%
Assumptions: ${assumptionsScore}%
Technology: ${technologyScore}%
Environment: ${environmentScore}%

Score Interpretations:
90-100: All-Star - ${getScoreDescription(95)}
80-89: Strong Curiosity - ${getScoreDescription(85)}
70-79: Developing Curiosity - ${getScoreDescription(75)}
60-69: Impacted Curiosity - ${getScoreDescription(65)}
59 and below: Concerning Curiosity - ${getScoreDescription(50)}

When examining your scores, focus on the areas that need improvement. Higher scores indicate better outcomes, while lower scores represent areas that need improvement. For areas that need improvement, consult the corresponding sections in this report for guidance on enhancing those aspects.

---

FEAR ANALYSIS

Interpreting Your Results: Score ${fearScore}%
${getScoreLevel(fearScore)}: ${getScoreDescription(fearScore)}

We often shy away from doing certain things because we're afraid of looking silly or concerned that our interests don't align with what's considered acceptable. The thought of failing is a big worry for many of us. Sticking to what we know and repeating the same actions can seem safer because it's familiar.

Overcoming fear is crucial for personal and professional growth, particularly in the workplace, where fears can manifest as barriers to curiosity and hinder progress. Recognizing and addressing these fears is the first step towards unlocking our full potential and fostering a culture of curiosity and innovation.

---

ASSUMPTIONS ANALYSIS

Interpreting Your Results: Score ${assumptionsScore}%
${getScoreLevel(assumptionsScore)}: ${getScoreDescription(assumptionsScore)}

Assumptions shape how we see the world, often based on our past experiences and what we've been taught to believe. Many people hesitate to make big decisions because they fear the unknown and worry about what could go wrong.

Overcoming assumptions is pivotal in fostering curiosity and embracing new experiences. Our preconceived notions about our preferences can often limit our exploration and hinder personal growth. By challenging these assumptions, we open ourselves to a world of possibilities.

---

TECHNOLOGY ANALYSIS

Interpreting Your Results: Score ${technologyScore}%
${getScoreLevel(technologyScore)}: ${getScoreDescription(technologyScore)}

The widespread use of technology has led some to lose interest in understanding how it works as devices and software increasingly automate our daily tasks. This reliance on technology can foster a sense of dependence and even fear of engaging deeply with digital tools.

Overcoming barriers to embracing technology is essential in today's rapidly evolving digital landscape. Often, reluctance stems from misconceptions about the necessity, foundation, awareness, and adaptability required to engage with technology effectively.

---

ENVIRONMENT ANALYSIS

Interpreting Your Results: Score ${environmentScore}%
${getScoreLevel(environmentScore)}: ${getScoreDescription(environmentScore)}

Our environment plays a crucial role in shaping our behavior and choices. Influences from family, teachers, friends, and even social media can set limits on our actions and desires, often nudging us toward what's commonly accepted rather than what truly interests us.

Overcoming barriers to fostering curiosity in the environment, whether in educational settings or professional workplaces, is crucial for creating a culture that values exploration, inquiry, and innovation.

---

SUMMARY

Curiosity is an innate trait and a powerful catalyst for innovation, adaptability, and continuous improvement. Curiosity drives us to challenge the status quo, seek new knowledge, and explore uncharted territories.

In conclusion, the journey to fostering a culture of curiosity is ongoing and ever-evolving. It requires commitment, leadership, and a willingness to embrace change. By prioritizing curiosity, you invest in a brighter, more innovative future for you and your organization.

For more detailed strategies and a complete report, visit curiositycode.com to take the full Curiosity Code Index assessment.

---

CONTACT INFORMATION

For further questions or support, contact Dr. Diane Hamilton at info@drdianehamilton.com
Follow @drdianehamilton on LinkedIn, Facebook, and Twitter
Learn more at https://curiositycode.com`;
};
