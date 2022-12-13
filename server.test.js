const server = require("./server")
const supertest = require("supertest")
const request = supertest(server)

describe("/test endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello DevOps from Nikita Hryshaienko")
    })
})