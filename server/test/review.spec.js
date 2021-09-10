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

const lorem = "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.";

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

// Test adding a new review
describe("/POST review", () => {
  it("it should return 201 status the added review", (done) => {
    // valid userId for whome review is added
    const uid = "612401d05be2e31e30a8d65e";
    // Test with authenticated user
    authenticatedUser
      .post(`/review/`)
      .send({
        rating: 5,
        text: "Came right on time!",
        userId: uid,
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have
          .property("success");
        res.body.should.have.nested.property("success.review")
          .that.contain.keys(["rating", "text", "userId"]);
        done();
      });
  });
});

// Test adding a new review with improper input
describe("/POST review", () => {
  it("it should return 400 with error messages", (done) => {
    // valid userId for whome review is added
    const uid = "agent47";
    // Test with authenticated user
    authenticatedUser
      .post(`/review/`)
      .send({
        rating: 6,
        text: lorem,
        userId: uid,
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have
          .property("errors")
          .to.deep.include(
            {
              "value": 6,
              "msg": "Rating is required and must be between 1-5",
              "param": "rating",
              "location": "body"
            },
            {
              "value": uid,
              "msg": "Please provide a valid id for userId",
              "param": "userId",
              "location": "body"
            },
            {
              "value": lorem,
              "msg": "Review cannot be longer than 200 characters.",
              "param": "text",
              "location": "body"
            })
        done();
      });
  });
});

// Test for adding review w/o authentication
describe("/POST review", () => {
  it("it should return 401 status", (done) => {
    const uid = "612401d05be2e31e30a8d65e";
    chai
      .request(server)
      .post(`/review/`)
      .send({
        rating: 5,
        text: "Came right on time!",
        userId: uid,
      })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});

// Test for fetching user reviews
describe("/GET review", () => {
  it("it should return 200 with reviews", (done) => {
    const uid = "612401d05be2e31e30a8d65e";
    authenticatedUser
      .get(`/review/${uid}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("reviews")
        done();
      });
  });
});
