'use client';

import {useEffect} from "react";

export default function AppError({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.log(`Logging the error ${error}`);
  });

  return (
    <div>
      <h1>Ops, algo de errado não está certo.</h1>
      <button onClick={() => reset()}>Recarregar</button>
    </div>
  );
}