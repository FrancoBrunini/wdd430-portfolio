import Link from 'next/link';

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-100 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden p-6">

                <header className="border-b border-slate-200 pb-4 mb-6">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Panel de Proyectos</h2>
                    <nav className="flex gap-6">
                        <Link
                            href="/projects/opensource"
                            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                        >
                            Open Source Projects
                        </Link>
                        <Link
                            href="/projects/school"
                            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                        >
                            School Projects
                        </Link>
                        
                    </nav>
                </header>

                <main>
                    {children}
                </main>

            </div>
        </div>
    );}