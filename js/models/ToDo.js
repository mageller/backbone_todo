app.models.Todo = Backbone.Model.extend({
  defaults: {
    title: "ToDo",
    archived: false,
    done: false
  }
});