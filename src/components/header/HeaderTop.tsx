import { RiFacebookFill, RiMailLine, RiSmartphoneLine } from "@remixicon/react";

export const HeaderTop = () => {
  return (
    <div className="container-box flex justify-center md:justify-between items-center bg-primary text-primary-foreground py-2">
      <div className="flex items-center gap-4">
        <a
          href="mailto:nguyenhuylong.dev@gmail.com"
          className="transition-smooth contact-header"
        >
          <RiMailLine size={16} />
          <span>nguyenhuylong.dev@gmail.com</span>
        </a>
        <a href="tel:0967568207" className="transition-smooth contact-header">
          <RiSmartphoneLine size={16} />
          <span>+84 967 568 207</span>
        </a>
      </div>
      <div className="flex items-center gap-4 max-md:hidden">
        <a
          href="https://www.facebook.com/profile.php?id=61572148625585&locale=vi_VN"
          className="transition-smooth contact-social"
        >
          <RiFacebookFill size={16} />
        </a>
      </div>
    </div>
  );
}
