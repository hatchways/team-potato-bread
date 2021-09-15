const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");
const dotenv = require('dotenv')
const expect = require("chai").expect;

dotenv.config();;

chai.should();
chai.use(chaiHttp);

// Test adding a new review with improper input
describe("/POST review", () => {
  const tooLongReviewText = "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.";

  it("it should return 400 with error messages", async () => {
    // Register a new user to call API
    const user = await chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: `UnitTestUser${Math.random()}@email.com`, password: "12345678", username: `UnitTestUser${Math.random()}` });

    const token = user.header["set-cookie"];

    const invalidMongoID = "agent47";
    // Test with authenticated user
    const postResponse = await chai
      .request(server)
      .post(`/review/`)
      .set("Cookie", token)
      .send({
        rating: 6,
        text: tooLongReviewText,
        userId: invalidMongoID,
      });

    expect(postResponse.status).to.eql(400);
    expect(postResponse.body).to.have.property("errors").to.deep.eql([
      {
        "value": 6,
        "msg": "Rating is required and must be between 1-5",
        "param": "rating",
        "location": "body",
      },
      {
        "value": tooLongReviewText,
        "msg": "Review cannot be longer than 200 characters.",
        "param": "text",
        "location": "body",
      },
      {
        "value": invalidMongoID,
        "msg": "Please provide a valid id for userId",
        "param": "userId",
        "location": "body",
      }]);
  });
});

// Test adding a new review
describe("/POST review", () => {
  it("it should return 201 status and the added review", async () => {
    // Register a user to call API
    const user = await chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: `UnitTestUser${Math.random()}@email.com`, password: "12345678", username: `UnitTestUser${Math.random()}` });

    const token = user.header["set-cookie"];

    // Register another user to send review for
    const revieweeUser = await chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: `UnitTestUser${Math.random()}@email.com`, password: "12345678", username: `UnitTestUser${Math.random()}` });

    const revieweeId = revieweeUser.body.success.user.id;

    const postResponse = await chai
      .request(server)
      .post(`/review/`)
      .set("Cookie", token)
      .send({
        rating: 5,
        text: "Came right on time!",
        userId: revieweeId,
      });

    expect(postResponse.status).to.eql(201);
    expect(postResponse.body.success.review.rating).to.eql(5);
    expect(postResponse.body.success.review.text).to.eql("Came right on time!");
    expect(postResponse.body.success.review.userId).to.eql(revieweeId);
  });
});

// Test for adding review W/O authentication
describe("/POST review", () => {
  it("it should return 401 status", async () => {
    // Regiseter user for whome create a review for
    const user = await chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: `UnitTestUser${Math.random()}@email.com`, password: "12345678", username: `UnitTestUser${Math.random()}` });

    const uid = user.body.success.user.id;

    const postResponse = await chai
      .request(server)
      .post(`/review/`)
      .send({
        rating: 5,
        text: "Came right on time!",
        userId: uid,
      });

    expect(postResponse.status).to.eql(401);
  });
});

// Test for fetching user reviews
describe("/GET review", () => {
  it("it should return 200 with reviews", async () => {
    // Register a user to call API
    const user = await chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: `UnitTestUser${Math.random()}@email.com`, password: "12345678", username: `UnitTestUser${Math.random()}` });

    const token = user.header["set-cookie"];

    // Register another user to send review for
    const revieweeUser = await chai
      .request(server)
      .post(`/auth/register`)
      .send({ email: `UnitTestUser${Math.random()}@email.com`, password: "12345678", username: `UnitTestUser${Math.random()}` });

    const revieweeId = revieweeUser.body.success.user.id;

    // Create a review to for the new user
    await chai
      .request(server)
      .post(`/review/`)
      .set("Cookie", token)
      .send({
        rating: 5,
        text: "Came right on time!",
        userId: revieweeId,
      });

    // Fetch all reviews of the user and verify that reviews are there
    const getResponse = await chai
      .request(server)
      .get(`/review/${revieweeId}`)
      .set("Cookie", token);

    expect(getResponse.status).to.eql(200);
    expect(getResponse.body).to.have.property("reviews");
  });
});
