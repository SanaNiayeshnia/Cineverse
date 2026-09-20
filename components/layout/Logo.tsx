import Image from "next/image";
import Link from "next/link";

type LogoPropsType = { className?: string };

export default function Logo({ className = "" }: LogoPropsType) {
  return (
    <Link
      href="/"
      className={`flex items-end gap-1 justify-center ${className}`}
    >
      <Image src="/assets/images/icon.png" alt="icon" width={40} height={40} />
      <h1 className="text-primary-50! font-bold text-2xl md:text-3xl">
        ineverse
      </h1>
    </Link>
  );
}
