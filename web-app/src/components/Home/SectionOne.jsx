import React from "react";
import { NETFLIX_LOGO } from "../../assets/images";
import "./home.scss";

export const SectionOne = () => {
  return (
    <div class="section-one-background">
      <div class="section-one-wrapper">
        <div class="header-wrapper">
          <div>
            <img src={NETFLIX_LOGO} alt="NETFLIX LOGO" class="netflix-logo" />
          </div>
          <div class="header-wrapper">
            <div>
              {/* <img src={GLOBE} alt="Globe" /> */}
              <select name="language" id="language" class="language-select">
                <option class="text-wrapper" value="english">
                  English
                </option>
                <option class="text-wrapper" value="hindi">
                  हिन्दी
                </option>
              </select>
            </div>
            <div style={{ paddingLeft: "25px" }}>
              <button class="sign-in-home">Sign In</button>
            </div>
          </div>
        </div>
      </div>
      <div class="section-one-body-wrapper">
        <div class="font-type-h1  text-wrapper">Unlimited movies, TV</div>
        <div class="font-type-h1 text-wrapper">shows and more.</div>
        <div class="font-type-h2  text-wrapper">
          Watch anywhere. Cancel anytime.
        </div>
        <div class="font-type-h3 text-wrapper">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div class="input-btn-wrapper">
          <div class="email-input-home-wrapper">
            <input
              type="email"
              placeholder="Email address"
              class="email-input-home"
            />
          </div>

          <div class="btn-get-started-wrapper">
            <button class="btn-get-started ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
