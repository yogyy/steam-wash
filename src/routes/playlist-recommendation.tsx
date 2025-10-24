import { SimpleIconsGoolge } from "@/components/icons/simple-icon";
import { Messages } from "@/components/messages";
import { AddRecommendationForm } from "@/components/playlist-form";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playlist-recommendation")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = authClient.useSession();

  return (
    <main className="bg-secondary relative mx-auto flex h-svh w-full flex-col items-center justify-center overflow-hidden bg-[url(/pattern.png)] bg-contain bg-fixed bg-repeat">
      <Messages />
      <div className="w-full max-w-xl px-2 py-2">
        {session ? (
          <AddRecommendationForm />
        ) : (
          <Button
            className="hover:text-accent-foreground h-10 w-full cursor-pointer gap-2 rounded-md border border-neutral-700 bg-white/5 whitespace-nowrap text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg md:h-14 md:text-lg [&_svg]:shrink-0"
            onClick={() =>
              authClient.signIn.social({
                provider: "google",
                callbackURL: "/playlist-recommendation",
              })
            }
          >
            Continue with
            <SimpleIconsGoolge />
          </Button>
        )}
      </div>
    </main>
  );
}
