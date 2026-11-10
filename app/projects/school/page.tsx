import { Project } from '@/lib/project-db';

async function getSchoolProjects(): Promise<Project[]> {
  const res = await fetch('http://localhost:3001/api/projects?type=school', { cache: 'no-store' });
  if (!res.ok) throw new Error('Error al cargar los proyectos escolares');
  return res.json();
}


export default async function SchoolPage() {
  const projects = await getSchoolProjects();

  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-4">School Projects</h3>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800">{project.title}</h4>
            <p className="text-slate-600 text-sm mt-1">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}