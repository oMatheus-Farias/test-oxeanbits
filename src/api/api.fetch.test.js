const request = require("supertest");

it("should return 200", async () => {
  const response = await request("https://fakestoreapi.com").get("/products");

  expect(response.status).toBe(200);
});
