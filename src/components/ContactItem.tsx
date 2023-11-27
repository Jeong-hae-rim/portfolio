import { ReactNode } from "react";

const ContactItem = ({
  children,
  isEmail,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  isEmail?: boolean;
  className?: string;
}) => {
  return (
    <div className="bg-teal-500 hover:bg-teal-700 rounded-full">
      <a target="_blank" rel="noreferrer" href={isEmail ? `mailto:${href}` : href} className="w-fit">
        <span
          className={`px-1 text-sm ${className}`}
        >
          {children}
        </span>
      </a>
    </div>
  );
};

export default ContactItem;
