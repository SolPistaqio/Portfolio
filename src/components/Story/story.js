import React from 'react';
import ReactDOM from 'react-dom';

class MyBio extends React.Component {
  render() {
    return  (<article className="story">
    <h2>Hi! My name's Sol and I'm your dream programmer</h2>
    <p>Even if you don't dream about awesome programmers at night you probably want someone who:</p>
    <ul>
        <li>Can build you a sophisticated website</li>
        <li>Understands SEO and Marketing</li>
        <li>Will turn your business goals into a reality</li>
        <li>Is super easy to deal with. No nerd-speak. Unless you want to ;)</li>
    </ul>
  </article>);
  }
};
ReactDOM.render(
    <MyBio />,
    document.getElementById('app')
  );

class MyPhoto extends React.Component {         
    render() {
      let LePic = './expectations.png';
    const Title = 'Hire good programmer in Riga';
      return  (
        <div> 
        <img onClickCapture = {LePic = './me.png'} onMouseEnter={LePic = './me.png'}
      onMouseLeave={LePic = './expectations.png'} className="photo"
     src = {lePic}
     alt = {Title}
    />
    </div>);
    }
  };

  ReactDOM.render(
    <MyPhoto />,
    document.getElementById('app')
  );

