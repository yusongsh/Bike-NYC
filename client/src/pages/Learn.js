import React from "react";
import Nav1 from "../components/Nav1";
import "../style/learn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer1 from "../components/Footer1";
import ScrollToTop from "../components/ScrollToTop";

function Learn() {
  return (
    <>
      <Nav1 />
      <div className="learn-container">
        <div className="learn-hero">
          <div className="learn-left">
            <div className="learn-left1"></div>
          </div>
          <div className="learn-mid">
            <div className="learn-left2"></div>
            <div className="learn-left3"></div>
          </div>

          <div className="learn-right">
            <h1>BIKE SKILLS 101: LEARN TO RIDE—ADULTS</h1>
            <div className="category">
              <span>Lessons</span>
            </div>
            <h3>OVERVIEW</h3>
            <p>
              Bike Skills 101: Learn to Ride—Adults is a free class for adults
              and mature teens who are ready to ride. Doesn’t matter if you’re
              18 or 80, we’ll get you rolling in no time.
            </p>
            <h3>DETAILS</h3>
            <p>
              <strong>Instructors</strong>: 1 trained instructor
            </p>
            <p>
              <strong>Equipment</strong>: Bicycles and helmets provided to those
              who register online for the class.*
            </p>
            <button className="learn-cta">View Class</button>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/yusongshi/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
              href="https://github.com/yusongsh"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="mailto:jackshi.sys@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>

        <div className="cards">
          <div className="card1">
            <div className="card-content">
              <h2>
                10 Cycling recovery tips: How to make the most of your rest days
              </h2>
              <div className="category">
                <span>Tips</span>
                <span>Guide</span>
              </div>
              <h6>Posted by Team Veloforte on August 25, 2020</h6>
              <p>
                When you’re training for a big event, it’s tempting to cram as
                many miles as possible into the schedule and go harder than you
                should, even on the ‘easy’ rides. But while we all know swapping
                a cycling recovery ride for a Zwift race probably isn’t the best
                idea, it can be harder than it sounds to take your foot off the
                gas...
              </p>
              <a
                href="https://veloforte.com/blogs/fuel-better/10-cycling-recovery-tips"
                target="_blank"
                rel="noreferrer"
              >
                <button className="card-cta">Read More</button>
              </a>
            </div>
            <div className="card1-p"></div>
          </div>
        </div>

        <div className="cards">
          <div className="card1">
            <div className="card-content">
              <h2>Guide to Biking in New York City</h2>
              <div className="category">
                <span>NYC</span>
                <span>LifeStyle</span>
                <span>Guide</span>
              </div>
              <h6>Posted by Brian Sloan. Updated on: 5/22/2019</h6>
              <p>
                New York is one of the most walkable cities in the world, thanks
                in part to Manhattan’s grid-pattern layout. But with more than
                1,200 miles of bike lanes and routes—many of which have been
                added in the past decade—it’s also quite bike-friendly. ...
              </p>
              <a
                href="https://www.nycgo.com/articles/nyc-biking-map-itineraries/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="card-cta">Read More</button>
              </a>
            </div>
            <div className="card2-p"></div>
          </div>
        </div>

        <div className="cards">
          <div className="card1">
            <div className="card-content">
              <h2>The Complete Guide to Riding a Bike in New York City</h2>
              <div className="category">
                <span>NYC</span>
                <span>LifeStyle</span>
                <span>Fitness</span>
              </div>
              <h6>Posted by DAVID COLON Oct 10, 2018</h6>
              <p>
                Hello, and congratulations on your decision to become one of the
                more than 800,000 regular bicyclists in New York City! We’re in
                the midst of a kind of cycling renaissance, with almost half a
                million bike trips made in the five boroughs every day...
              </p>
              <a
                href="https://www.bicycling.com/skills-tips/a23708797/nyc-bike-map/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="card-cta">Read More</button>
              </a>
            </div>
            <div className="card3-p"></div>
          </div>
        </div>

        <div className="cards">
          <div className="card1">
            <div className="card-content">
              <h2>Bike Size Chart – How To Choose? 5 Easy Methods</h2>
              <div className="category">
                <span>Lessons</span>
                <span>Buying</span>
                <span>Personal</span>
              </div>
              <h6>Posted by Jeff Balton - Last updated: March 28th, 2022</h6>
              <p>
                Ordering bikes online is becoming more and more popular because
                there are no shop-keeping or warehouse costs making the cost
                even less! Don’t worry about the fact that you might think you
                have to try your bike first because I can assure you it is
                overrated. And very highly....
              </p>
              <a
                href="https://www.bicycling.com/skills-tips/a23708797/nyc-bike-map/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="card-cta">Read More</button>
              </a>
            </div>
            <div className="card4-p"></div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer1 />
    </>
  );
}

export default Learn;
