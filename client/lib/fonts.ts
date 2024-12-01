import localFont from "next/font/local";

export const untitledSans = localFont({
  src: [
    {
      path: "../public/fonts/test-untitled-sans-black-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/test-untitled-sans-black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/test-untitled-sans-bold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/test-untitled-sans-bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/test-untitled-sans-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/test-untitled-sans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/test-untitled-sans-medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/test-untitled-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/test-untitled-sans-regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/test-untitled-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
