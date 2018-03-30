var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required: true, // validation
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// newTodo.save().then((doc) =>{
//   console.log('Save to do', doc);
// }, (err) => {
//   console.log("error, Unable to do", err);
// });
//
// var newTodo = new Todo({
//   text: "Watch football",
//   completed: false,
//   completedAt: 30
// });
