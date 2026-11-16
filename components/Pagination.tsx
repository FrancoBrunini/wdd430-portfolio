'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <Link
        href={createPageURL(currentPage - 1)}
        className={`px-4 py-2 text-sm font-medium border rounded-lg ${
          currentPage <= 1
            ? 'pointer-events-none opacity-50 bg-slate-100 text-slate-400'
            : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
        }`}
      >
        Anterior
      </Link>
      
      <span className="text-sm text-slate-600">
        Página {currentPage} de {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        className={`px-4 py-2 text-sm font-medium border rounded-lg ${
          currentPage >= totalPages
            ? 'pointer-events-none opacity-50 bg-slate-100 text-slate-400'
            : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
        }`}
      >
        Siguiente
      </Link>
    </div>
  );
}