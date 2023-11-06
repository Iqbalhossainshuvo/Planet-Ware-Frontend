import AboutHome from "@/components/AboutHome/AboutHome";
import BookHome from "@/components/BookHome/BookHome";
import FeaturedPlaces from "@/components/FeaturedPlaces/FeaturedPlaces";
import Feature from "@/components/FeaturedVideos/Feature";
import FeaturedVideos from "@/components/FeaturedVideos/FeaturedVideos";
import Header from "@/components/Header/Header";
import HeaderBanner from "@/components/Header/HeaderBanner";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <main>
      <HeaderBanner/>
      <Header />
      <Feature/>
      <AboutHome/>
      <FeaturedPlaces/>
      <FeaturedVideos/>
      <Services/>
      <Testimonials/>
      <LatestBlogs/>
      <BookHome/>
    </main>
  )
}
