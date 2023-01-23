const app = require("../src/app");
const request = require("supertest");

describe("Test GET /bags", () => {
  test("Should return all bags with 200 success", () => {
    const response = request(app).get("/bags").expect(200);
  });

  test("Should return 404 not found if bag id not found", async () => {
    const response = await request(app).get("/bags/sf").expect(404);
    expect(response.body).toStrictEqual({
      error: "No bag was found",
    });
  });
});
