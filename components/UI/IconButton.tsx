import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useFormStatus } from "react-dom";

type IconButtonProps = {
  icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function IconButton({
  icon: Icon,
  children,
  ...otherProps
}: IconButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="p-4 bg-fuas-primary border rounded focus:outline-none focus:ring hover:bg-fuas-secondary hover:text-fuas-primary hover:border-fuas-primary hover:scale-105 flex items-center disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-400 transition duration-150 ease-in-out"
      {...otherProps}
    >
      <span className={pending ? "animate-spin" : ""}>
        <Icon />
      </span>
      <span className="pl-4">
        {!pending && children}
        {pending && " ... Saving"}
      </span>
    </button>
  );
}
