import { Vector } from "./icons/icons";
import { Card } from './Card';
import { useCoffee } from "./useCoffe";
import { useState } from "react";


export default function CoffeList() {
    const { coffee } = useCoffee()
    const [showAllProducts, setShowAllProducts] = useState(true);

    const filteredProducts = showAllProducts ? coffee : coffee.filter(product => product.available);


    const cleanFilter = () => {
        setShowAllProducts({ showAllProducts })
    }

    const handleClick = () => {
        setShowAllProducts(!showAllProducts)
    }

    return (
        <main className="bg-light-black max-w-[400px] md:max-w-[650px] lg:max-w-[960px] m-auto mt-20 rounded-xl">
            <div className="absolute top-12 left-14 md:left-[800px]">
                <Vector />
            </div>

            <h1 className="font-sans text-[32px] text-center text-white pt-9 z-10">Our Collection</h1>
            <p className="text-gray text-center p-7 text-[16px]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <aside className="w-full m-auto flex justify-center content-center p-8">
                <button onClick={cleanFilter} className={`text-white text-[16px] mr-8 text-center ${showAllProducts ? 'bg-gray px-5' : ''} py-3 rounded-lg`}>
                    All Products
                </button>
                <button onClick={handleClick} className={`text-white text-[16px] mr-8 text-center ${showAllProducts ? '' : 'bg-gray px-5'} py-3 rounded-lg`}>
                    Available Now
                </button>

            </aside>
            <div className="w-auto m-auto flex justify-center content-center">
                <Card coffies={filteredProducts} />
            </div>
        </main>
    )
}
