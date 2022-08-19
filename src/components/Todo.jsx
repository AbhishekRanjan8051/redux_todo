import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../actions/index";
function Todo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoreducers.list);
  const addems = () => {
    dispatch(addItems(input));
    setInput("");
  };
  return (
    <>
      <div>
        <div>
          <h5>Add Items in List 📃</h5>
        </div>
        <div>
          <input
            type="text"
            placeholder="✍ Add Items..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => addems()}>➕</button>
        </div>
        <div>
          <span>
            <h5>{list.map((item) => ({ item }))}</h5>
          </span>
        </div>
      </div>
    </>
  );
}
export default Todo;
