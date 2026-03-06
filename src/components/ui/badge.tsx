import React from "react";

export function Badge({ children }: any) {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "6px",
        background: "#eee",
        fontSize: "12px",
        fontWeight: "600"
      }}
    >
      {children}
    </span>
  );
}
