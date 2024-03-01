import { expect } from "chai";
import request from "supertest";
import app from "../src/index";

const api = request(app);

const API_BASE_URL = "/api/v1";

const mockLines = {
  line1: {
    name: "first",
    stations: ["london", "hampsure", "birmingham"],
    fare: 0.5,
  },

  line2: {
    name: "second",
    stations: ["chelsea", "london", "southampton"],
    fare: 0.7,
  },

  line3: {
    name: "third",
    stations: ["birmingham", "sheffield", "leeds", "middlesbrough"],
    fare: 0.6,
  },

  line4: {
    name: "forth",
    stations: ["liverpool", "leeds", "sheffield", "nottingham"],
    fare: 0.4,
  },

  line5: {
    name: "fifth",
    stations: ["buxton", "doncaster", "goole"],
    fare: 0.3,
  },
};

describe("Create trainlines and Detect route between stations", () => {
  it("Should respond with OK for health check", async () => {
    const response = await api.get("/health");
    expect(response.status).to.equal(200);
    expect(response.text).to.equal("OK");
  });

  it("Should create five train lines", async () => {
    await api.post(`${API_BASE_URL}/train-line`).send(mockLines["line1"]);
    await api.post(`${API_BASE_URL}/train-line`).send(mockLines["line2"]);
    await api.post(`${API_BASE_URL}/train-line`).send(mockLines["line3"]);
    await api.post(`${API_BASE_URL}/train-line`).send(mockLines["line4"]);
    await api.post(`${API_BASE_URL}/train-line`).send(mockLines["line5"]);

    const response = await api.get("/api/v1/train-line");
    const data = response.body;

    expect(data.length).to.equal(5);
  });

  it("Should detect route between stations", async () => {
    const response = await api
      .get("/api/v1/route")
      .query({ origin: "london", destination: "liverpool" });
    const data = response.body;

    expect(data.route.length).to.equal(6);
    expect(data.route).to.deep.equal([
      "london",
      "hampsure",
      "birmingham",
      "sheffield",
      "leeds",
      "liverpool",
    ]);
  });

  it("Shouldn't detect route between stations", async () => {
    const response = await api
      .get("/api/v1/route")
      .query({ origin: "london", destination: "goole" });

    const data = response.body;
    expect(data.route).to.equal(null);
  });
});
