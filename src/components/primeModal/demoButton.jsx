
import React, { useState, useEffect } from "react";
import PrimeModal from "@/components/primeModal";

export default function PrimeModalDemoButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <button onClick={() => setOpen(true)} style={{margin: '2rem', padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '8px', background: '#43a047', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer'}}>Show Prime Modal</button>
      <PrimeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
