import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"
function Home() {
const settings = {
className: "center",
infinite: true,
centerPadding: "60px",
swipeToSlide: true,
slidesToShow: 4, // Default for desktop
responsive: [
{
breakpoint: 1024, // Tablet and below
settings: {
slidesToShow: 3, // Show 3 cards on tablets
},
},
{
breakpoint: 768, // Mobile devices
settings: {
slidesToShow: 2, // Show 3 cards on mobiles
},
},
],
afterChange: function (index) {
console.log(
`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
);
},
};
return (
<>
{/* slider image */}
<div className="slider_image-div">
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
         <div className="carousel-item active">
            <img className="img-fluid" src="media/des4.webp" alt="img error"/>
         </div>
         <div className="carousel-item">
            <img className="img-fluid" src="media/des10.jpg" alt="img error"/>
         </div>
         <div className="carousel-item">
            {/* <img className="img-fluid" src="media/des11.jpeg" className="d-block w-100" alt="img error"/> */}
            <img className="img-fluid" src="media/picsart_23.jpg" alt="img error"/>
         </div>
      </div>
   </div>
</div>
{/* colom  */}
<section className="sectionBx pt-5 pb-5 bkgrey">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-lg-3 col-sm-6 col-6">
        <div className="Business-Manufacturer">
          <div className="sectionIcon">
            <img className="img-fluid" src="media/about-icon-1.png"/>
          </div>
            <p>Nature of Business-Manufacturer</p>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-6 col-6">
          <div className="Business-Manufacturer"> 
            <div className="sectionIcon">         
              <img className="img-fluid" src="media/about-icon-2.png"/>
            </div>
            <p>Total Number of Employees- 101 to 500r</p>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-6 col-6">
        <div className="Business-Manufacturer">
          <div className="sectionIcon">
            <img className="img-fluid" src="media/about-icon-3.png"/>
          </div>
            <p>Year of Establishment- 1991</p>
        </div>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-6 col-6">
        <div className="Business-Manufacturer">
          <div className="sectionIcon">
            <img className="img-fluid" src="media/about-icon-4.png"/>
          </div>
            <p>Legal Status Firm- Proprietorship</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="sectionBx pt-5 bkWhite">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="section-title text-center mb-5">
          <h2>Portfolio</h2>
        </div>        
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/inimage1.webp" alt="" />
        </div>      
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/inimage2.webp" alt="" />
        </div>      
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/coton1.png" alt="" />
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/coton2.png" alt="" />
        </div>      
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/coton3.jpg" alt="" />
        </div>      
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/cotton1.jpg" alt="" />
        </div> 
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/cotton2.jpg" alt="" />
        </div> 
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card_image-div">
          <img className="img-fluid" src="media/cotton4.jpg" alt="" />
        </div> 
      </div>
    </div>
  </div>
</section>
<section className="banner_container">
   <img className="img-fluid" src="media/banner.png"/>
</section>
<section className="sectionBx pt-5 pb-5 bkWhite">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center mb-5">
          <h2>Our Products</h2>
        </div>
      </div>
      <div className="col-lg-12">
        <Slider {...settings}>
          <div className="slider_cardimg-div">
            <img  src="media/cotton14.jpg" alt="Cotton Bag 1" />
            {/* 
            <div><button>Cotton Bags</button></div>
            */}
          </div>
          <div className="slider_cardimg-div">
            <img  src="media/inimage11.webp" alt="Cotton Bag 2" />
            {/* 
            <div><button>Cotton Bags</button></div>        
            */}
          </div>
          <div className="slider_cardimg-div">
            <img className="img-fluid" src="media/colom3.jpg" alt="Cotton Bag 3" />
            {/* 
            <div><button>Cotton Bags</button></div>
            */}
          </div>
          <div className="slider_cardimg-div">
            <img className="img-fluid" src="media/colom4.jpg" alt="Cotton Bag 4" />
            {/* 
            <div><button>Cotton Bags</button></div>
            */}
          </div>
          <div className="slider_cardimg-div">
            <img className="img-fluid" src="media/colom6.jpg" alt="Cotton Bag 5" />
            {/* 
            <div><button>Cotton Bags</button></div>
            */}
          </div>
        </Slider>
      </div>
    </div>
  </div>
</section>


<section className="sectionBx pt-5 pb-5 testimonial-bx ">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-12">
        <div className="testimonialBody">
          <div className="Impex_Forbes-div">
            <div className="md_container">
                {/* 
                <h2>Sekawati Impex at Forbes India</h2>
                */}
                <div className="gupata_container">
                  <Link to={"/"}>
                  <img className="img-fluid" src="media/colom14.png" alt=""/></Link>
                </div>
            </div>
          </div>
          <div className="Testimonial_div">
            <h2>Testimonial</h2>
            <div className="text_slider">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                        <p>"Congratulations!!! This is awesome!!! You truly are the Indian BAGMAN! I always liked that Sekawati focused on particular product. Not many business owners can do that. </p>
                        <p> People tend to expand their business in wrong way (in my opinion). And I appreciate your flexibility that you accepted my request for sourcing organic cotton for my bags, even the order was so small back then!"</p>
                        <h5>ASAKO MARUNO</h5>
                        <h6>GREEN TEE , JAPAN</h6>
                      </div>
                      <div className="carousel-item">
                        <p>"Congratulations!!! This is awesome!!! You truly are the Indian BAGMAN! I always liked that Sekawati focused on particular product. Not many business owners can do that. </p>
                        <p> People tend to expand their business in wrong way (in my opinion). And I appreciate your flexibility that you accepted my request for sourcing organic cotton for my bags, even the order was so small back then!"</p>
                        <h5>ASAKO MARUNO</h5>
                        <h6>Vikash  , JAPAN</h6>
                      </div>
                      <div className="carousel-item">
                        <p>"Congratulations!!! This is awesome!!! You truly are the Indian BAGMAN! I always liked that Sekawati focused on particular product. Not many business owners can do that. </p>
                        <p> People tend to expand their business in wrong way (in my opinion). And I appreciate your flexibility that you accepted my request for sourcing organic cotton for my bags, even the order was so small back then!"</p>
                        <h5>ASAKO MARUNO</h5>
                        <h6>Rakesh , JAPAN</h6>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About Company */}
<section className="sectionBx pt-5 pb-5 bkgrey">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-center mb-5">
          <h2>Tell Us What Are You Looking For ?</h2>
        </div>
      </div>
    </div>
    <div className="row bkWhite">
        <div className="col-md-6 youtube_video_box">
          <div className="youtube_video">
              <div className='invoice_Details-container'>
                <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/OalU-s7Pyok?rel=0"
                      title="YouTube video"
                      allowfullscreen
                      ></iframe>
                </div>
              </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="Looking_form-div">
              <label  className="form-label">Name</label>
              <input type="text" className="form-control"/>
              <label  className="form-label">Phone Number</label>
              <input type="Number" className="form-control no-spinner"/>
              <label for="floatingTextarea">Comments</label>
              <textarea className="form-control"></textarea>
              <button type="button" className="btn btn">Message</button>
          </div>
        </div>
    </div>
  </div>
</section>
</>
);
}
export default Home;