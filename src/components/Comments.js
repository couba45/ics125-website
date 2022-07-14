import React from "react";
import { UserIcon } from "@heroicons/react/solid";

function Comments() {
  return (
    <div className="bg-black text-zinc-50 h-fit-content  w-screen flex flex-col justify-center p-11 md:p-32">
      <h1 className="text-4xl md:text-5xl pt-16 font-bold mb-[50px] md:mb-[100px] ">
        Comments:
      </h1>
      <div className="w-full flex flex-col gap-6">
        <div className="mx-auto w-fit-content  max-w-md rounded-2xl bg-white p-2">
          <div className=" flex items-center gap-4 rounded-lg bg-emerald-400 text-left  pl-3 py-2 text-lg font-medium text-zinc-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <UserIcon className="h-6 w-6" />
            <div className="w-fit-content">
              <p>First User</p>
            </div>
          </div>
          <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            accusamus tempore iste et odio, corrupti minima distinctio,
            perferendis sed saepe quia! Culpa tempore iste suscipit. Molestias
            amet architecto quidem dolorum! Iusto, excepturi! Ipsam, tempore
            praesentium ipsa ratione consectetur quis sunt dolorum, vero vitae
            illum ducimus magnam voluptatum rerum. Itaque aliquid libero a
          </div>
        </div>
        <div className="mx-auto w-fit-content  max-w-md rounded-2xl bg-white p-2">
          <div className="flex items-center gap-4 rounded-lg bg-emerald-400 text-left  pl-3 py-2 text-lg font-medium text-zinc-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <UserIcon className="h-6" />
            <p>Second User</p>
          </div>
          <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            accusamus tempore iste et odio, corrupti minima distinctio,
            perferendis sed saepe quia! Culpa tempore iste suscipit. Molestias
            amet architecto quidem dolorum! Iusto, excepturi! Ipsam, tempore
            praesentium ipsa ratione consectetur quis sunt dolorum, vero vitae
            illum ducimus magnam voluptatum rerum. Itaque aliquid libero a
          </div>
        </div>
        <div className="mx-auto w-fit-content  max-w-md rounded-2xl bg-white p-2">
          <div className="flex items-center gap-4 rounded-lg bg-emerald-400 text-left  pl-3 py-2 text-lg font-medium text-zinc-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <UserIcon className="h-6" />
            <p>Third User</p>
          </div>
          <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            accusamus tempore iste et odio, corrupti minima distinctio,
            perferendis sed saepe quia! Culpa tempore iste suscipit. Molestias
            amet architecto quidem dolorum! Iusto, excepturi! Ipsam, tempore
            praesentium ipsa ratione consectetur quis sunt dolorum, vero vitae
            illum ducimus magnam voluptatum rerum. Itaque aliquid libero a
          </div>
        </div>
        <div className="mx-auto w-fit-content  max-w-md rounded-2xl bg-white p-2">
          <div className="flex items-center gap-4 rounded-lg bg-emerald-400 text-left  pl-3 py-2 text-lg font-medium text-zinc-900 focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75">
            <UserIcon className="h-6" />
            <p>Forth User</p>
          </div>
          <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            accusamus tempore iste et odio, corrupti minima distinctio,
            perferendis sed saepe quia! Culpa tempore iste suscipit. Molestias
            amet architecto quidem dolorum! Iusto, excepturi! Ipsam, tempore
            praesentium ipsa ratione consectetur quis sunt dolorum, vero vitae
            illum ducimus magnam voluptatum rerum. Itaque aliquid libero a
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
