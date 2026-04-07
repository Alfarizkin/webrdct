import { useState } from "react"
import Navbar from "../../../shared/components/Navbar";
import FilterSection from "./components/FilterSection";
import ProductsListSection from "./components/ProductsListSection";


export default function Products () {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const HandleFilterClick = (param) => {
        if (selectedFilters.includes(param)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== param));
        } else {
            setSelectedFilters([...selectedFilters, param])
        }
    };
    return (
        <div className="bg-[#EDEDED] flex flex-col">
            <section>
                <Navbar />
            </section>
            <section className="flex flex-row px-16 py-18">
                <FilterSection 
                    selectedFilters={selectedFilters} 
                    HandleFilterClick={HandleFilterClick} 
                />

                <div className="w-3 h-[clamp(361px,2.2vw,389px)] bg-black"></div>

                <div className="flex">
                    <ProductsListSection selectedFilters={selectedFilters} />
                </div>
            </section>
            <section>
                <div className="w-full h-62.5 bg-[#D9D9D9]"></div>
            </section>
        </div>
    )
}