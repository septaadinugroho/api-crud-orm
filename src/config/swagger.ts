import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Supercar API",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3000" }],
    paths: {
      "/api/supercars": {
        get: {
          summary: "Get all supercars",
          tags: ["Supercars"],
          responses: { 200: { description: "Success" } },
        },
        post: {
          summary: "Create supercar",
          tags: ["Supercars"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    brand: { type: "string" },
                    year: { type: "integer" },
                  },
                },
              },
            },
          },
          responses: { 201: { description: "Created" } },
        },
      },
      "/api/supercars/{id}": {
        get: {
          summary: "Get by ID",
          tags: ["Supercars"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Success" } },
        },
        put: {
          summary: "Update supercar",
          tags: ["Supercars"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          // INI YANG TADI KURANG:
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string", example: "Aventador SVJ" },
                    brand: { type: "string", example: "Lamborghini" },
                    year: { type: "integer", example: 2024 },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Updated successfully" },
            400: { description: "Validation Error" },
          },
        },
        delete: {
          summary: "Delete supercar",
          tags: ["Supercars"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Deleted" } },
        },
      },
    },
  },
  apis: [],
});
