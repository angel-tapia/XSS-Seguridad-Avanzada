import { FastifyInstance } from "fastify";
import { push, ref } from "firebase/database";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnKru4zSHhtDhoeeXTlqgCPnWxDYGR33I",
  authDomain: "seguridad-av-tapia.firebaseapp.com",
  projectId: "seguridad-av-tapia",
  storageBucket: "seguridad-av-tapia.appspot.com",
  messagingSenderId: "115373302369",
  appId: "1:115373302369:web:191a336e31edf29edc8020",
  measurementId: "G-Z1HKFT9H07"
};

export const saveCookiesApp = async (instance: FastifyInstance) => {
  const contextRoute = "/save";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  instance.post(`${contextRoute}`, async (request, reply) => {
    const data = request.body as any;

    try {
      // Save the data to the database with "Cookies" as the key
      await push(ref(database, `${contextRoute}/Cookies`), data);
      reply.status(200).send({ message: "Cookies posted successfully" });
    } catch (error) {
      console.error("Error posting element: ", error);
      reply.status(500).send({ error: "Failed to post element" });
    }
  });
};