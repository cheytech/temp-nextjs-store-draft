import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/action';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import { FavoriteToggleButton } from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import React from 'react';

// Define correct type for params
type ParamsType = { id: string };

export default async function SingleProductPage({ params }: { params: ParamsType }) {
  if (!params?.id) return <p>Invalid product ID</p>;

  const product = await fetchSingleProduct(params.id);
  if (!product) return <p>Product not found</p>;

  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
            priority
            className='w-full rounded object-cover'
          />
        </div>
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name} </h1>
            <div className='flex items-center gap-x-2'>
              <FavoriteToggleButton/>
              <ShareButton/>
            </div>
          </div>
          <ProductRating/>
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {dollarsAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart/>
        </div>
      </div>
    </section>
  );
}
