import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setPage] = useState(2);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3004/todos?_page=1&_limit=20");
      const data = await res.json();
      setTodos(data);
    };
    getData();
  }, []);
  const fetchTodos = async () => {
    const res = await fetch(
      `http://localhost:3004/todos?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };
  const fetchData = async () => {
    const nextTodos = await fetchTodos();
    setTodos([...todos, ...nextTodos]);
    if (nextTodos.length === 0 || nextTodos.length < 20) sethasMore(false);
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <InfiniteScroll
      dataLength={todos.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="container">
        <div className="row m-2">
          <Todos todos={todos} />
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default App;