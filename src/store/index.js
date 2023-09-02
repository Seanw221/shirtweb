import { proxy } from 'valtio';

const state = proxy({
   intro: true,
   color: '#088F8F',
   isLogoTexture: true,
   isFullTexture: false,
   logoDecal: './mediatechhd.png',
   fullDecal: './mediatechhd.png',
});

export default state;