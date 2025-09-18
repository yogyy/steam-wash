import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ScrollArea } from "./ui/scroll-area";
import { authClient } from "@/lib/auth-client";
import { prodURL } from "@/lib/fetch";

export function Messages() {
  const lastMsgRef = useRef<HTMLDivElement | null>(null);
  const { data: session } = authClient.useSession();

  const { data, isLoading } = useInfiniteQuery({
    queryKey: ["playlist"],
    queryFn: async ({ pageParam }) => {
      const res = await fetch(
        `${prodURL}/api/playlist?before=${pageParam || ""}`,
      );
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    initialPageParam: undefined,
  });

  useEffect(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  const recommendations = data?.pages.flatMap((p) => p.data) ?? [];
  return (
    <ScrollArea className="relative h-11/12 w-full max-w-xl pr-0.5 md:pr-0">
      {isLoading ? (
        <ChatSkeleton />
      ) : (
        <div className="relative flex max-w-lg flex-col-reverse gap-1.5 px-2">
          <div ref={lastMsgRef}></div>
          {recommendations?.map((rec) => (
            <div
              className={cn(
                "relative flex items-center gap-2 py-2 pr-3 pl-2",
                session?.user.id === rec.userId
                  ? "max-w-[80%] self-end rounded-2xl rounded-tr-sm bg-green-700"
                  : "bg-background/40 w-fit break-after-all rounded-2xl rounded-tl-sm",
              )}
              key={rec.id}
            >
              <div className="flex items-start gap-2">
                {session?.user.id !== rec.userId && (
                  <img
                    src={rec.recommendedBy.image}
                    alt={rec.recommendedBy.name + " picture"}
                    width={40}
                    height={40}
                    draggable={false}
                    className="aspect-square h-6 w-6 rounded-full object-cover"
                  />
                )}
                <div className="flex flex-col">
                  {session?.user.id !== rec.userId && (
                    <p className="font-semibold">{rec.recommendedBy.name}</p>
                  )}
                  <span className="text-sm">{rec.songTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </ScrollArea>
  );
}

function ChatSkeleton() {
  return (
    <div className="relative flex max-w-lg flex-col-reverse gap-1.5 px-2">
      {/* Generate 3-5 skeleton messages */}
      {Array.from({ length: 14 }).map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "relative flex items-center gap-2 py-2 pr-3 pl-2",
            idx % 2 === 0
              ? "max-w-[80%] self-end rounded-2xl rounded-tr-sm bg-green-700"
              : "bg-background/40 w-fit rounded-2xl rounded-tl-sm",
          )}
        >
          <div className="flex items-start gap-2">
            {idx % 2 !== 0 && (
              <Skeleton className="aspect-square h-6 w-6 rounded-full" />
            )}
            <div className="flex flex-col gap-1">
              {idx % 2 !== 0 && (
                <Skeleton className="bg-foreground/50 h-4 w-20" />
              )}
              <Skeleton
                className={cn(
                  "bg-foreground/50 h-4",
                  idx % 3 === 0 ? "w-24" : idx % 3 === 1 ? "w-40" : "w-28",
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
