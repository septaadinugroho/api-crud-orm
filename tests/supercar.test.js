import request from "supertest";
import app from "../src/app.js"; // TAMBAHIN .js di sini
import prisma from "../src/lib/prisma.js"; // Buat beresin koneksi DB
describe("Supercar API", () => {
    let createdId;
    // Cleanup & Closing connection
    afterAll(async () => {
        // Hapus data test biar gak nyampah di DB laptop lu
        if (createdId) {
            await prisma.supercar.deleteMany({
                where: { id: createdId },
            });
        }
        await prisma.$disconnect();
    });
    it("should create a new supercar", async () => {
        const res = await request(app).post("/api/supercars").send({
            name: "FXX-K",
            brand: "Esemka",
            year: 2014,
            // Pastiin field 'price' ada kalau di DB lu mewajibkan ada price
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        createdId = res.body.id;
    });
    it("should get all supercar", async () => {
        const res = await request(app).get("/api/supercars?page=1&limit=5");
        expect(res.statusCode).toBe(200);
        // Karena lu pake pagination, cek di dalam body.data
        expect(Array.isArray(res.body.data)).toBe(true);
    });
    it("should update supercar", async () => {
        // Pastiin createdId udah dapet dari test pertama
        const res = await request(app).put(`/api/supercars/${createdId}`).send({
            year: 2023,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.year).toBe(2023);
    });
    it("should delete supercar", async () => {
        const res = await request(app).delete(`/api/supercars/${createdId}`);
        expect(res.statusCode).toBe(200);
    });
    it("should return 404 if supercar not found", async () => {
        // Pake ID yang kira-kira gak bakal ada
        const res = await request(app).get("/api/supercars/999999");
        expect(res.statusCode).toBe(404);
    });
    it("should return 400 for invalid id", async () => {
        const res = await request(app).get("/api/supercars/abc");
        expect(res.statusCode).toBe(400);
    });
});
//# sourceMappingURL=supercar.test.js.map