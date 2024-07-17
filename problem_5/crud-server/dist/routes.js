"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createRouter = (prisma) => {
    const router = (0, express_1.Router)();
    // Create a resource
    router.post("/resource", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, value } = req.body;
        const resource = yield prisma.resource.create({
            data: { name, value },
        });
        res.status(201).json(resource);
    }));
    // List resources
    router.get("/resources", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const resources = yield prisma.resource.findMany();
        res.json(resources);
    }));
    // Get resource details
    router.get("/resource/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const resource = yield prisma.resource.findUnique({
            where: { id },
        });
        if (resource) {
            res.json(resource);
        }
        else {
            res.status(404).send("Resource not found");
        }
    }));
    // Update resource
    router.put("/resource/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, value } = req.body;
        const resource = yield prisma.resource.update({
            where: { id },
            data: { name, value },
        });
        res.json(resource);
    }));
    // Delete resource
    router.delete("/resource/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        yield prisma.resource.delete({
            where: { id },
        });
        res.status(204).send();
    }));
    return router;
};
exports.default = createRouter;
