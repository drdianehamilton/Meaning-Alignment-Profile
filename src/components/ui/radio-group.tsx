import React from "react";

export function RadioGroup({ children }: any) {
  return <div>{children}</div>;
}

export function RadioGroupItem({ value, name }: any) {
  return <input type="radio" value={value} name={name} />;
}
