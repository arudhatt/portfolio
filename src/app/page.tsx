import Image from "next/image";

  const MyImage = () => {
    return (
      <Image
        src="/profile.jpg"
        alt="This is an image"
      />
    );
  }

import { About } from "@/components/about"

export default function Home() {
  return (
    <About></About>
  );
}
