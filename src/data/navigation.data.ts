import type { NavListType } from "#/types/navigation.type";

export const navList: NavListType = [
  {
    key: "nav-home",
    title: "home",
    lable: "Trang chủ",
    href: "/",
  },
  {
    key: "nav-departments",
    title: "departments",
    lable: "Chuyên khoa",
    href: "/departments",
  },
  {
    key: "nav-services",
    title: "services",
    lable: "Dịch vụ",
    href: "/services",
  },
  {
    key: "nav-doctors",
    title: "doctors",
    lable: "Đội ngũ bác sĩ",
    href: "/doctors",
  },
  {
    key: "nav-about",
    title: "about",
    lable: "Về chúng tôi",
    href: "/about",
  },
  {
    key: "nav-contact",
    title: "contact",
    lable: "Liên hệ",
    href: "/contact",
  },
];
