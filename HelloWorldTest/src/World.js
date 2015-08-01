function World() {
}
World.prototype.say = function() {
  this.isSaying = true;
};

World.prototype.stopSaying = function() {
  this.isSaying = false;
};
