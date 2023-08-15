"use client";

import { ColorType, SizeType } from "@/types";
import Button from "./ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Filter from "./Filter";
import IconButton from "./ui/Icon-button";

interface MobileFilterProps {
  sizes: SizeType[];
  colors: ColorType[];
}

const MobileFilters: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog as="div" open={isOpen} onClose={onClose}>
        {/* Background color and opacity */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;

// 09:07:17
