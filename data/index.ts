import { defineStore } from "pinia";
import logoBrand from "@/assets/icons/renue_logo_reverse.png";
const state = () => ({});
const getters = {
  getNavigationMenu() {
    const menu: InfNavigationMenu = [
      {
        title: "Thrift with us",
        url: "javascript:void(0)",
        children: [
          {
            title: "Our stores",
            url: "/",
          },
          {
            title: "Re:Nue Online",
            url: "/",
          },
          {
            title: "Re:Nue Community",
            url: "/",
          },
        ],
      },
      {
        title: "Donate",
        url: "javascript:void(0)",
        children: [
          {
            title: "Give small items",
            url: "/",
          },
          {
            title: "Give bulky items",
            url: "/",
          },
          {
            title: "Accepted items",
            url: "/",
          },
        ],
      },
      {
        title: "Impact",
        url: "/",
      },
      {
        title: "Get involved",
        url: "javascript:void(0)",
        children: [
          {
            title: "Volunteer",
            url: "/",
          },
          {
            title: "Re:Nue partners",
            url: "/",
          },
          {
            title: "Join as staff",
            url: "/",
          },
        ],
      },
      {
        title: "About us",
        url: "/",
      },
      {
        title: "Contact",
        url: "/",
      },
    ];
    return menu;
  },
  getFooterMenu() {
    const footer: InfFooterMenu = [
      {
        title: "Company",
        children: [
          {
            title: "FAQs",
            url: "/",
            specialUrl: false,
          },
          {
            title: "About us",
            url: "/",
            specialUrl: false,
          },
          {
            title: "The Salvation Army",
            url: "/",
            specialUrl: false,
          },
        ],
      },
      {
        title: "Join us",
        children: [
          {
            title: "Volunteer",
            url: "/",
            specialUrl: false,
          },
          {
            title: "Corporate partnerships",
            url: "/",
            specialUrl: false,
          },
          {
            title: "Join as staff",
            url: "/",
            specialUrl: false,
          },
        ],
      },
      {
        title: "Contact",
        children: [
          {
            title: "customercare@smm.salvationarmy.org",
            icon: "mdi-email-outline",
            url: "/",
            specialUrl: true,
          },
          {
            title: "+65 6288 5438",
            icon: "mdi-phone-outline",
            url: "/",
            specialUrl: false,
          },
          {
            title:
              "356 Tanglin Road, Singapore 247674 Operation Hours: 8:30 am - 5:30 pm (Mon-Sat)",
            icon: "mdi-map-marker-radius-outline",
            url: "/",
            specialUrl: false,
          },
        ],
      },
    ];
    return footer;
  },
  getCounterList() {
    const counter: InfCounterContent = [
      {
        title: "Stores",
        icon: "SvgIconsStorefront",
        iconColor: "blue",
        value: 4,
      },
      {
        title: "Donation booths",
        icon: "SvgIconsBasket",
        iconColor: "red",
        value: 15,
      },
      {
        title: "Partners",
        icon: "SvgIconsPartners",
        iconColor: "yellow",
        value: 9,
      },
      {
        title: "Community",
        icon: "SvgIconsCommunity",
        iconColor: "blue",
        value: 10000,
        valueAffix: "+",
      },
    ];
    return counter;
  },
  getParallaxList() {
    const parallax: InfParallax = [
      {
        title: "Store",
        image: "images/parallax-store.png",
        ctaText: "Donate your items",
        description:
          "Creating a fun and interesting thrifting experience, targeted at current customers and reaching out to younger, new generations who are interested in thrifting and repurposing.",
      },
      {
        title: "Community",
        image: "images/parallax-community.png",
        ctaText: "Join Re:Nue community",
        description:
          "Our community comprises our volunteers, donors and store loyalty program members. Re:Nue strives to create purpose and engage with our community in a more personal and interactive way to encourage them to give, shop and feel part of doing good.",
      },
      {
        title: "Partners",
        image: "images/parallax-partners.png",
        ctaText: "Be a corporate partner",
        description:
          "Our partners include corporations, shopping centres, condominiums and their respective management teams, schools and town councils. This program emphasizes their social responsibility (ESG programs), empowering good corporate citizenship for sustainability and environmental care and helping them become part of the overall circular economy.",
      },
      {
        title: "Lives",
        image: "images/parallax-lives.png",
        ctaText: "See our impact",
        description:
          "Re:Nue supports the social welfare programs of the broader Salvation Army. As an organisation, we are committed to living by our values, caring for our community and impacting lives in a meaningful way.",
      },
    ];
    return parallax;
  },
  getAccordionList() {
    const accordion: InfAccordion = [
      {
        title: "Purposeful",
        icon: "SvgIconsPurposeful",
        iconColor: "blue",
        content:
          "We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.",
      },
      {
        title: "Passionate",
        icon: "SvgIconsPassionate",
        iconColor: "red",
        content:
          "We are dedicated to serving and fostering meaningful connections with consumers, donors, partners and the community.",
      },
      {
        title: "Caring",
        icon: "SvgIconsCaring",
        iconColor: "yellow",
        content:
          "We care – about our consumers, employees, partners; about the broader community; and about the environment.",
      },
      {
        title: "Committed",
        icon: "SvgIconsAuthentic",
        iconColor: "blue",
        content:
          "We stay true to our values, actions and personality, while embodying honesty and transparency with a touch of fun. We strive to build genuine connections with each individual, so that everyone feels valued.",
      },
      {
        title: "Inclusive",
        icon: "SvgIconsTshirt",
        iconColor: "red",
        content:
          "We cater to diverse tastes, preferences and budgets while delivering goods at excellent quality. At the intersection of accessibility and individuality, there’s something for everyone in our wide collection of items.",
      },
    ];
    return accordion;
  },
  getHeroList() {
    const hero: InfHero = [
      {
        title: "Give. Thrift. Uplift",
        image: "/images/slide-1.png",
        brand: logoBrand,
        ctaText: "Donate your items",
        ctaUrl: "/",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        image: "/images/slide-2.png",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit eros ac faucibus eleifend. Integer sagittis ornare dui non maximus. Fusce quis rhoncus est. Vestibulum enim tortor, aliquam sit amet augue ac, molestie semper dui.",
        ctaText: "Start thrifting",
        ctaUrl: "/",
      },
    ];
    return hero;
  },
};
export const useWebContentStore = defineStore("webcontent-store", {
  state,
  getters,
});
