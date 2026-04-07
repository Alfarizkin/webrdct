import { useState } from "react"
import { ListFilter } from 'lucide-react';
import ProductsListSection from "./ProductsListSection";

const FILTER_OPTION = [
    { name: "2D", param: "2d"},
    { name: "3D", param: "3d" },
    { name: "VFX", param: "vfx" },
]

export default function FilterSection ({ selectedFilters, HandleFilterClick }) {

    return (
        <div className="flex flex-col text-[#060606] gap-6">
            <div className="w-full flex flex-row items-center justify-between gap-34.5 pr-11.5">
                <span className="text-[clamp(18px,2.5vw,27px)]">Filter</span>
                <div className="w-[clamp(24px,2vw,37px)]">
                    <ListFilter className="w-full h-auto" strokeWidth={2.5} />
                </div>
            </div>
            <div className="">
                {FILTER_OPTION.map(item => {
                    const isActive  = selectedFilters.includes(item.param);

                    return (
                        <div 
                            key={item.param}
                            onClick={() => HandleFilterClick(item.param)}
                            className="flex flex-row items-center justify-between gap-34.5 px-11.5"
                        >
                            <span className="text-[clamp(18px,2.5vw,27px)]">{item.name}</span>
                            <div 
                                className={`w-[clamp(18px,2.2vw,24px)] h-[clamp(18px,2.2vw,24px)] border-2 border-black rounded-sm transition-colors duration-200
                                    ${isActive ? "bg-black" : "bg-transparent"}
                                    group-hover:border-gray-600`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}