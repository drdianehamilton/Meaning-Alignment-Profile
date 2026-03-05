import React from 'react';
import AppLayout from '../components/AppLayout';
import { AppProvider } from '../Contexts/App.Context';

const Index = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
