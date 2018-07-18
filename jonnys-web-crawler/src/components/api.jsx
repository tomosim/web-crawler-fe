import React from "react";

export const checkWebsiteLinks = urlToCheck => {
  return Promise.all([
    {
      urls: [
        { "https://web-crawler-test1.herokuapp.com/": true },
        { "https://web-crawler-test2.herokuapp.com/": false },
        { "https://random-static-linky-site.herokuapp.com/": true },
        { "https://random-static-linkey-site-02.herokuapp.com/": false }
      ]
    }
  ]).then(urlArr => {
    return urlArr[0];
  });
};
