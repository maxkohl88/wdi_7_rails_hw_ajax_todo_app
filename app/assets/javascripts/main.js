$(document).ready(function(){
  toDoApp.ToDoCollection.init('#get-to-dos', '#to-do-list');
});

var toDoApp = toDoApp || {};

toDoApp.ToDoCollection = {
  init: function(getToDosID, toDosListID){
    this.getToDosButton = $(getToDosID);
    this.toDosListElem = $(toDosListID);

    // 1. set click handler for form submission
    $('#new-item-form').on('submit', this.createToDo.bind(this));

    // 4. set click handler for to do retrieval
    this.getToDosButton.on('click', this.getToDos.bind(this));

    // 5. simulate user click event, which will trigger to do retrieval
    this.getToDosButton.trigger('click');
  },

  createToDo: function(){
    // 2. Create the request object from the submitted form
    var $form = $(event.target),
      $body = $form.find("input[name='body']"),
      requestObj = {to_do: {body: $body.val(), complete: 'false'}};

      $body.val("");

    event.preventDefault();

    // 3. Create and send an Ajax POST request
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/to_dos',
      data: requestObj,
      dataType: 'json'
    })
    .done(this.getToDos.bind(this));
  },

  getToDos: function(){
    // 6. create and send an Ajax GET request to the backend
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/to_dos'
    })
    // 7. pass the returned data to the callback handler function
    .done(this.toDosCallBackHandler.bind(this));
  },

  toDosCallBackHandler: function(todos){
    // 8. build the html to insert into the list of todos
    var toDosHTML = '',
    newToDo;

    // 9. iterate through each toDo item and build each one's html
    for(var i = 0; i < todos.length; i++){
      // 10. create an instance of toDo, then pass it an id and body
      newToDo = new toDoApp.ToDo(todos[i].id, todos[i].body);
      toDosHTML += newToDo.buildHTML();
    }

    // 10. empty the toDosList
    this.toDosListElem.empty();

    // 11. set the ToDosList 
    this.toDosListElem.append(toDosHTML);
  }

};
