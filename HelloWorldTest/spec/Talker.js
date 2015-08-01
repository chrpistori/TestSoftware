describe("Talker", function() {
  var talk;

  talk = new Talk;

  it("should be able to say", function() {
    talk.say();

    expect(talk.isSaying).toEqual(true);
  });

  describe("when talk is not saying anything", function() {
    beforeEach(function() {
      talk.say();
      talk.stopSaying();
    });

    it("should indicate that Talker stopped saying", function() {
      expect(talk.isSaying).toBeFalsy();
    });

  });
});