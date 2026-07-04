import { ReactNode } from "react";

type ContainerSize = "default" | "narrow" | "wide" | "full";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
}

export default function Container({
  children,
}: ContainerProps) {
  return <div>{children}</div>;
}