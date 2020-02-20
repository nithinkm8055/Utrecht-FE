                                        import { ProductCategory, ProductDetails } from './interfaces/product.interface';

export const API_END_POINT = 'https:host/';

export const ALL_PRODUCTS:ProductCategory [] = [
    {
    productCategory : 'Mortage',
    products:[{
        name: 'Banking Saving Mortage',
        link: '/product-overview?product=banking_mortage'
    },
    {
        name:'Interest Only',
        link: '/product-overview?product=interest_only'
    }]
},
    {
        productCategory: 'Payments',
        products: [{
            name: 'Payments Account',
            link: '/product-overview?product=payments_account'
        },
        {
            name: 'Debit Card',
            link: '/product-overview?product=debit_card'
        },
            {
                name: 'Quartly Limit',
                link: '/product-overview?product=quartly_limit'
            }
            // ,{
            //     name: 'Debit Card2',
            //     link: '/product-overview?product=debit_card2'
            // }
        ]
    }];

export const PRODUCT_DETAILS: ProductDetails []= [{
    productCategory: 'Mortage',
    productName: 'Banking Saving Mortage',
    productCode: 'banking_mortage',
    productDescription:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
}, {
        productCategory: 'Mortage',
        productName: 'Interest Only',
        productCode: 'interest_only',
        productDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
    }, {
        productCategory: 'Payment',
        productName: 'Payment Account',
        productCode: 'payments_account',
        productDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
    }, {
        productCategory: 'Mortage',
        productName: 'Debit Card',
        productCode: 'debit_card',
        productDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
    },
    {
        productCategory: 'Mortage',
        productName: 'Quartly Limit',
        productCode: 'quartly_limit',
        productDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
    },
    {
        productCategory: 'Payment',
        productName: 'Debit Card2',
        productCode: 'debit_card2',
        productDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reicien'
    }]