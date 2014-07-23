var toDoApp = toDoApp || {};

// ToDoItem constructor function

toDoApp.ToDo = function(body){
  this.id = id;
  this.body = body;
};

// method to generate HTML for each ToDoItem

toDoApp.ToDo.prototype = {
  buildHTML: function(){
    var toDoHTML = '<li id=to-do_' + this.id + '>';
    toDoHTML += '<div>' + this.body + '</div>';
    toDoHTML += '</div>';

    return toDoHTML;
  }
};
