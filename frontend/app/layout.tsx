import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "LIVWELL",
  description: "Restoring balance in your life by reconnecting your mind with your body. Relax, breathe, release.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
