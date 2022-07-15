import React, { useEffect, useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import axios from "axios";

function Comments() {

  
  let [userList, setUserList] = useState([]);
  let [triger,setTriger] = useState(0);
  
  let handleComments = () =>{
    setTriger(triger++);
    
    
  }
  useEffect(() =>{
      axios.get("http://localhost:3001/users").then((response) => {
      setUserList(response.data);
      console.log("This is second?");
    })
  },[triger])

 
  
  return (
    <div
      id="comments"
      className="bg-black text-zinc-50 h-fit-content  w-screen flex flex-col justify-center p-11 md:p-32"
    >
      <h1 className="text-4xl md:text-5xl pt-16 font-bold mb-[50px] md:mb-[100px] ">
        Comments:
      </h1>
      <div id="user_comments" className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-6">
       
        {userList.map((val,key) => {
          return  <div className="mx-auto w-fit-content  max-w-md rounded-2xl bg-white p-2 mb-7">
          <div className="flex items-center gap-4 rounded-lg bg-emerald-400 text-left  pl-3 py-2 text-lg font-medium text-zinc-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <UserIcon className="h-6" />
            <p>{val.user_email}</p>
          </div>
          <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
            {val.comment}
          </div>
        </div>;
         
        })}

      </div>
    </div>
  );
}

export default Comments;
