initializeSliders();
activateShowMore();
activateArticle();

function initializeSliders() {
  const sliders = document.querySelectorAll("[data-slider]");

  for (let i = 0; i < sliders.length; i++) {
    makeSlider(sliders[i]);
  }
}

function makeSlider(node) {
  const wrapper = node.firstElementChild;
  const interval = 3500;
  const length = wrapper.childElementCount;
  let position = 0;

  setInterval(() => {
    if (position === length - 1) {
      position = 0;
      wrapper.style.top = 0;
    } else {
      position += 1;
      wrapper.style.top = `-${position * 100}vh`;
    }
  }, interval);
}

// "show more tags" function
// active on the media page
function activateShowMore() {
  const showMoreElement = document.getElementById("show_more_tags");

  if (showMoreElement) {
    const list = showMoreElement.previousElementSibling;
    showMoreElement.addEventListener("click", function(e) {
      const hiddenTags = list.querySelectorAll("li.block__hidden");

      for (let i = 0; i < hiddenTags.length; i++) {
        const hiddenTag = hiddenTags[i];

        hiddenTag.classList.remove("block__hidden");
      }

      showMoreElement.style.display = "none";
    });
  }
}

function activateArticle() {
  let openedImg;
  let img;

  start();

  function clean() {
    openedImg.classList = "magnified";
    img.classList += " fading";

    setTimeout(() => {
      img.classList = "magnified-container";
      img.innerHTML = "";

      openedImg.removeEventListener("click", clean);
      openedImg = undefined;
    }, 150);
  }

  function magnify(e) {
    img.classList += " active";
    const currentImg = e.target;

    const newImg = document.createElement("img");
    newImg.src = currentImg.src;
    newImg.classList = "magnified";
    openedImg = newImg;

    setTimeout(() => {
      newImg.classList += " active";
    }, 0);

    newImg.addEventListener("click", clean);

    img.appendChild(newImg);
  }

  function start() {
    const articleContent = document.getElementById("article_content");

    // if we are not in the article, there is no need to initialize sliders
    if (!articleContent) {
      return;
    }
    const magnifiedContainer = document.createElement("div");
    magnifiedContainer.classList = "magnified-container";
    img = magnifiedContainer;
    document.body.appendChild(magnifiedContainer);
    const images = articleContent.querySelectorAll("img");
    const touchedImages = [];
    for (const image of images) {
      // check if it is first in the row – to pack them in a row
      if (!touchedImages.includes(image)) {
        const { collection } = checkEl({
          collection: [image],
          touched: touchedImages,
          element: image
        });

        if (collection.length > 1) {
          createSlider(collection);
        }
      }

      // add magnify handler
      image.addEventListener("click", magnify);
    }
  }

  function createSlider(images) {
    const slider = document.createElement("div");
    slider.className = "article-slider";
    const lastElement = images[images.length - 1];
    const beforeLink = lastElement.nextElementSibling
      ? lastElement.nextElementSibling
      : lastElement.parentElement;
    const articleParent = beforeLink.parentElement;
    images.forEach(image => {
      const wrapper = document.createElement("div");
      wrapper.className = "image-wrapper";
      wrapper.appendChild(image);
      slider.appendChild(wrapper);
    });
    articleParent.insertBefore(slider, beforeLink);
  }

  function checkEl({ collection, touched, element }) {
    const nextEl = getNextEl(element);

    if (nextEl) {
      touched.push(nextEl);
      return checkEl({
        collection: collection.concat(nextEl),
        touched,
        element: nextEl
      });
    }

    return { collection, touched };
  }

  function getNextEl(element) {
    if (
      element &&
      element.nextElementSibling &&
      element.nextElementSibling.tagName === "IMG"
    ) {
      return element.nextElementSibling;
    }

    const parent = element && element.parentElement;
    const nextEl = parent && parent.nextElementSibling;

    if (nextEl && nextEl.tagName === "IMG") {
      return nextEl;
    }

    const nextElChild = nextEl && nextEl.firstElementChild;

    if (nextElChild && nextElChild.tagName === "IMG") {
      return nextElChild;
    }
  }
}
