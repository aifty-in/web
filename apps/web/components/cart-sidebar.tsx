import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Button } from './ui/button';
import { IoCartOutline } from 'react-icons/io5';

export const CartSiderBar = ({ trigger }: { trigger: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          {trigger}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="">
          <SheetTitle className="text-xl px-2 mt-2 border-b pb-3">
            Cart
          </SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col space-y-1 items-center justify-center text-sm font-semibold text-muted-foreground">
          <IoCartOutline className="size-18 mb-2" />
          <p>Your cart is empty</p>
          <p>Added items will be displayed here !</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
