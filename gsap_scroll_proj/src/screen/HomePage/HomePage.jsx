import Content from "./component/content/content"
import ScrollVideo from "./component/scroll-vdo/ScrollVideo"

const HomePage = () => {
  return (
    <main className="!relative">
      <Content/>
      {/* <ScrollVideo/> */}
      <div className="h-screen !bg-red-300">
        Test 1 Hello
      </div>
      <div className="h-screen !bg-red-300 border border-t-2">
        Test 2 Hello
      </div>
      <div className="h-screen !bg-red-300 border border-t-2">
        Test 3 Hello
      </div>

    </main>
  )
}

export default HomePage
