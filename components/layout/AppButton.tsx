import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import MagneticCursor from "../ui/magnetic-cursor";

type AppButtonPropsType = ComponentPropsWithoutRef<typeof Button> & {
  children: ReactNode;
  className?: string;
  href?: string;
  kind?: "default" | "primary";
  isMagnetic?: boolean;
};

export default function AppButton({
  kind = "default",
  href,
  className = "",
  isMagnetic = false,
  children,
  ...rest
}: AppButtonPropsType) {
  const content = (
    <Button
      {...rest}
      className={`rounded-full cursor-pointer transition-all duration-300 hover:scale-110 active:scale-80 ${
        kind === "primary"
          ? "hover:bg-primary-60 active:bg-primary-60 bg-primary-50 text-gray-950"
          : ""
      } ${className}`}
    >
      {href ? (
        <Link href={href} className="flex items-center gap-1">
          {children}
        </Link>
      ) : (
        children
      )}
    </Button>
  );
  return isMagnetic ? <MagneticCursor>{content}</MagneticCursor> : content;
}
