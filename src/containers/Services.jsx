// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import PCBDesign from "../assets/PCB_Design.png";
import MechanicalDesign from "../assets/mechanical-design.webp";
import OnlineWriting from "../assets/online_writing.jpeg";
import HardwareDevelopment from "../assets/Hardware_Development.jpg";

const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-black/30  backdrop-blur-lg py-16 service"
    >
      <SectionHeading subTitle="Services" title="What we offer" />
      <section className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5 place-items-center px-5 tablet:px-10 laptop:px-15">
        <ServiceCard
          image={MechanicalDesign}
          heading="Engineering Excellence"
          body="Precision in Mechanical Design for Optimal System Performance."
        />

        <ServiceCard
          image={PCBDesign}
          heading="Electronic Ingenuity"
          body="Precision PCB Design for Seamless and Captivating Technological Experiences."
        />

        <ServiceCard
          image={OnlineWriting}
          heading="Compelling Content"
          body="Tailor-Made Online Writing for Engaging and Impactful Communication."
        />

        <ServiceCard
          image={HardwareDevelopment}
          heading="Code Craftsmanship"
          body="Seamlessly Integrating Software with Hardware for Optimal Performance."
        />
      </section>
    </article>
  );
};

export default Services;
