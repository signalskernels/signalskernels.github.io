import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Focus Areas',
      links: [
        {
          text: 'AI for Government',
          href: getPermalink('/ai-for-government'),
        },
        {
          text: 'AI for Security',
          href: getPermalink('/ai-for-security'),
        },
        {
          text: 'AI for Education',
          href: getPermalink('/ai-for-education'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'KEEPEM — Agentic Vault',
          href: getPermalink('/keepem'),
        },
      ],
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get in Touch', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Focus Areas',
      links: [
        { text: 'AI for Government', href: getPermalink('/ai-for-government') },
        { text: 'AI for Security', href: getPermalink('/ai-for-security') },
        { text: 'AI for Education', href: getPermalink('/ai-for-education') },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'KEEPEM — Agentic Vault', href: getPermalink('/keepem') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Capabilities',
      links: [
        { text: 'GovTech & Process Automation', href: getPermalink('/ai-for-government') },
        { text: 'NLP Solutions', href: getPermalink('/services') },
        { text: 'Computer Vision', href: getPermalink('/services') },
        { text: 'Audio & Multimodal', href: getPermalink('/services') },
        { text: 'AI & ML Applications', href: getPermalink('/services') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/signals-kernels' },
  ],
  footNote: `
    Copyright © 2025 Signals | Kernels LLC. All rights reserved.
  `,
};
