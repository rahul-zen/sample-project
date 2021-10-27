import React from "react";
import { AppLayout } from "./AppLayout";
import { Home } from "./Home";

export const AppView = () => {
  return (
    <AppLayout>
      <AppLayout.Body>
        <Home />
      </AppLayout.Body>

      <AppLayout.Footer></AppLayout.Footer>
    </AppLayout>
  );
};
