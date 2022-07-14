import React from "react";
import wb_image from "../resources/website_image.jpeg";
function About() {
  return (
    <div
      id="about"
      className="h-fit-content md:h-screen w-screen flex flex-col justify-center p-11 md:p-32"
    >
      <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
        <div className="md:w-[100%]">
          <h1 className="text-4xl md:text-5xl pt-16 font-bold mb-7">About:</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab
            eaque voluptates rem, dolores nihil facere! Quisquam, tempore ipsum,
            voluptates laboriosam qui nemo incidunt atque temporibus velit in
            itaque explicabo! Sed inventore mollitia sapiente vero vel tempore
            eos enim, veritatis optio, consequatur quibusdam quod earum error ab
            soluta ratione maiores maxime atque minima illo blanditiis corporis
            magni id unde! Autem. Officia odio odit nemo, suscipit fugit sequi
            eius nam aperiam aliquid reiciendis sunt atque enim ex. Quas ea
            repudiandae optio iure, totam est esse modi eos molestiae recusandae
            mollitia obcaecati. Aspernatur atque cum ad tempore laudantium quae
            cumque ratione voluptatibus fuga. Eveniet repudiandae sint, eligendi
            necessitatibus laborum ullam quidem, consequatur eos odio ipsam
            aspernatur quisquam quam porro facilis ratione dolor. Modi
            repellendus tempore animi laudantium eius quidem possimus saepe
            minus aut itaque. Perferendis esse consequuntur impedit, adipisci
          </p>
        </div>
        <div className="w-[100%]">
          <img className="object-cover " src={wb_image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
