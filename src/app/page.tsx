import BestSellingProducts from "@/components/best-selling-products";
import Categories from "@/components/categories";
import HeroSection from "@/components/hero";
import NewArrival from "@/components/new-arrival";
import OurProducts from "@/components/our-products";
import Products from "@/components/products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Products />
      <Categories />
      <BestSellingProducts />
      <OurProducts />
      <NewArrival />
    </div>
  );
}
