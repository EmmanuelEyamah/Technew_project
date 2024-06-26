import React from "react";
import { prisma } from "@/utils/prisma";
import { Header } from "../components/Header";
import { Todo } from "../components/Todo";

const page = async () => {
  const todo = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <Header bgProps />
      <Todo todo={todo} />
    </div>
  );
};

export default page;
