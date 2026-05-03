import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import appCss from "../styles.css?url";
import Header from "#/components/header/Header";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Trang chủ | Clinic Bazic Template",
      },
      {
        name: "description",
        content:
          "Tìm hiểu thêm về đội ngũ bác sĩ và sứ mệnh của phòng khám Clinic.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://yourclinic.com/" },
      {
        property: "og:title",
        content: "Clinic - Dịch vụ y tế tận tâm",
      },
      {
        property: "og:description",
        content: "Chúng tôi cung cấp dịch vụ chăm sóc sức khỏe tốt nhất.",
      },
      { property: "og:image", content: "https://yourclinic.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      // Apple Touch Icon (cho iPhone/iPad khi lưu ra màn hình chính)
      {
        rel: "apple-icon-touch",
        sizes: "180x180",
        href: "/apple-icon-touch.png",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main className="container-box">{children}</main>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
