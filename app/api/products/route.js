import {

 fetchProducts,

 addProduct

} from "@/services/productService";



export async function GET(){

  const products = fetchProducts();

  return Response.json(products);

}



export async function POST(request){

  const body = await request.json();

  const product = addProduct(body.name);

  return Response.json(product);

}
