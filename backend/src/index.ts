import Fastify from "fastify";
import cors from "@fastify/cors";
import { contactRoutes } from "./contactRoute";
import { ensureSchema } from "./db";

async function buildServer() {
  const app = Fastify({
    logger: true
  });

  await app.register(cors, {
    origin: true
  });

  app.get("/health", async () => ({ status: "ok" }));

  await app.register(contactRoutes);

  await ensureSchema();

  return app;
}

async function start() {
  try {
    const app = await buildServer();
    const port = Number(process.env.PORT ?? 4000);
    const host = "0.0.0.0";

    await app.listen({ port, host });
    app.log.info(`Backend listening on http://${host}:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();

