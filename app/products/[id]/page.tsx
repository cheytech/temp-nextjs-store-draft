import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/action';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import { FavoriteToggleButton } from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import React from 'react';
// Main component
export default async function SingleProductPage({ params }: {params:Promise<{id:string}>}) {
  // Validate the product ID
  if (!(await params)?.id) {
    return <p>Invalid product ID</p>;
  }

  // Fetch the product data
  const product = await fetchSingleProduct((await params).id);

  // Handle case where product is not found
  if (!product) {
    return <p>Product not found</p>;
  }

  // Destructure product properties
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      {/* Breadcrumbs */}
      <BreadCrumbs name={name} />

      {/* Product details grid */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* Product image */}
        <div className='relative h-[400px] lg:h-[500px]'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            className='w-full rounded-lg object-cover'
          />
        </div>

        {/* Product information */}
        <div>
          {/* Product name and actions */}
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <div className='flex items-center gap-x-2'>
              <FavoriteToggleButton />
              <ShareButton />
            </div>
          </div>

          {/* Product rating */}
          <ProductRating />

          {/* Company name */}
          <h4 className='text-xl mt-2'>{company}</h4>

          {/* Price */}
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {dollarsAmount}
          </p>

          {/* Description */}
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>

          {/* Add to cart button */}
          <AddToCart />
        </div>
      </div>
    </section>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  // Fetch product IDs from your API or database
  // Example: const products = await fetchAllProductIds();
  // return products.map((product) => ({ id: product.id }));

  // For now, return an empty array (no pre-rendered pages)
  return [];
}