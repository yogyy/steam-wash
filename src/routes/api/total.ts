import { customer } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { createMiddleware, json } from "@tanstack/react-start";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { createFileRoute } from "@tanstack/react-router";

const customerId = "yogg_F8pXzR7t-Q2nWJvBcY_5";
const cacheKey = "customer:counter";

const adminOnlyMiddleware = createMiddleware().server(
  async ({ next, request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    return await next({
      context: { isAdmin: session?.user.role === "admin" },
    });
  },
);

export const Route = createFileRoute("/api/total")({
  server: {
    handlers: ({ createHandlers }) =>
      createHandlers({
        GET: async () => {
          try {
            const result = await db.query.customer.findFirst({
              where: eq(customer.id, customerId),
            });

            return json(result);
          } catch (err) {
            console.log(err);
            return json({ error: "Internal Server Error" }, { status: 500 });
          }
        },
        POST: {
          middleware: [adminOnlyMiddleware],
          handler: async ({ request }) => {
            try {
              const { total } = await request.json();
              await db
                .update(customer)
                .set({ total })
                .where(eq(customer.id, customerId))
                .returning();

              return json({ message: "total updated!" });
            } catch (err) {
              console.log(err);
              return json({ error: "Internal Server Error" }, { status: 500 });
            }
          },
        },
      }),
  },
});
