import Image from 'next/image'

export default function ArticleGrid() {
  const articles = [
    {
      date: '20 APR',
      title: 'The Covid-19 Epidemic In 2022 Is Back',
      image: '/blog3-450x580.jpg.png',
      type: 'supplement'
    },
    {
      date: '20 APR',
      title: 'The Covid-19 Epidemic In 2022 Is Back',
      image: '/blog2-450x580.jpg.png',
      type: 'pills'
    },
    {
      date: '20 APR',
      title: 'The Covid-19 Epidemic In 2023 Is Back',
      image: '/blog3-450x580.jpg.png',
      type: 'supplement'
    },
    {
      date: '17 MAR',
      title: 'Hac hendrerit mus nons semper suspendisse',
      image: '/blog2-450x580.jpg.png',
      type: 'pills'
    },
    {
      date: '20 APR',
      title: 'The Covid-19 Epidemic In 2023 Is Back',
      image: '/blog3-450x580.jpg.png',
      type: 'supplement'
    },
    {
      date: '20 APR',
      title: 'The Covid-19 Epidemic In 2022 Is Back',
      image: '/blog2-450x580.jpg.png',
      type: 'pills'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article 
            key={index} 
            className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              index % 2 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className={`relative ${index % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-2xl"
                sizes={index % 2 === 0 ? "(max-width: 768px) 100vw, 66vw" : "33vw"}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#003366] text-white text-sm font-medium rounded">
                    {article.date}
                  </span>
                </div>
                <h2 className={`text-white font-semibold group-hover:underline decoration-2 underline-offset-2 ${
                  index % 2 === 0 ? 'text-2xl' : 'text-xl'
                }`}>
                  {article.title}
                </h2>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

