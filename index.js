const { createServer } = require("http");
const { default: AdonisServer } = require("@adonisjs/core/build/standalone");

const server = new AdonisServer().httpServer;

createServer(server.handle.bind(server)).listen();
