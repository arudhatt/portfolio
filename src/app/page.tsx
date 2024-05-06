import Image from "next/image";

  const MyImage = () => {
    return (
      <Image
        src="./portfolio/profile.JPG"
        alt="This is an image"
        height={900}
        width={900}
      />
    );
  }

import { About } from "@/components/about"

export default function Home() {
  return (
    <About></About>
  );
}
