"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const toCartPage = () => {
    return router.push("/cart");
  };

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={toCartPage}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium "> {cart.items.length} </span>
      </Button>
    </div>
  );
};

export default NavbarActions;

// 09:28:16
