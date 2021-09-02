import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Liping",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Sam",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Vintage Blue Chair",
      category: "Chair",
      image: "/images/blue_chair.png",
      currentPrice: 100,
      originalPrice: 100,
      countInStock: 20,
      brand: "Vintage",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Vintage Glorious Chair",
      category: "Chair",
      image: "/images/yellow_chair.png",
      currentPrice: 220,
      originalPrice: 250,
      countInStock: 0,
      brand: "Vintage",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Vinatge Green Chair",
      category: "Chair",
      image: "/images/green_chair.png",
      currentPrice: 78,
      originalPrice: 125,
      countInStock: 15,
      brand: "Vintage",
      rating: 3.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Table Lamp",
      category: "Lamp",
      image: "/images/lamp.png",
      currentPrice: 65,
      originalPrice: 80,
      countInStock: 5,
      brand: "Vintage",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Vintage Sofa",
      category: "Sofa",
      image: "/images/pink_chair.png",
      currentPrice: 139,
      originalPrice: 200,
      countInStock: 12,
      brand: "Adidas",
      rating: 4,
      numReviews: 20,
      description: "high quality product",
    },
    {
      name: "Vintage Long Sofa",
      category: "Sofa",
      image: "/images/green_sofa.png",
      currentPrice: 200,
      originalPrice: 350,
      countInStock: 3,
      brand: "Adidas",
      rating: 4,
      numReviews: 25,
      description: "high quality product",
    },
  ],
};
export default data;