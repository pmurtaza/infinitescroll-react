function Todos({ todos }) {
  return todos.map((todo) => {
    return (
      <div
        className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-2"
        key={todo.id}
      >
        <div className="card">
          <div className="card-header">
            <h2 className="card-title ">Todo id: {todo.id}</h2>
          </div>
          <div className="card-body">
            <p className="card-text">{todo.title}</p>
            <h6>Status: {todo.completed ? "Completed" : "Pending"}</h6>
          </div>
        </div>
      </div>
    );
  });
}

export default Todos;