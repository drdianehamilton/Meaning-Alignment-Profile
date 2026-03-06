import React from "react";

export function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        background: "#111",
        color: "white",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
