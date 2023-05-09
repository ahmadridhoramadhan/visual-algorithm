import Header from "./header"
import Footer from "./footer"
import Head from "next/head"
import { ReactNode } from "react"

export default function Layout({ children, titlePage }: { children: ReactNode, titlePage: string }) {
    return (
        <>
            <Head>
                <title>{titlePage}</title>
            </Head>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-auto">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}