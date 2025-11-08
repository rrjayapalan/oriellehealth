// app/layout.js
import "./globals.css"; // <-- THIS LINE MAKES TAILWIND LOAD

export const metadata = {
  title: "Orielle Health Services",
  description: "Clinician-led on-site wound care, clinical and nursing care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-teal">{children}</body>
    </html>
  );
}
