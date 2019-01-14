const Welgo = require("welgo");
const Page = require("../components/page");
const ContactForm = require("../components/contactForm");

module.exports = function AboutPage() {
  return (
    <Page>
      <div class={"container"}>
        <h1 class={"title"}>{"About"}</h1>
        <img class={"about-image"} src={"/about.jpg"} />
        <p>
          I've been a traditional artist for nearly as long as I've been a human
          being and have been a photographer since my teenage years when I
          decided my hero in life was Linda McCartney. Music has been a passion
          that I express mostly through guitar covers and singing along to the
          classics, but I have written a song or two and hope to write more.
        </p>
        <p>
          When I'm not creating the more traditional arts, crafts and sewing are
          my calling. Creating patterns for dresses I've seen in old classic
          films or just knitting along to something I liked on the internet, I'm
          never without a new working creation.
        </p>
        <p>
          Travel is another joy in my life and I plan to share stories of my
          journeys and aspirations here, showing off my travel photography along
          the way.
        </p>
        <p>
          With this website, I have a space to collect and organise all that is
          me. For my enjoyment and that of others.
        </p>
        <ContactForm />
      </div>
    </Page>
  );
};
