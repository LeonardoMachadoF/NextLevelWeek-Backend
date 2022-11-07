import Fastify from "fastify";
import cors from '@fastify/cors';
import { routes } from "./routes";
import jwt from '@fastify/jwt'


async function bootsrap() {
    const fastify = Fastify({
        logger: true
    });

    await fastify.register(cors, {
        origin: true
    })

    await fastify.register(jwt, {
        secret: 'randomstring'
    })

    await fastify.register(routes);

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootsrap()