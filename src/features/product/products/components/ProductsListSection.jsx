import citypack from '../../../../assets/background/products/citypack.png'
import example from '../../../../assets/background/products/example.png'
import sweetland from '../../../../assets/background/products/sweetland.png'
import warehouse from '../../../../assets/background/products/warehouse.png'

const PRODUCT_ITEMS = [
    {
        id: 1,
        image: sweetland,
        title: "Sweet Land",
        price: 10.00,
        filter: ["3d"],
        link: "/sweet-land",
    },
    {
        id: 2,
        image: warehouse,
        title: "Warehouse Pack",
        price: 10.00,
        filter: ["3d", "vfx"],
        link: "/warehouse-pack",
    },
    {
        id: 3,
        image: citypack,
        title: "Lowpoly City Pack",
        price: 10.00,
        filter: ["3d"],
        link: "/lowpoly-city-pack",
    },
    {
        id: 4,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["2d"],
        link: "/sweet-land",
    },
    {
        id: 5,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["3d"],
        link: "/sweet-land",
    },
    {
        id: 6,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["vfx"],
        link: "/sweet-land",
    },
    {
        id: 7,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["2d"],
        link: "/sweet-land",
    },
    {
        id: 8,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["3d"],
        link: "/sweet-land",
    },
    {
        id: 9,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["vfx"],
        link: "/sweet-land",
    },
    {
        id: 10,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["2d"],
        link: "/sweet-land",
    },
    {
        id: 11,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["3d"],
        link: "/sweet-land",
    },
    {
        id: 12,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["vfx"],
        link: "/sweet-land",
    },
    {
        id: 13,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["2d"],
        link: "/sweet-land",
    },
    {
        id: 14,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["3d"],
        link: "/sweet-land",
    },
    {
        id: 15,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["vfx"],
        link: "/sweet-land",
    },
    {
        id: 16,
        image: example,
        title: "Sweet Land",
        price: 10.00,
        filter: ["2d"],
        link: "/sweet-land",
    },
]

export default function ProductsListSection ({ selectedFilters }) {
    const filteredProducts = PRODUCT_ITEMS.filter(item => {
        if (selectedFilters.length === 0) return true;
        
        return item.filter.some(f => selectedFilters.includes(f));
    });

    return (
        <div className="w-full grid grid-cols-5 gap-5 text-[#060606] pl-11.5">
            {filteredProducts.map(item => (
                <div key={item.id} className="flex flex-col gap-2 rounded-[20px] outline-[#656565] outline-[2px] p-3">
                    <img src={item.image} alt={item.title} className="w-[clamp(248px,2.4vw, 248px)] h-[clamp(230px,2.4vw, 230px)] rounded-[12px]" />
                    <h4 className="text-[clamp(8px,2.5vw,24px)]">{item.title}</h4>
                    <span className="text-[clamp(8px,2.5vw,24px)]">{item.price}</span>
                </div>
            ))}
        </div>
    );
}

