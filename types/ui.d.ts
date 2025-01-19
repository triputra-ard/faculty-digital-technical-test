declare global {
  interface InfQueryParams {
    [key: string]: any;
    docname?: string;
    filters?: string;
    fields?: string;
    page?: string | number;
    limit?: string | number;
  }
  interface InfNavigationMenu extends Array<InfNavigationMenuItem> {}
  interface InfNavigationMenuItem {
    title: string;
    url: string;
    icon?: string;
    children?: InfNavigationMenuItemChildren[];
  }
  interface InfNavigationMenuItemChildren {
    title: string;
    url: string;
    icon?: string;
  }
  interface InfHero extends Array<InfHeroItem> {}
  interface InfHeroItem {
    title: string;
    image: string;
    brand?: string;
    subtitle?: string;
    ctaText: string;
    ctaUrl: string;
  }
  interface InfCounterContent extends Array<InfCounterItem> {}
  interface InfCounterItem {
    title: string;
    icon: string;
    iconColor?: string;
    value: number;
    valueAffix?: string;
    valuePrefix?: string;
  }
  interface InfParallax extends Array<InfParallaxItem> {}
  interface InfParallaxItem {
    title: string;
    image: string;
    description: string;
    ctaText: string;
    ctaActionTo?: string;
  }
  interface InfAccordion extends Array<InfAccordionMenuItem> {}
  interface InfAccordionMenuItem {
    title: string;
    icon: string;
    iconColor?: string;
    content: string;
  }
  interface InfFooterMenu extends Array<InfFooterMenuItem> {}
  interface InfFooterMenuItem {
    title: string;
    children: InfFooterMenuItemChildren[];
  }
  interface InfFooterMenuItemChildren {
    title: string;
    icon?: string;
    url?: string;
    specialUrl: boolean;
  }
}

export {};
