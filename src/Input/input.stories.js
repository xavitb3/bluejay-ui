import React from "react";
import Input from "./Input";

export default { title: "Input" };

export const withText = () => (
  <>
    <Input label="Name" id="name" />
  </>
);
