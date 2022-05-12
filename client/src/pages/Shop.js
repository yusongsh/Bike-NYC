import React from "react";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";
import "../style/shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../components/ScrollToTop";

function Shop() {
  return (
    <>
      <Nav1 />

      <div className="Shop-Container">
        <div className="shop-wide">
          <div className="shop-wide-main">
            <div className="shop-wide-media"></div>
            <div className="shop-wide-text">
              <h3>Editor's choice: Bikes To Buy 👉🏻 </h3>
              <h6>Bike Above: Specialized Allez custom build</h6>
            </div>
          </div>
        </div>

        <div className="shop-thin">
          <div className="shop-thin-title">
            <p>
              "The best bikes made our live easier, kept us exercised, taught us
              something new, and helped make things more entertaining. Here are
              some bikes that our editor really likes. Thank you for reading and
              thanks for making these extraordinary bikes."
            </p>
          </div>
          <div className="shop-thin-main">
            <a
              href="https://www.specialized.com/us/en/s-works-aethos---dura-ace-di2/p/199439?gclid=Cj0KCQjwmuiTBhDoARIsAPiv6L9olK-cDGSxHzDRdWj3aI6eUz94c3RL4GzVwuQGhW_LyGTyiEaPl6EaAjDJEALw_wcB&color=321703-199439"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media"></div>
              <div className="shop-thin-text">
                <h3>S-Works Aethos - Dura-Ace Di2</h3>
                <h5>$14,000</h5>
                <p>
                  Don’t get us wrong, we’re all for racing. Grand Tour top
                  steps, Classic’s Monuments—they’re in our DNA. But sometimes
                  riding simply to ride, riding for the love of riding, is just
                  what we need. And this is what the Aethos lives for. Sure,
                  it’s given nothing up to performance, and happens to be the
                  lightest frame out there, but with no compromise to style…
                </p>
              </div>
            </a>
          </div>

          <div className="shop-thin-main">
            <a
              href="https://www.giant-bicycles.com/us/tcr-advanced-sl-disc-1-2022"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media2"></div>
              <div className="shop-thin-text">
                <h3>TCR ADVANCED SL DISC 1</h3>
                <h5>$9,100</h5>
                <p>
                  THE LATEST GENERATION OF OUR FLAGSHIP ROAD RACING SERIES HAS
                  BEEN WINNING THE BIGGEST RACES IN THE WORLD FOR MORE THAN
                  THREE DECADES. IT’S THE ULTIMATE ALL-ROUNDER FOR THE
                  PERFORMANCE OBSESSED.
                </p>
              </div>
            </a>
          </div>

          <div className="shop-thin-main">
            <a
              href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/domane/domane-lt/domane-lt-9/p/35761/?colorCode=black"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media3"></div>
              <div className="shop-thin-text">
                <h3>Domane+ LT 9</h3>
                <h5>$12,549</h5>
                <p>
                  Domane+ LT 9 is a high-end carbon drop-bar electric bike
                  designed for roadies who want an authentic road bike
                  experience with an extra boost. The sleek and efficient Fazua
                  drive system kicks things up a notch when you need it—like
                  riding into a headwind or beating your buddy up a climb—but
                  doesn't drag or hold you back when it's not in use. You also
                  get the high-performance benefits of Shimano's best wireless
                  electronic drivetrain, all-new Dura-Ace Di2.
                </p>
              </div>
            </a>
          </div>

          <div className="shop-thin-main">
            <a
              href="https://www.cannondale.com/en-us/bikes/electric/e-mountain/moterra-neo-lt/moterra-neo-carbon-lt-2-c25572u"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media4"></div>
              <div className="shop-thin-text">
                <h3>Carbon LT 2</h3>
                <h5>$7,300</h5>
                <p>
                  Breaking Boundaries of how an E-MTN bike handles, Moterra Neo
                  LT is in a league of its own. It’s a big, long travel
                  e-mountain bike that rides like a snappy trail bike - agile
                  and quick on the climbs, stable and composed on even the
                  nastiest descents. It’s the kind of machine that makes you a
                  better rider, wherever you ride.
                </p>
              </div>
            </a>
          </div>

          <div className="shop-thin-main">
            <a
              href="https://www.cannondale.com/en-us/bikes/electric/e-mountain/moterra-neo-lt/moterra-neo-carbon-lt-2-c25572u"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media5"></div>
              <div className="shop-thin-text">
                <h3>SUPER73-RX MOJAVE</h3>
                <h5>$3,695</h5>
                <p>
                  The SUPER73-RX Mojave showcases all of SUPER73’s iconic
                  features; the powerful R-series drive system, along with
                  upgraded brakes and fully adjustable dual suspension, making
                  the RX our top-of-the-line performance model. Fitted with our
                  GRZLY All -Terrain Tires, the RX Mojave is comparable to none
                  when it comes to off-road trail riding.
                </p>
              </div>
            </a>
          </div>

          <div className="shop-thin-main">
            <a
              href="https://www.cannondale.com/en-us/bikes/electric/e-mountain/moterra-neo-lt/moterra-neo-carbon-lt-2-c25572u"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media6"></div>
              <div className="shop-thin-text">
                <h3>Colnago Master</h3>
                <h5>$$$$ unknown</h5>
                <p>
                  The SUPER73-RX Mojave showcases all of SUPER73’s iconic
                  features; the powerful R-series drive system, along with
                  upgraded brakes and fully adjustable dual suspension, making
                  the RX our top-of-the-line performance model. Fitted with our
                  GRZLY All -Terrain Tires, the RX Mojave is comparable to none
                  when it comes to off-road trail riding.
                </p>
              </div>
            </a>
          </div>

          <div className="shop-thin-main">
            <a
              href="https://www.cannondale.com/en-us/bikes/electric/e-mountain/moterra-neo-lt/moterra-neo-carbon-lt-2-c25572u"
              target="_blank"
              rel="noreferrer"
            >
              <div className="shop-thin-media7"></div>
              <div className="shop-thin-text">
                <h3>State Bicycle - Steel line</h3>
                <h5>$549</h5>
                <p>
                  The 4130 Steel Line earned its namesake from the double-butted
                  4130-grade chromoly steel used on the frame and fork that
                  maximizes strength without making compromises on weight. Now
                  with completely redesigned geometry to accommodate larger tire
                  clearance and equipped with fork and seat stay rack mounts to
                  be the perfect all-rounder.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="rental-Container">
        <div className="rental-wide">
          <div className="rental-wide-main">
            <div className="rental-wide-media"></div>
            <div className="rental-wide-text">
              <h3>Editor's choice: Bikes For Rent 👉🏻 </h3>
              <h6>Bike Above: Citibike</h6>
            </div>
          </div>
        </div>

        <div className="shop-thin">
          <div className="shop-thin-title">
            <p>
              "Bike rentals are a great introduction to bike culture. A living,
              breathing human connects you with the perfect bike for your plans.
              They give you tips on how to use it and suggest great routes
              around NYC."
            </p>
          </div>
          <div className="shop-thin-main">
            <a href="https://citibikenyc.com/" target="_blank" rel="noreferrer">
              <div className="rental-thin-media"></div>
              <div className="shop-thin-text">
                <h3>CitiBike</h3>
                <h5>$15.42/mo</h5>
                <p>
                  Citi Bike is often the fastest way to get around. Pick up a
                  bike close by, breeze past traffic, and easily drop it off
                  when you’re done.
                </p>
              </div>
            </a>
          </div>
          <div className="shop-thin-main">
            <a
              href="https://www.unlimitedbiking.com/new-york/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rental-thin-media1"></div>
              <div className="shop-thin-text">
                <h3>Unlimited Biking</h3>
                <h5>$40/Day</h5>
                <p>
                  Unlimited Biking presents variety of high-quality Cannondale
                  bikes: comfort, hybrid, tandem (for two people), a variety of
                  kids’ bikes, baby seats and children’s trailers. Our team
                  members are pleased to offer recommendations of specific
                  routes, must-see attractions, and special eatery options. We
                  have everything you need for an all day adventure : a map, a
                  helmet, a bike lock and a basket for your convenience, all
                  free with your rental!
                </p>
              </div>
            </a>
          </div>
          <div className="shop-thin-main">
            <a
              href="https://www.viator.com/tours/New-York-City/1-Hour-Central-Park-Bike-Rental/d687-9892P4?mcid=56757"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rental-thin-media2"></div>
              <div className="shop-thin-text">
                <h3>Central Park Bike Rental</h3>
                <h5>From $17</h5>
                <p>
                  Rent a bike in Central Park, the perfect way to explore this
                  New York City landmark. Located in the heart of Manhattan,
                  Central Park offers miles of tree-shaded bike paths leading to
                  open meadows, lakes and attractions such as the Central Park
                  Zoo. You can select the style of bike that you prefer, with
                  baby seats, baby trailers and tandem bikes also available. All
                  rentals come with a helmet, chain lock, and map. Choose from a
                  two-hour, four-hour or full-day rental. Read more about...
                </p>
              </div>
            </a>
          </div>
          <div className="shop-thin-main">
            <a
              href="https://gorevel.com/mopeds/moped"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rental-thin-media3"></div>
              <div className="shop-thin-text">
                <h3>Revel</h3>
                <h5>Day pass: $38.99</h5>
                <p>
                  Revel is a dockless electric moped sharing startup based in
                  New York City. Founded in 2018 by Frank Reig and Paul Suhey,
                  it first started with a small pilot program in New York, later
                  growing its fleet size in New York and expanding into
                  Washington, D.C.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/yusongshi/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a href="https://github.com/yusongsh" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="mailto:jackshi.sys@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
      <ScrollToTop />
      <Footer1 />
    </>
  );
}

export default Shop;
