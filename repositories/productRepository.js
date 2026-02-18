import products from "@/lib/db";

export function getAllProducts() {
    return products;
}


export function createProduct(name) {

    const newProduct = {
        id: Date.now(),
        name,
    
    };
    products.push(newProduct)
    return newProduct;
}


export function deleteProduct(id) {
    const index = products.findIndex(p => p.id == id);

    if (index !== -1) {
        products.splice(index, 1);
     
    }
}