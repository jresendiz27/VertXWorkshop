function TaskManagerEditor(eventBus){
  this.eventBus = eventBus;
  this.data = null
}
TaskManagerEditor.prototype.findAll = function(){
  var self = this;
  this.eventBus.send("board.task.list", {}, function(message) {
    self.data = message;
  });
  return self.data;
}