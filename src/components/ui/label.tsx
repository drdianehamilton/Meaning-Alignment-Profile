import React from "react";

export function Label({ children, htmlFor }: any) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "block",
        fontWeight: "600",
        marginBottom: "6px",
        color: "#1f2937"
      }}
    >
      {children}
    </label>
  );
}
