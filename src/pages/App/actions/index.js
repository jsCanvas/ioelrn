let nextTodoId = 0;

module.exports = {
  addTodo:function(text){
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
      }
  },
  setVisibilityFilter:function(filter){
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
  },
  toggleTodo:function(id){
    return{
      type: 'TOGGLE_TODO',
        id
    }
  },
  VisibilityFilters : {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE'
    }
}
// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }
