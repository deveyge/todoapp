export default function Preloader() {
  return (
    <div className="absolute left-0 top-0 z-50 flex min-h-screen min-w-[100%] items-center justify-center bg-secondary">
      <div className="h-12 w-12 animate-spin rounded-md border-4 border-t-4 border-[var(--primary)]"></div>
    </div>
  );
}
