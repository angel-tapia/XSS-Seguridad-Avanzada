import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { saveCookiesApp } from "./src/database/saveCookies";

const app: FastifyInstance = Fastify({ logger: false });

app.register(cors, { origin: "*" });

app.get("/", async (req, res) => {
  return { hello: "world" };
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

app.register(saveCookiesApp);

