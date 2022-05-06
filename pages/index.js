import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
    </>
  );
}
