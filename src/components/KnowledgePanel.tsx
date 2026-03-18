import React from 'react';

interface KnowledgePanelProps {
  isDark?: boolean;
}

export const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ isDark = false }) => {
  // No knowledge panel for "Terrell Jackson" search - no famous person with this exact name
  return null;
};
