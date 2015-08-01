describe('Hello :)', function() {

  var hello = new Hello();

  it('says my name', function() {
    expect(hello.sayHi('Christian')).toEqual('my name is Christian and I\'m learning Jasmine!');
  });

});