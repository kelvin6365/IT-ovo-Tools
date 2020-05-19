const _ = (e) => document.querySelector(e);
const init = (elementID, url) => {
  var area = document.getElementById(elementID);
  console.log(area);
  getMedia(area, url);
};

// create video
const createVideo = (data, area) => {
  let v = document.createElement("video");
  v.id = "instavideo";
  v.src = data.content;
  v.controls = true;
  v.autoplay = true;

  // create info
  let info = document.createElement("p");
  info.textContent = "Click the right button on video and select save as.";

  area.innerHTML = "";
  area.appendChild(v);
  area.appendChild(info);
};
// create image
const createImg = (data, area) => {
  // create image
  let i = document.createElement("img");
  i.id = "instaImg";
  i.setAttribute("style", "height: 80vh;max-height: 850px;min-height: 300px;");
  i.src = data.content;

  // create info
  let info = document.createElement("p");
  info.textContent =
    "Click the right button on the image and select save image..";

  area.innerHTML = "";
  area.appendChild(i);
  area.appendChild(info);
};

// extract html
const getMedia = (area, url) => {
  area.innerHTML = "<div class='image-placeholder'></div>";
  // get input value
  if (url) {
    fetch(url)
      .then((r) => r.text())
      .then((r) => {
        // render html
        area.innerHTML = r;
        console.log(r);
        // wait, find meta and create video or image
        let w = setTimeout(() => {
          let v = _('meta[property="og:video"]');
          if (v) {
            createVideo(v, area);
          } else {
            let img = _('meta[property="og:image"]');
            if (img) {
              createImg(img, area);
            } else {
              document.body.innerHTML = body;
              alert("Error extracting Instagram image / video.");
            }
          }
          clearTimeout(w);
        }, 200);
      });
  } else {
    _("input").setAttribute(
      "placeholder",
      "Invalid address, use a proper Insagram link"
    );
  }
};
export default init;
