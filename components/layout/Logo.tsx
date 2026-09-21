import Image from "next/image";
import Link from "next/link";

type LogoPropsType = { className?: string; variant?: "dark" | "light" };

export default function Logo({
  className = "",
  variant = "light",
}: LogoPropsType) {
  return (
    <Link
      href="/"
      className={`flex items-end gap-1 justify-center ${className}`}
    >
      <Image
        src={
          variant === "light"
            ? "/assets/images/icon.png"
            : "/assets/images/icon-dark.png"
        }
        alt="icon"
        width={40}
        height={40}
      />
      <h1
        className={`${
          variant === "light" ? "text-primary-50!" : "text-gray-950!"
        } font-bold text-2xl md:text-3xl`}
      >
        ineverse
      </h1>
    </Link>
  );
}
