import { FlaskRoundIcon as Flask, Leaf, Globe, ShoppingCart, Shield, Recycle } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: Flask,
      title: "Clinically Studied",
      description: "All products that we offer have undergone lab and safety tests",
    },
    {
      icon: Leaf,
      title: "Vegetarian Friendly",
      description: "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      icon: Globe,
      title: "Made In India",
      description: "Shop local and explore health products made right here in India",
    },
    {
      icon: ShoppingCart,
      title: "Free Shipping",
      description: "We deliver to your door with no shipping costs on your orders",
    },
    {
      icon: Shield,
      title: "No Risk",
      description: "We ensure that all products are safe and within their use-by date",
    },
    {
      icon: Recycle,
      title: "GMO Free",
      description: "Natural, no modified products and derivatives for those who need it",
    },
  ];

  return (
    <div className="max-w-6xl bg-[#1B3B3B] p-8 md:p-12 rounded-3xl ml-4 md:ml-28 -mt-24 md:-mt-52">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-white p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:bg-[#9dd3d8] group-hover:shadow-md">
              <feature.icon className="w-11 h-11 text-[#1B3B3B] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#003366]" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#9dd3d8] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
