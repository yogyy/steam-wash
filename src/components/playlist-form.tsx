import { SendHorizonal } from "lucide-react";
import { Input } from "./ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { authClient, useSession } from "@/lib/auth-client";
import { addSong } from "@/lib/fetch";

export const AddRecommendationForm = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const { mutate } = useMutation({
    mutationFn: addSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlist"] });
    },
    onError: (err) => {
      alert("error bosku, check console");
      console.error(err);
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // TODO: add toast if not session

    mutate({
      data: {
        songTitle: formData.get("title"),
        songLink: formData.get("link"),
        userId: session?.user.id,
      },
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
