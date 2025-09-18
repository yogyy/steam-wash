import { createAuthClient } from "better-auth/react";
import { prodURL } from "./fetch";
export const authClient = createAuthClient({
  baseURL: prodURL,
  fetchOptions: {
    credentials: "include",
  },
});
