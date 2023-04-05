import NavigationBar from "@/components/navigation.bar";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css"
import Theaters from "./theaters";
import Movies from "./movies";

export async function getServerSideProps() {
  const theaterReguest = await fetch("http://localhost:8181/theaters/list");
  const theaterData = await theaterReguest.json();

  console.log(theaterData);

  return {
    props: {
      theater: theaterData,
    }
  }
}

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? 'client' : 'server';

  return (
    <div className={styles.main}>
      <NavigationBar />
      {/* <div>Welcome</div >
      <div>You're currently on the {side} - side</div> */}
      <Movies />

    </div>

  )
}
