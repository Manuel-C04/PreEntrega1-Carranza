const products = [
    {
        id: '1',
        name: 'Abrochadora',
        price: 1000,
        img: 'https://tiendup.b-cdn.net/business/6255/products/gBboOg_610c0e8b2e6ac_large.png',
        stock: 10,
        description: 'Abrochadora'
    }
    ,{
        id: '2',
        name: 'Cuaderno',
        price: 500,
        img: 'http://www.ampos.com/wp-content/uploads/2021/07/Cuaderno-Tapa-Dura-Rojo-Grande-1.jpg',
        stock: 10,
        description: 'Cuaderno'
    }
    ,{
        id: '3',
        name: 'Cuaderno',
        price: 500,
        img: 'http://www.ampos.com/wp-content/uploads/2021/07/Cuaderno-Tapa-Dura-Rojo-Grande-1.jpg',
        stock: 10,
        description: 'Cuaderno'
    }
    ,{
        id: '4',
        name: 'Cuaderno',
        price: 500,
        img: 'http://www.ampos.com/wp-content/uploads/2021/07/Cuaderno-Tapa-Dura-Rojo-Grande-1.jpg',
        stock: 10,
        description: 'Cuaderno'
    }
    
]

export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}