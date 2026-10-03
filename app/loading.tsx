export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <img
          src="/icon-512.png"
          alt="BlockHub"
          className="h-28 w-28 rounded-3xl object-contain"
        />

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
          BlockHub
        </h1>

        <p className="mt-2 text-sm font-medium text-slate-500">
          Learn. Build. Grow.
        </p>

        <div className="mt-8 h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-slate-900" />
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Loading your learning hub...
        </p>
      </div>
    </div>
  );
}