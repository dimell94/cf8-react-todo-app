import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {


    return (
        <>
        {/*header*/}
        <Header />
            <div className="container mx-auto pt-24 min-h-[92vh]">
                {children}

            </div>



        {/*footer*/}
            <Footer />
        </>
    )
}

export default Layout;