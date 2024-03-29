import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flez h-screen flex-col">
            <Header></Header>
            <main className="flex-1">{children}</main>
            <Footer></Footer>
        </div>
    );
}