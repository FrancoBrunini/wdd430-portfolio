import Image from "next/image";
import ProjectList from '@/components/ProjectList';
import Link from 'next/link';

const projects = [
  {
    title: 'Full Fitness',
    description: 'An e-commerce platform for gym equipment, accessories, and nutritional supplements featuring dynamic product catalog filtering, interactive cart management, and secure user authentication.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API Routes'],
    link: 'https://github.com/franco-brunini/full-fitness'
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack management dashboard built with Next.js App Router for tracking inventory, handling dynamic API endpoints, and optimizing state rendering for performance.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/franco-brunini/ecommerce-dashboard'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-6 text-center transition-all duration-300 hover:shadow-2xl">

        <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden shadow-inner">
          <Image
            src="/example.png"
            alt="Práctica de Tailwind CSS y Next.js"
            width={500}
            height={300}
            priority
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
          Tailwind CSS Practice
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Tailwind CSS its a framework that allows you to create beautiful and responsive designs with ease. This project showcases the power of Tailwind CSS in building modern web applications.
        </p>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg">
          navigate to the project
        </button>

        <Link 
          href="/about" 
          className="w-full block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          More information 
        </Link>
      </div>
    </main>
  );
}