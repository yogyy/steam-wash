import type { ReactNode } from "react";

export function NotFound({ children }: { children?: ReactNode }) {
  return (
    <main className="flex h-svh w-svw items-center justify-center">
      <div className="space-y-1 p-2">
        <button
          onClick={() => window.history.back()}
          className="text-destructive hover:bg-destructive/40 group flex cursor-pointer gap-2 rounded-2xl px-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-primary group-hover:-rotate-6"
          >
            <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
          </svg>
          <span>go back?</span>
        </button>
        <div className="text-foreground/80 relative flex flex-col items-center">
          <p className="text-8xl font-bold">404</p>{" "}
          <h1 className="text-4xl font-semibold">PAGE NOT FOUND</h1>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          {children || <p>The page you are looking for does not exist.</p>}
        </div>
      </div>
    </main>
  );
}
