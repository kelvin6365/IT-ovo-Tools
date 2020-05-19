const autoSwitch = () => {
  //TBC  this change only for Marcus to have a demo
  if (window.location.hostname == "localhost") {
    return "http://localhost:3000/api";
  } else if (window.location.hostname == "192.168.1.134") {
    return "http://192.168.1.134:3000/api";
  } else if (window.location.hostname == "smoothly.dev.dreamplugs.com") {
    return "https://smoothly.dev.dreamplugs.com/Smoothly-Backend/public/graphql";
  }
};

export const config = {
  graphqQL_url: autoSwitch(),
};
