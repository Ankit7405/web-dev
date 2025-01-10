import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("Filtered data ", filteredData);

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <>
      <div>
        <input
          className="p-2 rounded-2xl min-w-[600px] mt-5"
          type="search"
          placeholder="Enter text to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border">
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button>
                    <a href={`/?pasteId=${paste._id}`}>Edit</a>
                  </button>
                  <button>
                    <Link to={`/pastes/${paste._id}`}>View</Link>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast.success("Copied Successfully");
                    }}
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => {
                      navigator.share({
                        title: "Check this out!",
                        text: "Here's something interesting for you.",
                        url: window.location.href, // Current page URL or any URL to share
                      });
                    }}
                  >
                    Share
                  </button>
                </div>
                <div>
                  {new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(paste.createdAt))}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Pastes;
