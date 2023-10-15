import { lazy, useState, Suspense } from "react";

const LazyDemo = lazy(() => import("../components/LazyDemo"));

export const UserList = () => {
  return (
    <Suspense fallback={<div>Loading!!!</div>}>
      <LazyDemo userId="1" />
    </Suspense>
  );
};
