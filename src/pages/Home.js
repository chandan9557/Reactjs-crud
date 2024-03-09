import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
function Home() {
  const images = [
    { url: "image/natr1.jpg" },
    { url: "image/natr2.jpg" },
    { url: "image/nart3.jpg" },
    { url: "image/nart1.jpg" },
    { url: "image/nart2.jpg" },
  ];

  return (
    <>
      <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <div className="row">
        <div className="left col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3 ">
          <ul class="list-group mt-2 text-center">
            <li class="list-group-item active" aria-current="true">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          <ul class="list-group mt-2 text-center">
            <li class="list-group-item active" aria-current="true">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          <ul class="list-group mt-2 text-center">
            <li class="list-group-item active" aria-current="true">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          <ul class="list-group mt-2 text-center">
            <li class="list-group-item active" aria-current="true">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          <ul class="list-group mt-2 text-center">
            <li class="list-group-item active" aria-current="true">
              An active item
            </li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="right col-sm-12 col-md-6 col-lg-8 col-xl-9 p-3 bg-danger"></div>
      </div>
    </>
  );
}

export default Home;
