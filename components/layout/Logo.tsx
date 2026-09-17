import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-end gap-1 justify-center">
      <Image src="/assets/images/icon.png" alt="icon" width={40} height={40} />
      <h1 className="text-primary-50! font-space-grotesk font-bold text-3xl">
        ineverse
      </h1>
    </Link>
  );
}
