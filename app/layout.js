export const metadata = {
  title: "Orielle Health Services",
  description: "Clinician-led on-site wound care, clinical and nursing care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
