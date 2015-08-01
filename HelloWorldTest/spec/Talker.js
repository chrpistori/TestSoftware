describe("Talker", function() {
  var world;

  world = new World;

  it("should be able to say hello world", function() {
    world.say();

    expect(world.isSaying).toEqual(true);

    expect(world).toBeSaying();
  });

  describe("when world is not saying anything", function() {
    beforeEach(function() {
      world.say();
      world.stopSaying();
    });

    it("should indicate that Talker stopped saying hello world ", function() {
      expect(world.isSaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(world).not.toBeSaying();
    });

  });
});


describe("Nome da suite", function() {
  
  it("Descrição da spec", function() {
    // bloco de código
  });

  // outras specs
});