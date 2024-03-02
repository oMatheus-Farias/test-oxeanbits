const request = require("supertest");

it("should return 200", async () => {
  const response = await request("https://fakestoreapi.com").get("/products");

  expect(response.status).toBe(200);
});

it("should check data used from the API", async () => {
  const response = await request("https://fakestoreapi.com").get("/products");

  expect(response.body[0].title).toBeDefined();
  expect(response.body[0].price).toBeDefined();
  expect(response.body[0].rating).toBeDefined();
});
