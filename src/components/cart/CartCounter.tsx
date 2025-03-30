import { itemsInCart } from "@/store";
import "@/styles/global.css";
import { CartCookiesClient } from "@/utils";
import { useStore } from '@nanostores/react'
import { useEffect } from "react";

export const CartCounter = () => {
    const $itemsInCart = useStore(itemsInCart)

    useEffect(() => {
        const cart = CartCookiesClient.getCart();
        itemsInCart.set(cart.length);
    }, [])

    return (
        <a href="/cart" className="relative inline-block right-7">
            {
                $itemsInCart > 0 && (
                    <span className="absolute -top-1 -right-3 flex justify-center items-center bg-blue-600 text-white text-xs rounded-full w-5 h-5">
                        {$itemsInCart}
                    </span>
                )
            }
            <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="2em" viewBox="0 0 256 256"><path fill="#000" d="M104 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16m88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m47.71-125.86l-25.64 92.28A24.06 24.06 0 0 1 191 184H92.16A24.06 24.06 0 0 1 69 166.42L33.92 40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 7.71 5.86L57.19 64H232a8 8 0 0 1 7.71 10.14M221.47 80H61.64l22.81 82.14a8 8 0 0 0 7.71 5.86H191a8 8 0 0 0 7.71-5.86Z"></path></svg>
        </a>

    )
}