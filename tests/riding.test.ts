import { expect } from "chai";
import request from "supertest";
import app from "../src/index";

const api = request(app);

const API_BASE_URL = "/api/v1";

const mockCard = {
  number: "1234",
  amount: 50,
};

describe("Riding stations with cards", async () => {
  it("Should new card is created.", async () => {
    await api.post(`${API_BASE_URL}/card`).send(mockCard);

    const data = (await api.get(`${API_BASE_URL}/card`)).body;
    expect(data.length).to.equal(1);

    const cardData = (await api.get(`${API_BASE_URL}/card/${mockCard.number}`))
      .body;

    expect(cardData.amount).to.equal(50);
  });

  it("Should amount is added to existing card", async () => {
    await api.post(`${API_BASE_URL}/card`).send(mockCard);

    const data = (await api.get(`${API_BASE_URL}/card`)).body;
    expect(data.length).to.equal(1);

    const card1Data = (await api.get(`${API_BASE_URL}/card/${mockCard.number}`))
      .body;
    expect(card1Data.amount).to.equal(100);
  });

  it("Should amount is reduced from card", async () => {
    await api
      .post(`${API_BASE_URL}/station/london/enter`)
      .send({ number: mockCard.number });

    const cardData = (await api.get(`${API_BASE_URL}/card/${mockCard.number}`))
      .body;
    expect(cardData.amount).to.equal(99.5);
    expect(cardData.riding).to.equal(true);
  });

  it("Should amount is not reduced from card", async () => {
    await api
      .post(`${API_BASE_URL}/station/london/enter`)
      .send({ number: mockCard.number });

    const cardData = (await api.get(`${API_BASE_URL}/card/${mockCard.number}`))
      .body;
    expect(cardData.amount).to.equal(99.5);
    expect(cardData.riding).to.equal(true);
  });

  it("Should be out of subway", async () => {
    await api
      .post(`${API_BASE_URL}/station/london/exit`)
      .send({ number: mockCard.number });

    const cardData = (await api.get(`${API_BASE_URL}/card/${mockCard.number}`))
      .body;
    expect(cardData.amount).to.equal(99.5);
    expect(cardData.riding).to.equal(false);
  });
});
