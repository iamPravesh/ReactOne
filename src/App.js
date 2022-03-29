import logo from './logo.svg';
import './App.css';

import ImageAndText from './component/ImageAndText/ImageAndText';
import Image from './component/Image';
import ClassComponent from './component/ClassComponent/ClassComponent';

function App() {
  return (
    <div className="App">
      Hello world first react
      <ImageAndText />
      {/* <Image name='from main app' />
      <ClassComponent /> */}
    </div>
  );
}

export default App;
