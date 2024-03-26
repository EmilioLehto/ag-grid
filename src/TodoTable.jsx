import React from "react";

function TodoTable({ todos, deleteTodo }) {
    return (
        <>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Delete</th>
              </tr>
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.Date}</td>
                  <td>{todo.description}</td>
                  <td>{todo.priority}</td>
                  <td>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
}


export default TodoTable