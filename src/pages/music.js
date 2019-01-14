const Welgo = require("welgo");
const Page = require("../components/page");

const subscribeImage = "/images/subscribe.png";

module.exports = function MusicPage() {
  const text =
    "I started playing the guitar when I was 7 years old. My dad taught me a few chords and bought me a 3/4 acoustic. I loved it. Then I decided that I wanted to be a bassist, but, bass music just isn't as interesting when you don't have a band, so I got myself a drumset (not a group of friends) and started doing multi-track recordings of my own one-person band. Turns out a lot of people want to be guitar players so I taught my friends some of what I knew and, eventually, started making my own tutorial videos on some of my favourite songs. Tutorial videos without all the unneccessary talk, I might add. My collection of musical instruments is currently an ocean away, but I still have some old videos to upload until I can figure out how to rebuild my militia. Then I'll get back to making my recordings.";

  return (
    <Page>
      <div>
        <div className={"music-container"}>
          <div className={"music-description"}>{text}</div>
          <a
            className={"music-subscribe-link"}
            href="https://www.youtube.com/channel/UCCHXfmeq3OgXKfY0Gqp1-dA"
            target="_blank"
          >
            <img
              className={"music-subscribe-image"}
              src={subscribeImage}
              alt={"My music channel"}
            />
          </a>
        </div>
      </div>
      <div className={"music-link music-videos-container"}>
        <h2>List of my tutorials:</h2>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/UnqtLhuiGlQ"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/PlM-JwNLYDY"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/93efenoGLQ0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/x7F6PjTS7AU"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/8KVlhpn3eYc"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/UPbLyC781Ec"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/74_b4caAvQg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/Jy-LYvDh07o"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/AcmnV2cf3qo"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/B3A2EWAZo5s"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/gcXm28KyDuQ"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/bpwFBB-LN9U"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className={"music-elem-container"}>
          <iframe
            className={"music-elem"}
            src="https://www.youtube.com/embed/2s3VQnHM7vo"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </Page>
  );
};
