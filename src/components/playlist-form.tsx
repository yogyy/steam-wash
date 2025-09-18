import { SendHorizonal } from "lucide-react";
import { Input } from "./ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSongTitle } from "@/lib/fetch";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";

export const AddRecommendationForm = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addSongTitle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlist"] });
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutate({
      songTitle: formData.get("title") as string,
      songLink: formData.get("link") as string,
    });

    e.currentTarget.reset(); // optional: clear form
  };

  return (
    <form
      className="flex w-full max-w-lg items-center gap-3"
      onSubmit={handleSubmit}
    >
      <div className="bg-secondary w-full">
        <Input
          type="text"
          name="title"
          placeholder="Bohemian Rhapsody"
          required
          className="h-6 rounded-br-none rounded-bl-none border-b-0"
        />
        <Input
          type="text"
          name="link"
          placeholder="https://.."
          onClick={() => authClient.signOut()}
          className="h-6 rounded-tl-none rounded-tr-none border-t-0"
        />
      </div>
      <Button
        size="default"
        className="h-10 w-10 cursor-pointer rounded-full bg-green-600 hover:bg-green-700"
      >
        <SendHorizonal className="size-4 -rotate-12" />
      </Button>
    </form>
  );
};
