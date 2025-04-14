'use client';
import React from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Shell } from '@/components/shell';
import { ProductImageCarousel } from '@/components/product-image-carousel';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProductCard } from '@/components/product-card';
import { AddToCartForm } from './_components/add-to-cart-form';

const ProductPage = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Shell className="flex container items-center mx-auto justify-between w-full">
      <div className="flex container flex-col gap-8 md:flex-row md:gap-16">
        <ProductImageCarousel
          className="w-full md:w-1/3"
          images={[
            {
              id: '1',
              name: 'a',
              url: '/images/1.webp',
            },
            {
              id: '1',
              name: 'a',
              url: '/images/1.webp',
            },
            {
              id: '1',
              name: 'a',
              url: '/images/1.webp',
            },
          ]}
          options={{
            loop: true,
          }}
        />
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">Product Name</h2>
            <p className="text-base text-muted-foreground">Product Price</p>

            <Link
              href={`/products?store_ids`}
              className="line-clamp-1 inline-block text-base text-muted-foreground hover:underline"
            >
              Store Name
            </Link>
          </div>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">in stock</p>
          <div className="flex items-center justify-between">Rating toDo</div>

          <AddToCartForm productId="1" showBuyNow={true} />

          <Separator className="mt-5" />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="description"
          >
            <AccordionItem value="description" className="border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                'No description is available for this product.'
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Separator className="md:hidden" />
        </div>
      </div>
    </Shell>
  );
};

export default ProductPage;
