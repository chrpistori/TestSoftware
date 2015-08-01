function Talk() {
}
Talk.prototype.say = function() {
  this.isSaying = true;
};

Talk.prototype.stopSaying = function() {
  this.isSaying = false;
};
