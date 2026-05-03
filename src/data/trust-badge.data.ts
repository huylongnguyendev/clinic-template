import type { TrustBadgeListType } from "#/types/trust-badge.type";
import { RiShieldCheckLine, RiStarFill, RiTimeLine } from "@remixicon/react";

export const trustBadgeList: TrustBadgeListType = [
  {
    key: "trust-accredited",
    label: "Đạt chuẩn y khoa",
    icon: RiShieldCheckLine,
  },
  {
    key: "trust-emergency",
    label: "Cấp cứu 24/7",
    icon: RiTimeLine,
  },
  {
    key: "trust-rating",
    label: "Đánh giá 4.9/5",
    icon: RiStarFill,
  },
];
