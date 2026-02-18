import {

 getAllProducts,

 createProduct,

 deleteProduct

} from "@/repositories/productRepository";



export function fetchProducts(){

  return getAllProducts();

}


export function addProduct(name){

  if(!name){

    throw new Error("Name required");

  }

  return createProduct(name);

}


export function removeProduct(id){

  return deleteProduct(id);

}
