import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import { Provider } from "react-redux";
import store from "./modules/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoDetail" element={<TodoDetail />} />
      </Routes>
    </Provider>
  );
}
export default App;
