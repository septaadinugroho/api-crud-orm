import type { Request, Response } from "express";
import { supercarService } from "../services/supercar.service.js";

export const supercarController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await supercarService.getAll(req.query);
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
      const data = await supercarService.getById(id);
      res.json(data);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data = await supercarService.create(req.body);
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
      console.log(req.body, typeof req.body.year);
      const data = await supercarService.update(id, req.body);
      res.json(data);
    } catch (error: any) {
      console.log("UPDATE ERROR:", error);
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Id must be a number" });
      }
      await supercarService.delete(id);
      res.json({ message: "supercar deleted successfully" });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};
