import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

let token = '';

describe('Homepage, user and required test to run others', () => {
  describe('Homepage', () => {
    it('it should open the homepage', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('User', () => {
    it('it should register a new user', (done) => {
      chai.request(server)
        .post('/api/v2/users/register')
        .send({
          email: 'gizitewiiia@gmail.com',
          firstname: 'trewer',
          lastname: 'qwaszxdc',
          password: 'tuyishime'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          token = res.body.data[0].token;
          done();
        });
    });

    it('it should not register a new user with empty field', (done) => {
      chai.request(server)
        .post('/api/v2/users/register')
        .send({
          email: '',
          firstname: 'braneck',
          lastname: 'bgombele',
          password: 'qwerty'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });


    describe('Login a user with data already in the database', () => {
      it('it should login the user', (done) => {
        chai.request(server)
          .post('/api/v2/users/login')
          .send({
            email: 'gizitewiii@gmail.com',
            password: 'tuyishime',
          })

          .end((err, res) => {
            console.log(res.body);
            res.should.have.status(200);
            res.body.should.be.a('object');
            token = res.body.data[0].token;
            done();
          });
      });

      it('it should not register a new user with existing email', (done) => {
        chai.request(server)
          .post('/api/v2/users/register')
          .send({
            email: 'jeanluc@gmail.com',
            firstname: 'Niyongabo',
            lastname: 'Arsene',
            password: '1234'
          })

          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
          });
      });
    });
  });
});
