"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { AnimationProps, motion } from "framer-motion";

import { ProfileData } from "@/types/ProfileData";
import config from "@/config";
import { resizeMinWidthImage } from "@/utils/canvas";
import { readFile } from "@/utils/files";

interface UserImageProps {
  imageSrc: string | null;
  hidden?: boolean;
  editable?: boolean;
  setProfile?: Dispatch<SetStateAction<ProfileData>>;
  onChange?: (imgSrc: string) => void;
}

const UserImage: React.FC<UserImageProps> = ({
  imageSrc,
  hidden,
  editable,
  onChange,
}) => {
  const animation: AnimationProps = {
    variants: {
      initial: { opacity: 0 },
      hover: { opacity: 1 },
    },
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const read = await readFile(file);

    // needs resize to avoid crop issues
    const imageDataUrl = await resizeMinWidthImage(read, 325);
    if (!imageDataUrl) return;

    if (onChange !== undefined) onChange(imageDataUrl);
  };

  if (!imageSrc && !editable)
    return (
      <div className="relative my-2 flex size-24 flex-col items-center rounded-full md:size-52">
        <Image
          width={328}
          height={328}
          src={config.defaultAvatar}
          alt="profile image"
          className="size-full rounded-full object-cover"
        />
      </div>
    );

  if (!editable)
    return (
      <div className="relative my-2 flex size-24 flex-col items-center rounded-full md:size-52">
        <Image
          width={328}
          height={328}
          src={imageSrc?.trimEnd() || config.defaultAvatar}
          alt="profile image"
          className="size-full rounded-full object-cover"
        />
      </div>
    );

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative my-2 flex size-24 flex-col items-center rounded-full hover:cursor-pointer md:size-52"
    >
      <Image
        width={328}
        height={328}
        src={imageSrc || config.defaultAvatar}
        alt="profile image"
        className="size-full rounded-full object-cover"
      />
      <div className="absolute left-0 top-0 flex size-full flex-col items-center justify-center rounded-full hover:bg-black/30">
        <motion.div
          {...animation}
          className="bg-primary/50 absolute left-0 top-0 size-full rounded-full"
        />
        <motion.input
          onChange={handleChange}
          accept="image/*"
          type="file"
          className="absolute left-0 top-0 z-10 size-full rounded-full opacity-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        ></motion.input>
        {!hidden && (
          <motion.div
            {...animation}
            className="absolute left-0 top-0 flex size-full flex-col items-center justify-center rounded-full"
          >
            <p className="text-2xl text-white">+</p>
            <p className="text-sm text-white">Adicionar</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default UserImage;
