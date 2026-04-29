import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Archive Visual',
      links: [
        {
          text: 'Pedoman Visual',
          href: getPermalink('/pedoman-visual'),
        },
        {
          text: 'Aset',
          href: 'https://drive.google.com/drive/folders/1eD6SWkEj517ennr5pqDN17n18dXPq77y?usp=sharing',
      target: '_blank'
        },
      ],
    },
    {
      text: 'Struktur Panitia',
      href: '/struktur-panitia',
    },
    {
  text: 'Profil Juri',
  href: '/profil-juri',
},
  ],
};