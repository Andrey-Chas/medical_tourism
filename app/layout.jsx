import "../styles/globals.css";

export const metadata = {
  title: "Medical Tourism",
  description: "Combine tourism with medicine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
