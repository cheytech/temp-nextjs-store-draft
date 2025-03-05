import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LuShoppingCart } from 'react-icons/lu'

function CartButton() {
  const numItemsInCart = 9; // Replace with actual logic to fetch cart count if needed

  return (
    <Button asChild variant="outline" size="icon" className="flex justify-center items-center">
      <Link href="/cart">
        <LuShoppingCart />
        <span className="relative -top-3 -right-1 bg-primary text-white rounded-full h-5 w-10 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
