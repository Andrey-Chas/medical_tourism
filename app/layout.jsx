import "../styles/globals.css";
import { AuthProvider } from './Providers';

export const metadata = {
  title: "Medical Tourism",
  description: "Combine tourism with medicine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
