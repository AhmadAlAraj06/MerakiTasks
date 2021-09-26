/* i have start coding with wrong way i have code hardcode and i understand the mistake that i doit after i finish the half of the project 
  */




import React from "react";
import "./main.css";
import logo from "./aa.png";
import powerd from "./as.png";
import spring from "./sprin.png";
import camema from "./camema.png";
import sfour from "./3sfour.png";
import post3 from "./post3.png";
import post4 from "./post4.png";
import post5 from "./post5.png";
import post6 from "./post6.png";
import post7 from "./post7.png";
import post8 from "./post8.png";
import post9 from "./post9.png";
import post10 from "./post10.png";

const Header = () => {
  return (
    <div className="App">
      {/* header 1 */}
      <div className="header">
        <img className="logo" src={logo} />

        <img className="powerd" src={powerd} />
        <div class="vl"></div>
        {/* <div className="header22"> */}

        <div className="subscribe">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
          </svg>
        </div>

        <div className="down">
          <div class="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <div class="dropdown-content">
              <a href="#">My Account</a>
              <a href="#">Gifts</a>
              <a href="#">Profile</a>
              <a href="#">My Subscriptions</a>
              <a href="#">My Purchases</a>
              <a href="#">Login</a>
            </div>
          </div>
        </div>

        <div className="font">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </div>

        <div className="cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
        <div className="heart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>

        <div className="geo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>

        <div className="down2">
          <div class="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <div class="dropdown-content">
              <a href="#">Auckland</a>
              <a href="#">Waikato</a>
              <a href="#">Wellington</a>
              <a href="#">Northland</a>
              <a href="#">Manawatu - Wanganui</a>
              <a href="#">Tauranga</a>
              <a href="#">Rotorua - Taupo</a>
              <a href="#">Hawkes Bay</a>
              <a href="#">Christchurch</a>
              <a href="#">Taranaki</a>
              <a href="#">Nelson - Marlborough</a>
              <a href="#">Queenstown - Wanaka</a>
              <a href="#">Dunedin - Invercargill</a>
            </div>
          </div>
        </div>

        <div class="auckland">Auckland</div>
        <div class="sub">Subscribe</div>
      </div>
      {/* header 2 */}
      <div className="header2">
        <div className="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>
          <br />

          <div className="Search2">Home</div>
        </div>

        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <br />
          <div className="Search2">Search</div>
        </div>

        <div className="category">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-border-all"
            viewBox="0 0 16 16"
          >
            <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
          </svg>
          <br />
          <div className="cat">Categories</div>
        </div>

        <div className="shop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>{" "}
          <br />
          <div className="Search22">Shop</div>
        </div>

        <div className="peerson">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <br />
          <div className="Search222">Account</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* img title */}
      <div className="imgt">
        <img className="imgtt" src={spring} />
      </div>
      <br />
      {/* covid 19 uptade */}
      <div className="textt">
        <strong className="strongg"> Covid 19 Update:</strong> We encourage you
        to shop as normal for all your products but shipping delays may occur.
        Stay safe NZ!
      </div>
      <br />
      {/* list menue */}
      <div className="fll">
        <div className="list">
          <h1 className="dis">Discover</h1>
          <hr />
          <h4 className="h3h3">Featured Auckland deals</h4>
          <h4 className="h3h3">Collections</h4>
          <h4 className="h3h3">Escapes</h4>
          <h4 className="h3h3">Picked for You</h4>
          <h4 className="h3h3">Activities, Events & Outdoors</h4>
          <h4 className="h3h3">Store</h4>
          <h4 className="h3h3">Restaurants, Bars, Cafes</h4>
          <h4 className="h3h3">Beauty, Massage & Spa</h4>
          <h4 className="h3h3">House & Garden</h4>
          <h4 className="h3h3">Fitness & Sports</h4>
          <h4 className="h3h3">Automotive</h4>
        </div>

        {/* post 1 */}
        <div className="post2">
          <img className="img2" src={sfour} />
          <div className="info">
            <br />
            <h3 className="h2h">Kiwi Spotting Tour & Stay for Two</h3>
            <br />
            <div class="price">
              <div>from</div>
              <div>$499</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* post 2 */}
        <div className="post1">
          <img className="img1" src={camema} />
          <div className="info">
            <br />

            <h3 className="h2h">Mesh Reusable Face Mask</h3>

            <br />
            <div class="price">
              <div>from</div>
              <div>$9</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* newsletter*/}
      <div class="newsletter1">
        <div class="newsletter">
          <div>
            <h2 className="pnew">
              Get the best deals delivered direct to your inbox each day
            </h2>
          </div>
          <div class="txtbuttons">
            <form class="bbb_newsletter_form">
              {" "}
              <input
                type="email"
                class="bbb_newsletter_input"
                placeholder="Email address"
              />{" "}
            </form>
            <button class="bbb_newsletter_button">Subscribe</button>{" "}
          </div>
        </div>
      </div>

      {/* featured */}

      <div className="featured">
        <h1 className="h1feature">Featured Auckland deals </h1>
        <a className="view">
          View More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>

      {/* posts fetured */}
      <div className="fll2">
        {/* post 3*/}

      <div className="post2">
      <img className="img3" src={post3} />
          <div className="info">
            <br />
            <h3 className="h2h">Kiwi Spotting Tour & Stay for Two</h3>
            <br />
            <div class="price">
              <div>from</div>
              <div>$499</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* post 4 */}
        <div className="post1">
          <img className="img4" src={post4} />
          <div className="info">
            <br />

            <h3 className="h2h">Mesh Reusable Face Mask</h3>

            <br />
            <div class="price">
              <div>from</div>
              <div>$9</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
          </div>
          <br />
        <br />
        <br />     <br />
        <br />
        <br />
        <br />
        <br />
        {/* post 5 */}
          
      <div className="post2">
          <img className="img5" src={post5} />
          <div className="info">
            <br />
            <h3 className="h2h">Kiwi Spotting Tour & Stay for Two</h3>
            <br />
            <div class="price">
              <div>from</div>
              <div>$499</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* post 6 */}
        <div className="post1">
          <img className="img6" src={post6} />
          <div className="info">
            <br />

            <h3 className="h2h">Mesh Reusable Face Mask</h3>

            <br />
            <div class="price">
              <div>from</div>
              <div>$9</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
          </div>
          
        </div>    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <div className="fll2">
        {/* post 7*/}

      <div className="post2">
      <img className="img7" src={post7} />
          <div className="info">
            <br />
            <h3 className="h2h">Kiwi Spotting Tour & Stay for Two</h3>
            <br />
            <div class="price">
              <div>from</div>
              <div>$499</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* post 8 */}
        <div className="post1">
          <img className="img8" src={post8} />
          <div className="info">
            <br />

            <h3 className="h2h">Mesh Reusable Face Mask</h3>

            <br />
            <div class="price">
              <div>from</div>
              <div>$9</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
          </div>
          <br />
        <br />
        <br />     <br />
        <br />
        <br />
        <br />
        <br />
        {/* post 9 */}
          
      <div className="post2">
          <img className="img9" src={post9} />
          <div className="info">
            <br />
            <h3 className="h2h">Kiwi Spotting Tour & Stay for Two</h3>
            <br />
            <div class="price">
              <div>from</div>
              <div>$499</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* post 10 */}
        <div className="post1">
          <img className="img10" src={post10} />
          <div className="info">
            <br />

            <h3 className="h2h">Mesh Reusable Face Mask</h3>

            <br />
            <div class="price">
              <div>from</div>
              <div>$9</div>
            </div>
            <div class="bought">42 bought</div>
          </div>
          </div>
          
        </div>

  

      {/* footer1 */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer11">
        <div className="footer111">
          <h4>Follow us on</h4>
          <div className="svgg1">
            <div className="svgg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <div className="svgg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </div>
            <div className="svgg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
            <div className="svgg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </div>
          </div>

          <h4>Get app exclusive deals</h4>
          <a className="download">Download Our App</a>
        </div>
        <div className="footer112">
          <h4>GrabOne</h4>
          <a className="a">GrabOne Guarantee</a>
          <a className="a">Contact Us</a>
          <a className="a">About Us</a>
          <a className="a">Terms & Returns</a>
          <a className="a">Blog</a>
          <a className="a">Gift Cards</a>
        </div>
        <div className="footer112">
          <h4>My Account</h4>
          <a className="a">My Account</a>
          <a className="a">My Cart</a>
          <a className="a">My Coupons</a>
          <a className="a">FAQ</a>
        </div>
        <div className="footer112">
          <h4>Merchants</h4>
          <a className="a">Run a Deal</a>
          <a className="a">Merchant Centre</a>
        </div>
        <div class="serchbar">
          <h4>Newsletter Signup</h4>
          <h5>
            Sign up for our daily emails and we'll send you all the best deals,
            tailored for you.
          </h5>{" "}
          <input
            type="email"
            class="bbb_newsletter_input1"
            placeholder="Enter email address"
          />{" "}
          <button class="bbb_newsletter_button">Subscribe</button>{" "}
        </div>
      </div>

      {/* footer2 */}

      <div class="main-footer__copyright">
        <a class="main-footer__copyright-content" className="aaaa">
          Privacy Policy
        </a>
        <span class="main-footer__copyright-content">
          © 2021 GrabOne Limited
        </span>
        <a
          className="imgggg"
          href="https://www.nzme.co.nz"
          target="_blank"
          rel="noopener"
        >
          <img src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" />
        </a>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Header;
