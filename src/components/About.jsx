import React from "react";
import aboutImg from "../assests/about.jpg";

const About = () => {
  return (
    <div className=" text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className=" md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className=" my-auto mx-6">
            <h2 className=" text-4xl font-bold nb-4 primary-color">About Me</h2>
            <p className=" text-base lg:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              fuga placeat deleniti. Corrupti ea excepturi quod? Explicabo illum
              eum veritatis consectetur perferendis tempore magni, consequuntur
              ab aspernatur quis laboriosam at unde consequatur, earum alias
              illo est, atque quisquam facere tenetur! Quisquam ea pariatur,
              quod voluptatum a quam ut doloremque modi.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          alt="aboutImg"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
