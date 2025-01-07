import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {

  const {id} = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  

  const paste = pastes.filter((p) => p._id === id)[0];
  console.log("Final paste", paste);
  
  return (
    <div>
      <div className="flex flex-row gap-4 place-content-evenly ">
        <input
          className="p-1.5 rounded-2xl mt-2"
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
        />
      </div>
      <div>
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 min-h-[400px]"
          value={paste.content}
          placeholder="Enter content here"
          disabled
        />
      </div>
    </div>
  )
}

export default ViewPaste
