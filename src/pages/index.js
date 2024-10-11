import React, { useEffect, useState, memo, useRef } from "react"
import { repeat } from "lodash";
import "../styles/global.css";
import icon from "../images/icon.png";

const pageStyles = {
  color: "#D4D4D4",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  whiteSpace: "pre-line",
}
const divStyle = {
  padding: 0,
  margin: 0,
  position: "relative",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const stickyDivStyle = {
  position: "sticky",
  top: 0,
  marginLeft: -96,
  marginRight: -96,
  marginTop: 0,
  marginBottom: 0,
  zIndex: 1000,
  backgroundColor: "#141414",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const linkStyle = {
  color: "#3747D4",
  fontWeight: "bold",
  fontSize: 16,
  textDecoration: "none",
}
const headerLinkStyle = {
  color: "#3747D4",
  fontWeight: "bold",
  textDecoration: "none",
}

const ScrollPositionHandler = (text, posFunction) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const elementRef = useRef(0);
  var windowWidth = 0.0;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(elementRef.current.getBoundingClientRect().y / window.innerHeight);
          setElementWidth(elementRef.current.getBoundingClientRect().width);
          windowWidth = window.innerWidth;
          ticking = false;
        });
        ticking = true;
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, []);

  return (
    <>
      <div>
        <h1 ref={elementRef} style={posFunction(scrollPosition, windowWidth, elementWidth / windowWidth)}>
          {text}
        </h1>
      </div>
      <h1 style={{marginTop: posFunction(scrollPosition, windowWidth, elementWidth / windowWidth).marginTop, marginBottom: posFunction(scrollPosition, windowWidth, elementWidth / windowWidth).marginBottom}}>&nbsp;</h1>
    </>
  )
}

function StickyHeader(text) {
  return (
    <div style={{...stickyDivStyle, display: "flex"}}>
      <h1 style={{paddingLeft: 100,}}>{text}</h1>
    </div>
  )
}

function BlankBlock(lines) {
  var text = "";
  for (var i = 0; i < lines; i++)
    text += "\n";

  return (
    <p>{text}</p>
  );
}

const IndexPage = memo(() => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Welcome to learn-gatsby, a site used by&nbsp;
        <a
          style={headerLinkStyle}
          href="https://github.com/gelastropod"
        >
          gelastropod
        </a>
        &nbsp;to learn Gatsby <i>(obviously)</i>
      </h1>
      <p style={paragraphStyles}>
        Visit my site at&nbsp;
        <a
          style={linkStyle}
          href="https://gelastropod.github.io"
        >
          gelastropod.github.io
        </a>
      </p>
      <div style={{
        position: "absolute",
        top: 300,
        left: 0,
        minHeight: 3440,
        zIndex: 1001,
      }}>
        <a href="https://gelastropod.github.io"><img src={icon} alt="Icon" style={{
        position: "sticky",
        width: "20%",
        padding: 16,
        top: 0,
      }} /></a>
      </div>
      <div style={divStyle}>
        {StickyHeader("This is sticky")}
        {BlankBlock(50)}
        <p>{repeat("-", 198)}</p>
        {ScrollPositionHandler("<<<<<Tidal", (pos, width, elementWidth) => ({
          marginTop: 32,
          marginBottom: 32,
          marginLeft: -96,
          position: "absolute",
          left: Math.max(Math.min(2.0 * Math.pow(pos - 0.5, 3) + 0.2 * (pos - 0.5) + 0.5 - 0.5 * elementWidth, 2.0), -2.0) * width,
        }))}
        <p>{repeat("-", 198)}</p>
        {ScrollPositionHandler("Wave>>>>>", (pos, width, elementWidth) => ({
          marginTop: 32,
          marginBottom: 32,
          marginRight: -96,
          position: "absolute",
          right: Math.max(Math.min(2.0 * Math.pow(pos - 0.5, 3) + 0.2 * (pos - 0.5) + 0.5 - 0.5 * elementWidth, 2.0), -2.0) * width,
        }))}
        <p>{repeat("-", 198)}</p>
        {BlankBlock(1)}
      </div>
      <div style={divStyle}>
        {StickyHeader("Another sticky")}
        {BlankBlock(50)}
        {ScrollPositionHandler("Amazing effect", (pos, width, elementWidth) => ({
          ...headingStyles,
          padding: 20,
          backgroundColor: "#4A9CD6",
          position: "absolute",
          left: Math.max(Math.min(-Math.pow(Math.max(pos - 0.25, 1.0e-9), 3.0), 2.0), -2.0) * width,
          opacity: Math.min(Math.max(Math.pow(1.5 - pos, 3.0), 0.0), 1.0),
        }))}
        {BlankBlock(1)}
      </div>
      <div style={divStyle}>
        {StickyHeader("Last sticky")}
        {BlankBlock(50)}
      </div>
    </main>
  )
});

export default IndexPage

export const Head = () => <title>Learn Gatsby</title>