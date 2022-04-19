const app = require('../../app');
const request = require('supertest');

describe('/api/user/:userId/tasks/:password', () => {
    it('returns status 201 if all goes well', async () => {
        const res = await request(app)
            .post('/api/user/:userId/tasks/:password')
            .query({
                userId: '2',
                password: '447d10d0-1071-4637-a825-70f6d1cb32ef'
            })
            .send({
                "name": "POSTed Task",
                "description": "Todo everything but a little less"
            });

        expect(res.statusCode).toEqual(201);
    })
});
