import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div >
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
      The only URL Shortener <br /> you&rsquo;ll ever need! 
      </h2>
      <form className="flex gap-7 text-black justify-center sm:h-14 flex-col sm:flex-row w-full md:w-2/4">
        <input type="url" placeholder="Enter your loooong URL" className=" flex-1 py-4 px-4" />
        <Button>
          Shorten!
        </Button>
      </form>
      <img src="/public/banner.jpg" alt="" />
    </div>
  )
}

export default LandingPage
