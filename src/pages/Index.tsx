import React from "react";
import AppLayout from "@/components/AppLayout";
import { AppProvider } from "@/contexts/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
