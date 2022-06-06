const products = [
    {
        id: '1',
        name:'Huawei Nova 7',
        price: 000,
        category:'celulares',
        img:'..\Images\Celular Huawei Nova 7.jfif',
        stock: 15,
        description:'descrpición de celular',
    },

   /* { id:'2', name:'Huawei P40 Lite', price: 24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'3', name:'Iphone 12',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'4', name:'Iphone 13',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'5', name:'Motorola Edge 20',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'6', name:'Motorola G9 Plus',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'7', name:'Motorola G100',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'8', name:'Samsung A12',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'9', name:' Samsung A51',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'10', name:'Samsung Galaxy Flip 3',price:24, category:'celulares', img:'', stock: 10, description:'description'},
    { id:'11', name:'Notebook Acer',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'12', name:'Notebook AIWA',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Notebook ASUS',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Notebook Banghó',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Notebook Exo',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Notebook HP',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Notebook Novabook',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Notebook NSX',price:24, category:'Notebooks', img:'', stock: 10, description:'description'},
    { id:'13', name:'Airpods i9000',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Huawei Band 3',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Huawei watch',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Samsung Watch 46 mm',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Samsung Watch 2',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Samsung Galaxy Buds 2',price:24, category:'Wearables', img:'', stock: 10, description:'escription'},
    { id:'13', name:'Xiaomi Auriculaes',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Xiomi band 6',price:24, category:'Wearables', img:'', stock: 10, description:'description'},
    { id:'13', name:'Xiaomi Mi Band',price:24, category:'Wearables', img:'', stock: 10, description:'Description'},
]*/

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(Products)
        },2000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout (()=>{
            resolve(Products.finde(prod=> prod.id === id))
        },500)
    })
}
export const getProductByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTime(() =>{
            resolve(Products.filter(prod => prod.category === categoryId ))
                    ),500)
        })
    }
