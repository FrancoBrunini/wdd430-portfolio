import { Suspense } from 'react';
import { getProjects } from '@/lib/project-db';

async function SchoolProjectsList() {
  const projects = await getProjects('school');

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-slate-50 p-4 rounded-xl border border-slate-200"
        >
          <h4 className="text-lg font-semibold text-slate-800">
            {project.title}
          </h4>
          <p className="text-slate-600 text-sm mt-1">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SchoolPage() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-4">
        School Projects
      </h3>
      <Suspense fallback={<p className="text-slate-500 text-sm">Loading school projects...</p>}>
        <SchoolProjectsList />
      </Suspense>
    </div>
  );
}