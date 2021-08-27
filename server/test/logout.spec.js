const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");
const dotenv = require('dotenv')

dotenv.config();;

chai.should();
chai.use(chaiHttp);

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
