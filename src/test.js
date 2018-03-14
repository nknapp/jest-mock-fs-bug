const mock = require("mock-fs");

describe("tests", () => {
  beforeEach(() => {
    mock({
      "/foo/bar": {}
    });
  });

  afterEach(() => {
    mock.restore();
  });
  it("should fail", async () => {
    console.log(`This cnosole.log will cause an error`);
  });
});
