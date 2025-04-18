import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Shell } from '@/components/shell';

export const siteConfig = {
  name: 'Skateshop',
  description:
    'An open source e-commerce skateshop build with everything new in Next.js.',
  url: 'https://skateshop.sadmn.com',
  ogImage: 'https://skateshop.sadmn.com/opengraph-image.png',
  mainNav: [
    {
      title: 'Lobby',
      items: [
        {
          title: 'Products',
          href: '/products',
          description: 'All the products we have to offer.',
          items: [],
        },
        {
          title: 'Build a Board',
          href: '/build-a-board',
          description: 'Build your own custom skateboard.',
          items: [],
        },
        {
          title: 'Blog',
          href: '/blog',
          description: 'Read our latest blog posts.',
          items: [],
        },
      ],
    },
  ],
  footerNav: [
    {
      title: 'Credits',
      items: [
        {
          title: 'OneStopShop',
          href: 'https://onestopshop.jackblatch.com',
          external: true,
        },
        {
          title: 'Acme Corp',
          href: 'https://acme-corp.jumr.dev',
          external: true,
        },
        {
          title: 'craft.mxkaske.dev',
          href: 'https://craft.mxkaske.dev',
          external: true,
        },
        {
          title: 'Taxonomy',
          href: 'https://tx.shadcn.com/',
          external: true,
        },
        {
          title: 'shadcn/ui',
          href: 'https://ui.shadcn.com',
          external: true,
        },
      ],
    },
    {
      title: 'Help',
      items: [
        {
          title: 'About',
          href: '/about',
          external: false,
        },
        {
          title: 'Contact',
          href: '/contact',
          external: false,
        },
        {
          title: 'Terms',
          href: '/terms',
          external: false,
        },
        {
          title: 'Privacy',
          href: '/privacy',
          external: false,
        },
      ],
    },
    {
      title: 'Social',
      items: [
        {
          title: 'X',
          href: '/',
          external: true,
        },
        {
          title: 'GitHub',
          href: '/',
          external: true,
        },
        {
          title: 'Discord',
          href: '/',
          external: true,
        },
        {
          title: 'cal.com',
          href: '/',
          external: true,
        },
      ],
    },
    {
      title: 'Lofi',
      items: [
        {
          title: 'beats to study to',
          href: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
          external: true,
        },
        {
          title: 'beats to chill to',
          href: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
          external: true,
        },
        {
          title: 'a fresh start',
          href: 'https://www.youtube.com/watch?v=rwionZbOryo',
          external: true,
        },
        {
          title: 'coffee to go',
          href: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
          external: true,
        },
      ],
    },
  ],
};

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background flex items-center mx-auto">
      <section className="flex items-center justify-center mx-auto py-5">
        <p className="">End of the page ~</p>
      </section>
    </footer>
  );
}
