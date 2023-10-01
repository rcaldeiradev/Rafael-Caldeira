'use client';

import { useEffect } from 'react';
import PageTitle from '@/components/layout/PageTitle';
import Button from '@/components/Button';

export default function AppError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(`Logging the error ${error}`);
  });

  return (
    <div className="container mx-auto">
      <PageTitle titleText="Something wrong happened" />
      <Button text="Reload page" onClick={() => reset()} />
    </div>
  );
}
