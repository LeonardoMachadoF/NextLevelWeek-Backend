import { FastifyInstance } from "fastify";
import { guessesRoutes } from "./guessesRoutes";
import { poolsRoutes } from "./poolsRoutes";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { gameRoutes } from "./gameRoutes";

export const routes = async (fastify: FastifyInstance) => {
    userRoutes(fastify);
    poolsRoutes(fastify);
    guessesRoutes(fastify);
    authRoutes(fastify);
    gameRoutes(fastify);
}