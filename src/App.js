import "./style.css";
import { Increment } from "./Increment";

export default function App() {
  return (
    <div className="myDiv">
      <Increment />
      <Increment steps={2} />
      <Increment steps={4} />
    </div>
  );
}