import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");

  const allPastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  useEffect(() => {
    if(pasteId){
        const paste = allPastes.find((p) => p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
    }
  }, [pasteId])
  

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    console.log("paste value", paste);

    if (pasteId) {
      // Update
      console.log("Came for update to pastes", paste);
      dispatch(updateToPastes(paste));
    } else {
      // Create
      dispatch(addToPastes(paste));
    }

    // Cleanup operation
    setTitle("");
    setValue("");
    setSearchParam("");
  }

  return (
    <>
      <div className="flex flex-row gap-4 place-content-evenly ">
        <input
          className="p-1.5 rounded-2xl mt-2"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="p-1.5 rounded-2xl mt-2" onClick={createPaste}>
          {pasteId ? "Update my paste" : "Create my paste"}
        </button>
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 min-h-[400px]"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Home;
