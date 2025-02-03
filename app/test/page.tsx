"use client";

import { useQueryState } from "nuqs";
import { FunctionComponent } from "react";

const Demo: FunctionComponent = () => {
  const [name, setName] = useQueryState("name");
  return (
    <main className="bg-red">
      <input value={name || ""} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || "anonymous visitor"}!</p>
    </main>
  );
};

export default Demo;
