import './Body.style.css';
import '../../styles/variable-color.css';

export default function Body() {
  return (
    <div className="container-body">
      <div className="background-grid-container">
        <div className="grid-item bg-cyan"></div>
        <div className="grid-item bg-red"></div>
        <div className="grid-item bg-red"></div>
        <div className="grid-item bg-cyan"></div>
        <div className="grid-item bg-green"></div>
        <div className="grid-item bg-orange"></div>
        <div className="grid-item bg-grey"></div>
        <div className="grid-item bg-grey"></div>
        <div className="grid-item bg-orange"></div>
      </div>
      <div className="content"></div>
    </div>
  );
}
