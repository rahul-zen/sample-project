import { NETFLIX_LOGO } from "../../assets/images";
import "./home.scss";

export const SectionOne = () => {
  return (
    <div className="section-one-background">
      <div className="section-one-wrapper">
        <div className="header-wrapper">
          <div>
            <img
              src={NETFLIX_LOGO}
              alt="NETFLIX LOGO"
              className="netflix-logo"
            />
          </div>
          <div className="header-wrapper">
            <div>
              {/* <img src={GLOBE} alt="Globe" /> */}
              <select name="language" id="language" className="language-select">
                <option className="text-wrapper" value="english">
                  English
                </option>
                <option className="text-wrapper" value="hindi">
                  हिन्दी
                </option>
              </select>
            </div>
            <div style={{ paddingLeft: "25px" }}>
              <button className="sign-in-home">Sign In</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-one-body-wrapper">
        <div className="font-type-h1  text-wrapper">Unlimited movies, TV</div>
        <div className="font-type-h1 text-wrapper">shows and more.</div>
        <div className="font-type-h2  text-wrapper">
          Watch anywhere. Cancel anytime.
        </div>
        <div className="font-type-h3 text-wrapper">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="input-btn-wrapper">
          <div className="email-input-home-wrapper">
            <input
              type="email"
              placeholder="Email address"
              className="email-input-home"
            />
          </div>

          <div className="btn-get-started-wrapper">
            <button className="btn-get-started ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
