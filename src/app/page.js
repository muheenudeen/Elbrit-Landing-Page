// pages/index.js
import ArticleGrid from '@/components/articleGrid';
import Features from '@/components/Ingredients';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Ingredients from '@/components/hero';


export default function Home() {
  return (
    <div>

      
      <Header />
      <Ingredients/>
      <Features/>
      <ArticleGrid/>
      <Footer/>
    </div>
  );
}
