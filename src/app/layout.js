import "./globals.css";

export const metadata = {
  title: "Your Agency Name - Shopify Development & Marketing Experts",
  description:
    "Expert Shopify development, marketing analytics, and CRO services tailored to help your e-commerce business grow.",
  keywords:
    "Shopify development, marketing analytics, CRO, e-commerce optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white">{children}</body>
    </html>
  );
}
