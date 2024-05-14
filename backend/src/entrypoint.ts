import Fastify from "fastify";

const app = Fastify({ logger: false });

app.get("/", async (req, res) => {
  return { hello: "world" };
});
