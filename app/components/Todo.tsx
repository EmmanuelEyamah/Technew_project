"use client";

import { commonProps } from "@/types/common";
import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import AddTodo from "./AddTodo";
import { todoType } from "@/types/todoTypes";
import DeleteTodo from "./DeleteTodo";

export interface TodoProps {
  todo: todoType[];
}
export const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <div className="w-full h-[800px] bg-[#3561C4] container mx-auto flex items-center p justify-center">
      <div className="w-full lg:w-[650px] h-[600px] rounded-md bg-white py-20 px-14 flex flex-col gap-[70px]">
        <AddTodo />
        <div className="flex flex-col gap-5">
          {todo.map((todo, index) => {
            return (
              <div
                className="bg-[#CBE0E5] w-full h-[50px] px-7 py-4 rounded-md flex items-center justify-between"
                key={`todo-card-${index}`}
              >
                <Typography
                  {...commonProps}
                  className="text-[18px] leading-[24px] font-normal text-[#000000]"
                >
                  {todo.title}
                </Typography>

                <DeleteTodo todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
