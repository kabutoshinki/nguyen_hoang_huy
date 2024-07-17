import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ResourceService } from "../resources/resources.service";
import { ResourcesController } from "../resources/resources.controller";
import { AppError } from "../utils/errors/errors";

const prisma = new PrismaClient();
const resourceService = new ResourceService(prisma);
const resourcesController = new ResourcesController(resourceService);

const router = Router();

// Create a resource
router.post("/", async (req, res, next) => {
  try {
    const resource = await resourcesController.createResource(req.body);
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
});

// List resources with filters
router.get("/", async (req, res, next) => {
  try {
    const { name: filterByName, value: filterByValue } = req.query;
    const resources = await resourcesController.getAllResources(filterByName as string, filterByValue as string);
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

// Get resource details
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await resourcesController.getResourceById(id);
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

// Update resource
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const resource = await resourcesController.updateResource(id, req.body);
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

// Delete resource
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedResource = await resourcesController.deleteResource(id);
    res.status(200).send(deletedResource);
  } catch (error) {
    next(error);
  }
});

export default router;
