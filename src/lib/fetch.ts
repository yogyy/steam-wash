interface ResponseTotal {
  id: string;
  total: number;
}

interface ResponsePlaylist {
  id: string;
  userId: string;
  songTitle: string;
  songLink?: string;
  createdAt: string;
  recommendedBy: {
    name: string;
    image: string;
  };
}

export const localURL = "http://127.0.0.1:8787";
export const prodURL = "https://steam-be.yogyy.workers.dev";

export const fetchTotalCustomer = async (): Promise<ResponseTotal> => {
  const response = await fetch(`${prodURL}/api/total`);
  return await response.json();
};

export const fetchSession = async (): Promise<ResponseTotal> => {
  const response = await fetch(`${prodURL}/api/auth/get-session`, {
    credentials: "include",
  });
  return await response.json();
};

export const fetchRecommendationSongs = async (): Promise<
  ResponsePlaylist[]
> => {
  const response = await fetch(`${prodURL}/api/playlist`);
  return await response.json();
};

interface SongRecommendation {
  songTitle: string;
  songLink?: string;
}

export const addSongTitle = async (newSong: SongRecommendation) => {
  const res = await fetch(`${prodURL}/api/playlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSong),
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
};
