import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/project-db'; 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  const filteredProjects = getProjects(type);

  return NextResponse.json(filteredProjects);
}