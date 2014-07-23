var toDoApp = toDoApp || {};

// ToDoItem constructor function

toDoApp.ToDo = function(id, body){
  this.id = id;
  this.body = body;
  this.complete = false;
};

// method to generate HTML for each ToDoItem

toDoApp.ToDo.prototype = {
  buildHTML: function(){
    var toDoHTML = '<li id=to-do_' + this.id + ' ' + 'class=to-do-item' + '>';
    toDoHTML += '<div>' + this.body + '</div>';
    toDoHTML += '</div>';

    return toDoHTML;
  }
};
