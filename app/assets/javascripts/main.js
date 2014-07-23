$(document).ready(function(){
  toDoApp.ToDoCollection.init('#new-item-form');
});

var toDoApp = toDoApp || {};

toDoApp.ToDoCollection = {
  createToDo: function(){
    // 2. Create the request object from the submitted form
    var $form = $(event.target),
      $body = $form.find("input[name='body']"),
      requestObj = {to_do: {body: $body.val()}};

      $body.val("");

    event.preventDefault();

    // Creae and send an Ajax POST request
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/to_dos',
      data: requestObj,
      dataType: 'json'
    });
  },

  init: function(){
    // 1. set click handler for form submission
    $('#new-item-form').on('submit', this.createToDo.bind(this));
  }
};
