"use client";

import React, { useEffect } from "react";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import useCart from "@/hooks/use-cart";
import axios from "axios";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll); //  The useCart is a hook , and you should not call it like a regular function. Hooks in React should only be called within functional components, not outside them or within other functions. The correct way to use a hook is to provide a function to access specific state from the hook's return value.hook

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Success");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong !");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckOut = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900"> Order Summary </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckOut}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;

// 09:46:13
