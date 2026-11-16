export default function Loading() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-4">Open School Projects</h3>
      <div className="grid gap-4 animate-pulse">
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
    </div>
  );
}