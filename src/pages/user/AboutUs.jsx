import {
  AboutDescription,
  AboutJumbotron,
  AboutVideo,
  HistoryTimeline,
  MissionVision,
  TeamMembers,
  Testimonials,
} from "../../components/user/about";

const AboutUs = () => {
  return (
    <section className="dark:bg-gray-900">
      <AboutJumbotron />
      <AboutDescription />
      <AboutVideo />
      <TeamMembers />
      <MissionVision />
      <Testimonials />
      <HistoryTimeline />
    </section>
  );
};

export default AboutUs;
