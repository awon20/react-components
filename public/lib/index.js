import ReactDOM from 'react-dom';
import { App } from './app/App';
import './styles.css';
const domTarget = document.querySelector("#my-react-app");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);