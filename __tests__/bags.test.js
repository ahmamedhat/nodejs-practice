const app = require("../src/app");
const request = require("supertest");
const { mongoConnect, mongoDisconnect } = require("../src/services/mongo");

describe("Test GET /bags", () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  test("Should return all bags with 200 success", () => {
    const response = request(app).get("/bags").expect(200);
    return response;
  });

  test("Should return 404 not found if bag id not found", async () => {
    const response = await request(app).get("/bags/sf").expect(404);
    expect(response.body).toStrictEqual({
      error: "No bag was found",
    });
  });
});
