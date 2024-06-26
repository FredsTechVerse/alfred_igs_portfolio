import resume from "../assets/MainCV.pdf";
import banner from "../assets/Profile.jpg";
import { SectionHeading } from "../components";

const About = () => {
  return (
    <article
      id="about"
      className="w-full py-12 laptop:py-16 px-5 bg-slate-100  rounded-lg"
    >
      <SectionHeading subTitle="About" title="Who am I" />
      <section className="flex flex-col laptop:flex-row items-center gap-12">
        <figcaption className=" order-1 laptop:order-2 relative w-full laptop:w-[50%] flex flex-col items-center laptop:items-start justify-center py-12 pl-5 text-center ">
          <p className="text-md tablet:text-lg text-center laptop:text-start pt-3 pb-10 ">
            I am a mechatronic engineering student, passionate about integrating
            mechanical, electrical, and computer engineering. Dedicated to
            innovative projects, collaborative learning, and shaping the future
            through cutting-edge technologies.
          </p>

          <a
            href={resume}
            download="Alfred Gichia"
            className="bg-primary hover:bg-red-500 h-12 rounded-full px-4  text-white w-[80%] tablet:w-56 flex flex-row items-center justify-center mx-auto laptop:mx-0"
          >
            View Resume
          </a>
        </figcaption>
        <img
          className="order-2 laptop:order-1 w-full tablet:w-[70%] laptop:w-[40%] aspect-square h-full rounded-lg shadow-lg shadow-slate-400"
          src={banner}
          alt="Banner Image "
        />
      </section>
    </article>
  );
};

export default About;
