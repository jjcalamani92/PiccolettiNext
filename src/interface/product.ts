export interface IProduct {
	id: string;
	title: string;
	mark: string;
	image: string[];
	description: string;
	line: string;
	category: string;
	subCategory: string;
	price: number;
	oldPrice: number;
	quantity: number;
}

export interface IProducts {
	products: IProduct[];
}
