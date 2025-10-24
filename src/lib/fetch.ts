import { createServerFn } from "@tanstack/react-start";
import z4 from "zod/v4";
import { playlistRecommendations } from "./db/schema";
import { db } from "./db";
import { nanoid } from "nanoid";
import { setResponseStatus } from "@tanstack/react-start/server";

export const getTotalCustomer = createServerFn({ method: "GET" }).handler(
  async () => await db.query.customer.findFirst(),
);

const newSongSchema = z4.object({
  userId: z4.string(),
  songTitle: z4.string(),
  songLink: z4.string().optional(),
});

export const addSong = createServerFn({
  method: "POST",
})
  .inputValidator((song: unknown) => newSongSchema.parse(song))
  .handler(async ({ data }) => {
    try {
      const [playlist] = await db
        .insert(playlistRecommendations)
        .values({
          id: nanoid(),
          ...data,
        })
        .returning();
      setResponseStatus(201);
      return { playlist };
    } catch (err) {
      console.error(err);
      setResponseStatus(500);
      return { error: "Failed to create playlist" };
    }
  });
