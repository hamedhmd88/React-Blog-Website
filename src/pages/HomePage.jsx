import Banner from "../components/Banner"
import BlogCard from "../components/BlogCard"
import BlogPage from "../components/BlogPage"

function HomePage() {
  return (
    <>
      <Banner/>

      <div className=" max-w-7xl mx-auto">
        <BlogPage/>
      </div>
    </>
  )
}

export default HomePage