"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsConfig = {
    enabled: true,
    origin: true,
    methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"],
    headers: true,
    exposeHeaders: [
        "cache-control",
        "content-language",
        "content-type",
        "expires",
        "last-modified",
        "pragma",
    ],
    credentials: true,
    maxAge: 90,
};
exports.default = corsConfig;
//# sourceMappingURL=cors.js.map