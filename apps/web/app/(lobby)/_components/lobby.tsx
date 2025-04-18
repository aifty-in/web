import { Icons } from '@/components/icons';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { ContentSection } from '@/components/content-section';
import { ProductCard } from '@/components/product-card';
import db from '@/prisma/db';

const Lobby = async () => {
  const products = await db.product.findMany({
    where: {
      featuredProduct: true,
    },
  });

  return (
    <Shell className="max-w-6xl gap-0 mx-auto p-4 ">
      <PageHeader
        as="section"
        className="mx-auto items-center gap-2 text-center"
        withPadding
      >
        <Link
          href="https://github.com/aifty-in/web"
          target="_blank"
          rel="noreferrer"
          className="animate-fade-up"
          style={{ animationDelay: '0.10s', animationFillMode: 'both' }}
        >
          <Badge
            aria-hidden="true"
            variant="secondary"
            className="rounded-full px-3.5 py-1.5"
          >
            <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" />
            Github
          </Badge>
        </Link>
        <PageHeaderHeading
          className="animate-fade-up mt-2 md:mt-4"
          style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
        >
          AI-Powered NFT Platform
        </PageHeaderHeading>
        <PageHeaderDescription
          className="max-w-[46.875rem] animate-fade-up text-sm"
          style={{ animationDelay: '0.30s', animationFillMode: 'both' }}
        >
          Our AI-driven NFT SaaS platform empowers creators to effortlessly
          mint, manage, and sell their digital assets while leveraging advanced
          analytics and marketing tools.
        </PageHeaderDescription>
        <PageActions
          className="animate-fade-up"
          style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
        >
          <Link href="/aibot" className={cn(buttonVariants())}>
            Create now
          </Link>
          <Link
            href="/dashboard/stores"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            Explore now
          </Link>
        </PageActions>
      </PageHeader>
      <ContentSection
        title="Featured NFTs"
        description="Here are some stunning NFTs"
        href="/products"
        linkText="View all NFTs"
        className="animate-fade-up"
        style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
      >
        {products.map((product) => (
          <ProductCard
            price={product.price}
            title={product.name}
            key={product.id}
          />
        ))}
      </ContentSection>
    </Shell>
  );
};

export default Lobby;
