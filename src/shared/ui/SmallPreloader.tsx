export default function Preloader() {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary">
      <div className="h-12 w-12 animate-spin rounded-md border-4 border-t-4 border-[var(--primary)]"></div>
    </div>
  );
}
