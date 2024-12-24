import Image from 'next/image';
import { Pill, Scale, Apple } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#EBF6F7] min-h-screen ">
      <header className="flex justify-between items-center bg-white shadow-sm px-4 md:px-40">
        <img
          src="https://media.licdn.com/dms/image/v2/C5112AQHM3vxRKwe1Pw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1538732227457?e=1740614400&v=beta&t=kplKTI5YSB9yN9lavo2cZTRV9RJT20l94hfrn4_1Nlc"
          alt="Logo"
          width={200}
          height={60}
          className="object-contain"
          loading="lazy"
        />
      </header>

      <main className="flex flex-col items-center text-center p-4 bg-[#9dd3d8]">
        <h1 className="text-4xl md:text-8xl font-bold text-[#003366] mb-6 mt-8">
          Essential Vitamins
        </h1>

        <section className="bg-[#9dd3d8] rounded-lg p-4 md:p-8 max-w-7xl w-full mb-60">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-2">Online Medical Supplies</p>
              <p className="text-lg text-gray-700 mb-4 font-bold">
                Get Your Vitamins & Minerals
              </p>
              <button className="bg-[#003366] text-white py-3 px-6 rounded-lg hover:bg-[#004080] transition-colors">
                Explore
              </button>
            </div>

            <div className="flex-1 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#d3d474] rounded-full" />
              <div className="relative z-10">
                <img
                  src="https://curlaxpharma.com/wp-content/uploads/2023/02/h2-s2.png"
                  alt="Product Image"
                  width={350}
                  height={300}
                  className="mx-auto -mt-5"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-start space-y-8">
              <FeaturePoint
                icon={<Pill className="w-5 h-5" />}
                title="Vitamins"
                description="Increase vitamins and minerals in your diet"
              />
              <FeaturePoint
                icon={<Scale className="w-5 h-5" />}
                title="Weight Loss"
                description="Find scientifically proven solutions"
              />
              <FeaturePoint
                icon={<Apple className="w-5 h-5" />}
                title="Functional Foods"
                description="From protein powders to baby formula"
              />
            </div>
          </div>
        </section>  
      </main>
    </div>
  );
}

function FeaturePoint({ icon, title, description }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-[#003366] text-white flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#003366] text-start">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
