'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

interface ProductCardProps {
  imageUrl: String;
  title: String;
  Price: String;
}

export const ProductCard = () => {
  return (
    <Card className="size-full overflow-hidden rounded-lg py-0">
      <CardHeader className=" p-0">
        <AspectRatio ratio={4 / 3} className="relative">
          <Image
            src={'/images/nft1.webp'}
            alt="product image"
            className="object-cover border-b absolute"
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
            loading="lazy"
          />
          <Dialog>
            <DialogTrigger
              className={cn(
                buttonVariants({
                  variant: 'secondary',
                  size: 'icon',
                  className: 'h-8 w-8 shrink-0 absolute bottom-2 right-2',
                })
              )}
            >
              <EyeOpenIcon className="size-4" aria-hidden="true" />
              <span className="sr-only">Preview</span>
            </DialogTrigger>
            {/* <DialogContent className="flex w-full flex-col gap-2 p-0 overflow-visible sm:flex-row">
              <AspectRatio ratio={4 / 3} className="fixed">
                <Image
                  src={'/images/product-placeholder.webp'}
                  alt="product image"
                  className="object-cover border-r w-fit"
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  loading="lazy"
                />
              </AspectRatio>
              <div>
                <DialogTitle>Product name</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis ad saepe in vel corrupti esse maxime accusamus
                  obcaecati, enim corporis iure iste minus aliquam sunt! Unde
                  vero eligendi consequuntur voluptate!
                </DialogDescription>
              </div>
            </DialogContent> */}
          </Dialog>
        </AspectRatio>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="space-y-1.5">
            <CardTitle className="line-clamp-1">NFT 1</CardTitle>
            <CardDescription className="line-clamp-1">$1.99</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              aria-label="Add to cart"
              size="sm"
              className="h-8 w-full rounded-sm"
            >
              Add to cart
            </Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
