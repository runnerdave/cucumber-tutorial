const { Given, When, Then, Before } = require("cucumber");
const assert = require("assert");

let answer = 0;

Before(() => {
  console.info("resetting answer");
  answer = 0;
});

Given("I start with {int}", input => {
  answer = input;
});

When("I add {int}", input => {
  answer = answer + input;
});

When("I multiply by {int}", input => {
  answer = answer * input;
});

When("I subtract {int}", input => {
  answer = answer - input;
});

When("I deduct {int}", input => {
  answer = answer - input;
});

When("I add the following numbers:", table => {
  answer = table
    .raw()
    .map(row => row[0])
    .map(v => parseInt(v))
    .reduce((current, next) => current + next, answer);
});

Then("I end up with {int}", input => {
  assert.equal(answer, input);
});
