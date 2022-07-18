import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  { id: 0, url: 'https://mystickermania.com/cdn/stickers/spongebob/spongebob-doodlebob-me-hoy-minoy-512x512.png' },
  { id: 1, url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86cf185c-ad61-4faa-9c63-de77f6c62a3c/darpccw-a7bfd4a5-aa5d-4bef-8301-8962ce0ab574.png/v1/fill/w_360,h_360,strp/gary_the_snail_by_domejohnny_darpccw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYwIiwicGF0aCI6IlwvZlwvODZjZjE4NWMtYWQ2MS00ZmFhLTljNjMtZGU3N2Y2YzYyYTNjXC9kYXJwY2N3LWE3YmZkNGE1LWFhNWQtNGJlZi04MzAxLTg5NjJjZTBhYjU3NC5wbmciLCJ3aWR0aCI6Ijw9MzYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.d8n9IMJKAAh20L53vE1w1q-EkfLm_ofn9uR-NVGLyYA' },
  { id: 2, url: 'https://www.nextbiography.com/wp-content/uploads/2022/01/Squilliam-Fancyson-Image-1.png' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<Carousel images={images} />);
