import { PrismaClient, Resource } from "@prisma/client";
import { InternalError, NotFoundError, ValidationError } from "../utils/errors/errors";

interface ResourceInput {
  name: string;
  value: string;
}

export class ResourceService {
  constructor(private prisma: PrismaClient) {}

  getAllResources = async (filterByName?: string, filterByValue?: string): Promise<Resource[]> => {
    try {
      let whereClause: any = {};

      if (filterByName) {
        whereClause.name = {
          contains: filterByName,
          mode: "insensitive",
        };
      }

      if (filterByValue) {
        whereClause.value = {
          contains: filterByValue,
          mode: "insensitive",
        };
      }

      return await this.prisma.resource.findMany({
        where: whereClause,
      });
    } catch (error) {
      throw new InternalError(`Error fetching resources: ${error}`);
    }
  };

  getResourceById = async (id: string): Promise<Resource | null> => {
    const resource = await this.prisma.resource.findUnique({
      where: { id },
    });
    if (!resource) {
      throw new NotFoundError("Resource not found");
    }
    try {
      return resource;
    } catch (error) {
      throw new InternalError(`Error fetching resource by ID: ${error}`);
    }
  };

  createResource = async (data: ResourceInput): Promise<Resource> => {
    try {
      const { name, value } = data;
      return await this.prisma.resource.create({
        data: { name, value },
      });
    } catch (error) {
      throw new ValidationError(`Error creating resource: ${error}`);
    }
  };

  updateResource = async (id: string, data: ResourceInput): Promise<Resource | null> => {
    await this.getResourceById(id);
    try {
      const { name, value } = data;
      return await this.prisma.resource.update({
        where: { id },
        data: { name, value },
      });
    } catch (error) {
      throw new InternalError(`Error updating resource: ${error}`);
    }
  };

  deleteResource = async (id: string): Promise<string> => {
    await this.getResourceById(id);

    try {
      await this.prisma.resource.delete({
        where: { id },
      });

      return "Resource deleted successfully";
    } catch (error) {
      throw new InternalError(`Error deleting resource: ${error}`);
    }
  };
}
