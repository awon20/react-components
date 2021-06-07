import React from 'react';

const getNextIndex = (images, currentIndex) => {
    if (currentIndex === images.length - 1){
        return 0;
    }
    return currentIndex + 1;
}
class imageChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }
  // 
  componentDidMount(){
        // set ruf eine funktion kontinuerlich bis das intervall erreicht ist
    this.intervalId = setInterval(() => {
        //console.log('tests show images')
      this.changeIMage();
    }, this.props.interval);
  }
  //interval clear
  componentWillUnmount(){
      // this function delete interval 
    clearInterval(this.intervalId);
  }
  // aufruf von State in mehrere Komponenten
  changeIMage(){
      this.setState((state, props) => {
        return {
            imageIndex: getNextIndex(props.images, state.imageIndex)
        }   
    });
 
  }
  render() {
    const currentImage = this.props.images[this.state.imageIndex];
    return (
        <img src={currentImage.src} alt={currentImage.alt}/>
    );
  }
}

export default imageChanger;