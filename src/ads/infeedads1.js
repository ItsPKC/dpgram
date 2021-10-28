import React from "react";

export default class Infeedads1 extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div className="item">
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-e2-k+3r-6u+3m"
          data-ad-client="ca-pubxxx"
          data-ad-slot="1348946664"
        ></ins>
      </div>
    );
  }
}

// Top <script></script> will be added in index.html after build and before deploy
// <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// Reference https://stackoverflow.com/questions/46035999/how-to-embed-google-adsense-in-react-js
