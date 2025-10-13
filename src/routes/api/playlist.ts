import { json } from "@tanstack/react-start";
import { playlistRecommendations as schema } from "@/lib/db/schema";
import { lt } from "drizzle-orm";
import { createFileRoute } from "@tanstack/react-router";
import { db } from "@/lib/db";

export const Route = createFileRoute("/api/playlist")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const before = request.url.split("?before=")[1];

        try {
          const playlist = await db.query.playlistRecommendations.findMany({
            orderBy: ({ createdAt }, { desc }) => [desc(createdAt)],
            where: before ? lt(schema.createdAt, new Date(before)) : undefined,
            limit: 30,
            with: { recommendedBy: { columns: { name: true, image: true } } },
          });

          return json({
            data: playlist,
            nextCursor: playlist.at(-1)?.createdAt ?? null,
          });
        } catch (err) {
          console.log(err);
          return json({ error: "Failed to fetch playlist" }, { status: 500 });
        }
      },
    },
  },
});
