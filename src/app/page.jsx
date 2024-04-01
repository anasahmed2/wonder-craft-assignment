"use client"
import { Button } from "antd";
import Header from "./components/Header";
import Card from "./components/Card";
import CheckInModal from "./components/Modal";
import { useEffect, useState } from "react";
import {
  db,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "../config/Firebase/index.js";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState()

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "checkIns"), orderBy("timestamp", "desc")),
      (querySnapshot) => {
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
       setPost(postData)
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <main className="container">
      <Header />
      <div className="hero-container">
        <div className="hero-inner-box">
          <div className="hero-content">
            <h1>Hi! 👋 James Doe</h1>
            <p>Lorem ipsus dolor sit amen, something important to say here</p>
            <Button
              onClick={() => setModalOpen(true)}
              className='nav-btn hero-btn-style'
              type="primary">
              Add Check In
            </Button>

          </div>
        </div>
      </div>
      <div className="check-in-container">
        <h1>Added CheckIns</h1>
        <div className="checkIn-card-area">
          {post?.map((value, index) => <Card key={index} {...value} />)}
        </div>
      </div>
      <CheckInModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </main>
  );
}
