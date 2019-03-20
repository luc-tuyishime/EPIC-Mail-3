// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../server';
//
//
// let token = '';
//
//
// const should = chai.should();
// const expect = chai.expect();
// chai.use(chaiHttp);
//
// describe('Party', () => {
//
//   describe('Post message to user', () => {
//     it('First log in the user to generate the token'
//       chai.request(server)
//         .post('/api/v2/user/login')
//         .send({
//           email: 'jeanluc@gmail.com',
//           password: 'qwerty',
//         })
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           token = res.body.data[0].token;
//           done();
//         });
//     });
//   });
//
//   describe('GET all Political parties', () => {
//     it('it should show all political parties', (done) => {
//       chai.request(server)
//         .get('/api/v1/parties')
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//   });
//
//
//   describe('GET specific Political party', () => {
//     it('it should show specific political party', (done) => {
//       chai.request(server)
//         .get('/api/v1/parties/1')
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//     it('it should not show specific political party with invalid parameter', (done) => {
//       chai.request(server)
//         .get('/api/v1/parties/1rt')
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(400);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//   });
//
//
//   describe('Patch specific Political party', () => {
//     it('it should update specific political party', (done) => {
//       chai.request(server)
//         .patch('/api/v1/parties/1')
//         .send({
//           name: 'Democratic',
//         })
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//     it('it should not update specific political party with invalid parameter', (done) => {
//       chai.request(server)
//         .patch('/api/v1/parties/1hjnh')
//         .send({
//           name: 'Democratic',
//         })
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(400);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//   });
//
//   describe('Delete specific Political party', () => {
//     it('it should delete a specific political party', (done) => {
//       chai.request(server)
//         .delete('/api/v1/parties/2')
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//     it('it should not delete a specific political party with invalid parameter', (done) => {
//       chai.request(server)
//         .delete('/api/v1/parties/234ff')
//         .set('x-http-token', token)
//         .end((err, res) => {
//           res.should.have.status(400);
//           res.body.should.be.a('object');
//           done();
//         });
//     });
//   });
// });
