const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");
const dotenv = require('dotenv')
const request = require('supertest');

dotenv.config();;

chai.should();
chai.use(chaiHttp);

// valid credentials
const userCredentials = {
  email: 'jondoe@vmail.com',
  password: '12345678',
}

//login the user before we run any tests
var authenticatedUser = request.agent(server);
before((done) => {
  authenticatedUser
    .post('/auth/login')
    .send(userCredentials)
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
});


// Test for login with Invalid credentials
describe("/POST login", () => {
  it("it should return 401", (done) => {
    chai
      .request(server)
      .post(`/auth/login`)
      .send({ email: "jondoe@vmail.com", password: "abcdefds" })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});

// Test for login with Valid credentials
describe("/POST login", () => {
  it("it should return 200", (done) => {
    chai
      .request(server)
      .post(`/auth/login`)
      .send({ email: "jondoe@vmail.com", password: "12345678" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("success")
        res.body.should.have.nested.property("success.user")
          .that.has.keys(["id", "username", "email"])
        done();
      });
  });
});

// Test for logout route
describe("/GET logout", () => {
  it("it should return 205 and message", (done) => {
    chai
      .request(server)
      .get(`/auth/logout`)
      .end((err, res) => {
        res.should.have.status(205);
        res.body.should.have
          .property("message")
          .eql("You have successfully logged out");
        done();
      });
  });
});

// Test for register expecting fail
describe("/POST register", () => {
  it("it should return 400", (done) => {
    chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: "jondoe@vmail.com", password: "12345678", username: "joDe" })
      .end((err, res) => {
        res.should.have.status(400)
        done();
      });
  });
});


// Test for loadUser route with authentication
describe("/GET user", () => {
  it("it should return 200 status the user details", (done) => {
    // Test with authenticated user
    authenticatedUser
      .get(`/auth/user`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("success")
        res.body.should.have.nested.property("success.user")
          .that.has.keys(["id", "username", "email"])
        done();
      });
  });
});

// Test for loadUser route w/o authentication
describe("/GET user", () => {
  it("it should return 401 status", (done) => {
    chai
      .request(server)
      .get(`/auth/user`)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});
