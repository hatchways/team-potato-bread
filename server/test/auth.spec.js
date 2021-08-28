const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");
const dotenv = require('dotenv')
const expect = require("chai").expect;

dotenv.config();;

chai.should();
chai.use(chaiHttp);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjdmYjA3OTNhYTZmM2ExYzkyM2ZiZiIsImlhdCI6MTYzMDAxMDExOSwiZXhwIjoxNjMwNjE0OTE5fQ.EE8omcwEkQkCEJUEMyY2ODQgBHOZk3g5spRPwQ6jynM';


// Test for login
describe("/POST login", () => {
  it("it should  return 200 if credentials are valid or 401 if not", (done) => {
    chai
      .request(server)
      .post(`/auth/login`)
      .send({ email: "jondoe@vmail.com", password: "12345678" })
      .end((err, res) => {
        expect(res.status).to.be.oneOf([200, 401]);
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

// Test for register
describe("/POST register", () => {
  it("it should return 201 or 400 is email or username already exists", (done) => {
    chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: "jondoe@vmail.com", password: "12345678", username: "joDe" })
      .end((err, res) => {
        expect(res.status).to.be.oneOf([201, 400]);
        done();
      });
  });
});


// Test for loadUser route with authentication
describe("/GET user", () => {
  it("it should return the user details or fail if token is invalid", (done) => {
    chai
      .request(server)
      .get(`/auth/user`)
      .set('Cookie', `token=${token}`)
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
