const _ = (e) => document.querySelector(e);
const init = (elementID, url, callBack, createVideo) => {
  var area = document.getElementById(elementID);
  console.log(area);
  area.innerHTML = "";
  getMedia(area, url, callBack, createVideo);
};

// // create video
// const createVideo = (data, area) => {
//   let v = document.createElement("video");
//   v.id = "instavideo";
//   v.src = data.content;
//   v.controls = true;
//   v.autoplay = true;

//   // create info
//   let info = document.createElement("p");
//   info.textContent = "Click the right button on video and select save as.";

//   area.innerHTML = "";
//   area.appendChild(v);
//   area.appendChild(info);
// };
// // create image
// const createImg = (photo, area) => {
//   // create image
//   let i = document.createElement("img");
//   i.id = "instaImg";
//   i.setAttribute("style", "height: 80vh;max-height: 850px;min-height: 300px;");
//   i.src = photo;
//   area.appendChild(i);

//   //   // create info
//   //   let info = document.createElement("p");
//   //   info.textContent =
//   //     "Click the right button on the image and select save image..";

//   //   area.appendChild(info);
// };

// extract html
const getMedia = (area, url, callBack, createVideo) => {
  area.innerHTML = "<div class='image-placeholder'></div>";
  // get input value
  if (url) {
    fetch(url)
      .then((r) => r.text())
      .then((r) => {
        // render html
        area.innerHTML = r;
        console.log(r);
        const jsonObject = JSON.parse(
          r
            .match(
              /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
            )[1]
            .slice(0, -1)
        );
        console.log(jsonObject);
        const PostPage = jsonObject.entry_data.PostPage;
        const igResources = [];
        PostPage.map((obj) => {
          igResources.push(
            ...obj.graphql.shortcode_media.edge_sidecar_to_children.edges
          );
        });
        console.log(igResources);
        // wait, find meta and create video or image
        let w = setTimeout(() => {
          area.innerHTML = "";
          return callBack(igResources);
          //  return igResources.map((obj) => {
          //     if (obj.node.is_video) {
          //     } else {
          //       createImg(obj.node.display_url, area);
          //     }
          //   });
          //   let v = _('meta[property="og:video"]');
          //   if (v) {
          //     createVideo(v, area);
          //   } else {
          //     let img = _('meta[property="og:image"]');
          //     if (img) {
          //       createImg(photos, area);
          //     } else {
          //       document.body.innerHTML = body;
          //       alert("Error extracting Instagram image / video.");
          //     }
          //   }
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
