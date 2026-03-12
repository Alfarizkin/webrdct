import Navbar from "../../shared/components/Navbar";
import GallerySection from "./components/GallerySection";

export default function Gallery () {
    return (
        <div className="bg-[#EDEDED]">
            <section>
                <Navbar />
            </section>
            <section>
                <GallerySection />
            </section>
            <section></section>
        </div>
    )
}