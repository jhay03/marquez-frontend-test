import React from "react";
import hero from "../../img/hero.jpg";
const HeroChanges = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <h2>Task 1 : Hero Changes</h2>
        <div className="col-md-8">
          <section className="hero-area text-center d-flex align-items-center justify-content-center container">
            <h1 className="hero-area__title m-0">Home</h1>
          </section>

          <div className="primary-content py-5">
            <div className="container cms-content">
              <p>
                Curabitur ullamcorper ultricies nisi. Pellentesque commodo eros
                a enim. Praesent porttitor, nulla vitae posuere iaculis.
              </p>
              <p>
                Vestibulum fringilla pede sit amet augue. Fusce a quam. Sed
                aliquam ultrices mauris. Ut a nisl id ante tempus hendrerit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident esse ipsum itaque labore enim aspernatur illo ducimus
                natus quibusdam? Porro, labore veritatis obcaecati officiis
                explicabo molestias nobis aut fugiat voluptatibus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <img src={hero} alt={"hero"} />
        </div>
      </div>
    </div>
  );
};

export default HeroChanges;
