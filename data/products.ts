import nextId from 'react-id-generator';
import { IProducts } from '../interface';

export const initialDataProduct: IProducts = {
	products: [
    {
      id: nextId(),
      title: "Chamarra Para Hombre Akiral - Gris",
      mark:'adidas',
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449156/piccoletti/products/chamarras/item01/RA41589-2120-G03_3_jxv7lq.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449163/piccoletti/products/chamarras/item01/RA41589-2120-G03_8_jleyts.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg"
      ],
      description:
        "¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.",
      line:'ropa',
      category: "hombre",
      subCategory: 'chamarras',
      oldPrice: 560,
      price: 649,
      quantity: 1
    },
    {
      id: nextId(),
      title: "Chamarra Para Hombre Euralio",
      mark:'adidas',
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449209/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_1_itzp9p.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449218/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_2_fekz16.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449226/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_3_ll4gr4.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449233/piccoletti/products/chamarras/item02/Chaqueta-Para-Hombre-Euralio-Totto-Ra41600-2120-T1E_7_ki2g82.jpg"
      ],
      description:
        "¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.",
      line:'ropa',
      category: "hombre",
      subCategory: 'chamarras',
      oldPrice: 560,
      price: 649,
      quantity: 1
    },
  ],
};
