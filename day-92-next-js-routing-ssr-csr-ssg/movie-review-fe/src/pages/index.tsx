import Link from "next/link";
import React from "react";

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
    <div>
      <div>Welcome</div >
      <div>You're currently on the {side} - side</div>
      <Link href="/about">About page</Link>
      <Link href="/contact">Contact page</Link>
      <Link href="/greeting/John?age=25">Greeting page</Link>
      {/* <Link href="/posts/2021-08-01/first-post">Post page</Link> */}
      <Link href={{
        pathname: "/posts/[date]/[slug]",
        query: { date: Date(), slug: "first-post" }
      }}>Post page</Link>
    </div>

  )
}
