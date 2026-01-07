import { ThemeProvider } from "@/components/theme-provider";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NotFound } from "@/components/NotFound";
import type { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  notFoundComponent: () => <NotFound />,
  component: RootDocument,
});

function RootDocument() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="steam_site-theme">
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
