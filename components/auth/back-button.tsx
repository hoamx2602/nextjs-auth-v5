"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <div>
      <Button variant="link" className="font-normal w-full" size="sm" asChild>
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};

export default BackButton;
