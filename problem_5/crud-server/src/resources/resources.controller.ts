import { Resource } from "@prisma/client";
import { ResourceService } from "./resources.service";
export class ResourcesController {
  constructor(private readonly resource: ResourceService) {}

  getAllResources = async (filterByName?: string, filterByValue?: string): Promise<Resource[]> => {
    return this.resource.getAllResources(filterByName, filterByValue);
  };

  getResourceById = async (id: string): Promise<Resource | null> => {
    return this.resource.getResourceById(id);
  };

  createResource = async (data: Resource): Promise<Resource> => {
    return this.resource.createResource(data);
  };

  updateResource = async (id: string, data: Resource): Promise<Resource | null> => {
    return this.resource.updateResource(id, data);
  };

  deleteResource = async (id: string): Promise<Resource | string> => {
    return this.resource.deleteResource(id);
  };
}
