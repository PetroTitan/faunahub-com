"use client";
import Link from "next/link";
import { useState } from "react";

/** Client-side navigation probe: does <Link> keep the mounted prefix? */
export default function Nav({ to, label }: { to: string; label: string }) {
  const [clicked, setClicked] = useState(false);
  return (
    <p>
      <Link href={to} onClick={() => setClicked(true)}>{label}</Link>
      {clicked ? <span className="tag"> · client nav fired</span> : null}
    </p>
  );
}
