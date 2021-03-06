/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/server');
const { mysqlConnection } = require('../src/database/database');

afterEach(() => app.close());
afterAll(() => mysqlConnection.end());

describe('Post Endpoints', () => {
  it('should create a new game', async () => {
    const res = await request(app)
      .post('/api/savegame')
      .send({
        player1_name: 'Jose',
        player1_wins: 7,
        player2_name: 'Elver',
        player2_wins: 4,
        winner_player: 'Jose',
        win_difference: 3,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data.success).toBeTruthy();
  });
});
