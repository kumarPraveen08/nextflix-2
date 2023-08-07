import Footer from "components/footer/Footer";
import "./home.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { items } from "_data";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="wrapper">
        <div className="container">
          <nav>
            <div className="left">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt=""
                onClick={() => navigate("/")}
              />
            </div>
            <div className="right">
              <select className="lang">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              <button>Sign In</button>
            </div>
          </nav>
          <div className="topbar">
            <h2>Unlimited movies, TV shows and more</h2>
            <span>Watch anywhere. Cancel anytime.</span>
            <span>
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
            <div className="signup">
              <input type="text" placeholder="Email address" />
              <button>
                Get Started <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="left">
            <h2>Enjoy on your TV</h2>
            <span>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </span>
          </div>
          <div className="right">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container reverse">
          <div className="left">
            <h2>Download your shows to watch offline</h2>
            <span>
              Save your favourites easily and always have something to watch.
            </span>
          </div>
          <div className="right">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="left">
            <h2>Watch everywhere</h2>
            <span>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </span>
          </div>
          <div className="right">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container reverse">
          <div className="left">
            <h2>Create profiles for kids</h2>
            <span>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </span>
          </div>
          <div className="right">
            <img
              src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <Accordion allowZeroExpanded>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {item.heading} <AddIcon fontSize="large" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="action">
          <span>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="signup">
            <input type="text" placeholder="Email address" />
            <button>
              Get Started <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
