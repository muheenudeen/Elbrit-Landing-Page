import Image from 'next/image';

export default function Ingredients() {
  const ingredients = [
    {
      title: 'Vitamin C',
      subtitle: 'Vitamin C as ascorbic acid',
      image: '/bn2-2.jpg.png',
      color: 'yellow-100',
    },
    {
      title: 'Vitamin B3',
      subtitle: 'Niacin for healthy gut and skin',
      image: '/h2-b1.jpg.png',
      color: 'teal-100',
    },
    {
      title: 'Magnesium',
      subtitle: 'Boost energy and support muscle function',
      image: '/bn2-3.jpg.png',
      color: 'green-100',
    },
    {
      title: 'Hyaluronic Acid',
      subtitle: 'For smooth, supple and soft skin!',
      image: '/bn2-4.jpg.png',
      color: 'gray-100',
    },
    {
      title: 'Lactobacillus',
      subtitle: 'Invigorate your gut microbiome',
      image: '/bn2-5.jpg.png',
      color: 'amber-100',
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-200 rounded-full translate-y-1/2 translate-x-1/2 opacity-20" />

      <div className="container mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12">
          <h2 className="text-sm font-semibold text-[#1B3B3B] mb-2 ml-10">INGREDIENTS</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-2 md:ml-16 md:mr-16">
          <div className="col-span-1 md:col-span-2 bg-[#EBF6F7] rounded-2xl p-10 flex flex-col justify-center items-start relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-2xl font-semibold text-[#1B3B3B] mb-4">Better Ingredients</h4>
            <p className="text-gray-600 text-base mb-4">
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!

            </p>
            <button className="text-[#1B3B3B] font-semibold text-sm hover:underline">
              Learn More
            </button>
           
          </div>

          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-[#EBF6F7] rounded-2xl p-10 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-[#1B3B3B] mb-2">
                  {ingredient.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">{ingredient.subtitle}</p>
                <button className="text-[#1B3B3B] font-semibold text-sm hover:underline">
                  SEE MORE
                </button>
              </div>

              <div className="absolute right-0 bottom-0 w-52 h-40 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={ingredient.image}
                  alt={ingredient.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
