import SkillCard from '@/components/SkillCard';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        About Me
      </h1>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        Full-stack web development student focused on building robust applications using modern technologies, Next.js, and TypeScript.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard 
          skillName="Next.js & React" 
          category="Frontend / Fullstack" 
          proficiency="Advanced" 
        />
        <SkillCard 
          skillName="TypeScript" 
          category="Language" 
          proficiency="Proficient" 
        />
        <SkillCard 
          skillName="Tailwind CSS" 
          category="Styling" 
          proficiency="Advanced" 
        />
        <SkillCard 
          skillName="Node.js & Express" 
          category="Backend" 
          proficiency="Intermediate" 
        />
      </div>
    </main>
  );
}