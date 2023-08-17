// Ini test dari video tutorial di laptop
// let tesStringOrNumber: string | number;
// tesStringOrNumber = "Mia366"

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("htpps://localhost:5000/products");
  return res.json();
}

export default async function ProductLis() {
  const products: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
