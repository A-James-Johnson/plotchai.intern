
import handcraftImg from '../images/handcraft.png';
import EthnicImg from '../images/ethnic.png';
import HomedecorImg from '../images/homedecor.png';
import AccessoriesImg from '../images/accessories.png';
import GoldenImg from '../images/goldenneckalre.png';
import silverImg from '../images/silverear.png';
import sareeImg from '../images/saree.png';
import kurthiImg from '../images/kurthi.png';
import handovenImg from '../images/handoven.png';
import DecorativeImg from '../images/decorative.png';
import LeatherwalletImg from '../images/leatherwallet.png';
import SunglassImg from '../images/sunglasses.png';



export const categories = [
    {
      id: 1,
      name: 'Handcrafted Jewelry',
      image:  handcraftImg,
    },
    {
      id: 2,
      name: 'Ethnic Wear',
      image: EthnicImg,
    },
    {
      id: 3,
      name: 'Home Decor',
      image: HomedecorImg,
    },
    {
      id: 4,
      name: 'Accessories',
      image: AccessoriesImg,
    },
  ];
  
  export const products = [
    {
      id: 101,
      name: 'Golden Necklace',
      image: GoldenImg,
      price: '$79.99',
      categoryId: 1,
    },
    {
      id: 102,
      name: 'Silver Earrings',
      image: silverImg,
      price: '$49.99',
      categoryId: 1,
    },
    {
      id: 201,
      name: 'Traditional Sari',
      image: sareeImg,
      price: '$129.99',
      categoryId: 2,
    },
    {
      id: 202,
      name: 'Kurti Set',
      image:kurthiImg,
      price: '$89.99',
      categoryId: 2,
    },
    {
      id: 301,
      name: 'Handwoven Rug',
      image: handovenImg,
      price: '$199.99',
      categoryId: 3,
    },
    {
      id: 302,
      name: 'Decorative Vase',
      image: DecorativeImg,
      price: '$59.99',
      categoryId: 3,
    },
    {
      id: 401,
      name: 'Leather Wallet',
      image: LeatherwalletImg,
      price: '$39.99',
      categoryId: 4,
    },
    {
      id: 402,
      name: 'Stylish Sunglasses',
      image: SunglassImg,
      price: '$89.99',
      categoryId: 4,
    },
  ];
  