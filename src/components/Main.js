require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imgeDatas = require('../data/imageDatas.json');

// 利用自执行函数。把图片名信息转成图片URL路径信息
imgeDatas = (function genImageUrl(imageDATAArr) {
  imageDATAArr.forEach((img, i) => {
    let singleImageData = img;
    singleImageData.imagURL = require('../images/' + singleImageData.fileName);
    imageDATAArr[i] = singleImageData;
  });
  return imageDATAArr;
})(imgeDatas);

class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">
       <section className="img-sec">
         asdasdas
       </section>
       <nav className="controller-nav">
          asdasdas
       </nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
