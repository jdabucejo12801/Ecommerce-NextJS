import { removeProduct } from "@/services/productService";


export async function DELETE(request, { params }){

  const { id } = await params;
  removeProduct(id);

  return Response.json({

    message:"Deleted"

  });

}
