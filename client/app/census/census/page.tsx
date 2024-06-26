import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hello_miami Engineers Survey",
  description: "Miami's Engineering Community",
  openGraph: {
    images: [
      "https://storage.googleapis.com/hello-miami-app/twitter-image.png",
    ],
  },
};

function CensusFormPage() {
  return (
    <div>
      <div data-tf-live="01HTBV8V6EPW3VFPX06KH1WH8P"></div>
      <Script src="//embed.typeform.com/next/embed.js"></Script>
    </div>
  );
}

export default CensusFormPage;
