import { Suspense } from 'react';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/project-db';
import { ProjectSearch } from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';

interface PageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

async function ProjectsContent({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || '';
  const page = Number(resolvedParams?.page) || 1;

  const projects = await fetchFilteredProjects(query, page);

  if (projects.length === 0) {
    return <p className="text-slate-500 text-sm mt-4">No se encontraron proyectos.</p>;
  }

  return (
    <div className="grid gap-4 mt-4">
      {projects.map((project: any) => (
        <div key={project.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">{project.title}</h3>
          <p className="text-slate-600 text-sm mt-1">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies?.map((tech: string) => (
              <span key={tech} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

async function PaginationWrapper({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || '';

  const totalPages = await fetchProjectsPages(query);
  return <Pagination totalPages={totalPages} />;
}

export default function ProjectsPage(props: PageProps) {
  const searchParams = props.searchParams || Promise.resolve({});

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Projects Overview</h2>
      
      <Suspense fallback={<div className="h-10 bg-slate-100 rounded-xl mb-6 animate-pulse" />}>
        <ProjectSearch />
      </Suspense>

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsContent searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={<div className="h-10 bg-slate-100 rounded-xl mt-6 animate-pulse" />}>
        <PaginationWrapper searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid gap-4 mt-4 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="h-6 bg-slate-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-slate-200 rounded w-4/5 mb-3"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-slate-200 rounded w-16"></div>
            <div className="h-6 bg-slate-200 rounded w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
}