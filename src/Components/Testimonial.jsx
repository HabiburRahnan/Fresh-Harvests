import Title from "./Title";

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <Title name="Testimonial" title="What Our Customers Say"></Title>
      <p className="text-center space-x-1 ">
        Don't just take our word for it—here's what some of our customers have to <br /> say about their experience with Fresh Harvest:
      </p>

      <div className="grid  md:grid-cols-12  p-16 mx-10 justify-center items-center">
        <div className="md:col-span-4">

          <img
            src="https://i.ibb.co.com/M8YdLkJ/Rectangle-3.png"
            alt="Customer"
            className="w-96 md:h-96"
          />

        </div>

        <div className="md:col-span-8 md:ml-16 md:px-10">
          <p className="text-gray-800 text-lg italic  space-y-4">
            “I absolutely love Fresh Harvest! The quality of their produce is
            outstanding. It’s always fresh, flavorful, and delicious. The
            convenience of ordering online and having it delivered to my
            doorstep saves me so much time. Fresh Harvest has become my go-to
            for all my fruit and vegetable needs.”
          </p>
          <div className="mt-4 font-bold text-gray-900 text-start">Jane Doe <span className="font-normal">Professional Chef</span></div>
        </div>

      </div>

    </div>

  );
};

export default Testimonial;
