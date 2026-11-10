import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/project-db';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    return NextResponse.json(
      { error: 'ID should be a number.' },
      { status: 400 }
    );
  }
  const project = getProjectById(numericId);

  if (!project) {
    return NextResponse.json(
      { error: 'Project not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}