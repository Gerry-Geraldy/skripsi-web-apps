import { jumbotron1 } from "../../../../public"

const AboutJumbotron = () => {
  return (
       <section className="relative w-full h-[500px] flex items-center justify-center text-white overflow-hidden">
      <img src={jumbotron1} alt="About Us" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <h1 className="relative text-5xl font-bold z-20">About Us</h1>
    </section>
  )
}

export default AboutJumbotron