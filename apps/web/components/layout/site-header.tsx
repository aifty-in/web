import React from 'react';
import { MainNav } from './main-nav';
import { Button } from '../ui/button';
import { ProductsCombobox } from '../products-combobox';
import { CartSiderBar } from '../cart-sidebar';
import { IoCartOutline } from 'react-icons/io5';

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center mx-auto px-20">
        <MainNav />
        {/* <MobileNav items={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ProductsCombobox />
            <CartSiderBar trigger={<IoCartOutline />} />
            <Button>Sign in</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
