import { Button } from "antd";
import Header from "./components/Header";


export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="hero-container">
        <div className="hero-inner-box">
          <div className="hero-content">
            <h1>Hi! 👋 James Doe</h1>
            <p>Lorem ipsus dolor sit amen, something important to say here</p>
            <Button
              className='nav-btn hero-btn-style'
              type="primary">
              Add Check In
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
