import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex justify-center items-center w-full">
      <Image
        src="/my-pic.png"
        alt="avatar"
        width={450}   // ↓ Reduced width
        height={350}  // ↓ Reduced height
        className="object-contain"
      />
    </div>
  );
};

export default Avatar;
