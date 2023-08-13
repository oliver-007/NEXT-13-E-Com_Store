import { cn } from "@/lib/utils";
import { ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import NextImage from "next/image"; // Image aliases as NextImage

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white ">
      {({ selected }) => {
        return (
          <div>
            <span className="absolute h-full aspect-square inset-0 overflow-hidden rounded-md ">
              <NextImage
                alt=""
                src={image.url}
                fill
                className="object-center object-cover "
              />
            </span>
            <span
              className={cn(
                " absolute inset-0 rounded-md ring-2 ring-offset-2 ",
                selected ? "ring-black" : "ring-transparent"
              )}
            />
          </div>
        );
      }}
    </Tab>
  );
};

export default GalleryTab;
