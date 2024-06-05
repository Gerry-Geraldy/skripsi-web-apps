const AboutVideo = () => {
  return (
    <section>
      <video className="w-full max-w-5xl mx-auto mt-9 p-5 lg:p-0 rounded-lg" controls autoPlay>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default AboutVideo;
