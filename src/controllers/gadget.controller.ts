import { gadgetService } from "../services/gadget.service.js";
import type { Request, Response } from "express";

export const gadgetController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await gadgetService.getAll(req.query);
      res.json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Id must be a number" });
      }
      const data = await gadgetService.getById(id);
      res.json(data);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await gadgetService.create(req.body);
      res.status(201).json(data);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Id must be a number" });
      }
      const data = await gadgetService.update(id, req.body);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Id must be a number" });
      }
      await gadgetService.delete(id);
      res.json({ message: "Gadget deleted successfully" });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};
