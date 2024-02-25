import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Suspense } from "react"
import Loading from "./loading"

export default function RootLayout({ children }) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Footer />
        </div>
    )
}