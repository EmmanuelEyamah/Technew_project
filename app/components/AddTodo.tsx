import React from "react";
import Form from "./Form";
import { create } from "../actions/todoActions";
import { Button, Input } from "@material-tailwind/react";
import { commonProps } from "@/types/common";

const AddTodo = () => {
  return (
    <Form action={create}>
      <div className="w-full lg:w-[34rem] flex gap-6">
        <Input
          crossOrigin={undefined}
          label="Add Todos..."
          {...commonProps}
          color="blue"
          name="input"
        />
        <Button
          {...commonProps}
          className="bg-[#4393D8] text-white"
          type="submit"
        >
          Add
        </Button>
      </div>
    </Form>
  );
};

export default AddTodo;
