"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const {setTheme}=useTheme();
  return (
  <div>
     <h2>Subscribe</h2>
     <Button>subscribr</Button>
     <Button onClick={()=>setTheme('dark')}>Dark mode</Button>
     <buttononClick={()=>setTheme('light')} >Light mode</button>
  </div>
  );
}
