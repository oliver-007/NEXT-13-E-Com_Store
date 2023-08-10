"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "./ui/Button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => {}}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium ">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
