// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { addTodo } from "../features/Todo/todoSlice";


// function AddTodo(){
//     const [input,setInput]=useState('')
//     const dispatch = useDispatch()

//     const addTodoHandler = (e)=>{
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')
//     }
//     return (
//         <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
//       <input
//         type="text"
//         className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//         placeholder="Enter a Todo..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//       >
//         Add Todo
//       </button>
//     </form>
//     )
// }
// export default AddTodo


 import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addTodo, updateTodo } from "../features/Todo/todoSlice";

function AddTodo({ editMode, setEditMode, currentTodo }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      setInput(currentTodo.text);
    }
  }, [editMode, currentTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateTodo({ id: currentTodo.id, newText: input }));
      setEditMode(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editMode ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
}

export default AddTodo;