import React from 'react';

interface SkillCardProps {
  skillName: string;
  category: string;
  proficiency: string;
}

export default function SkillCard({ skillName, category, proficiency }: SkillCardProps) {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skillName}</h3>
        <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full">
          {proficiency}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Category: <span className="font-medium text-gray-800 dark:text-gray-200">{category}</span>
      </p>
    </div>
  );
}