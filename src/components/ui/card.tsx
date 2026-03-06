import React from "react";

export function Card({ children }: any) {
  return <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>{children}</div>;
}

export function CardHeader({ children }: any) {
  return <div style={{ fontWeight: "bold", marginBottom: "10px" }}>{children}</div>;
}

export function CardTitle({ children }: any) {
  return <h2>{children}</h2>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
