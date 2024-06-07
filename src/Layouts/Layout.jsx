import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

export default function Layout({children}){
    return(
        <>
        <Navbar />
        <div className="h-[90vh]">
            {children}
        </div>
        <Footer />
        </>
    )
}