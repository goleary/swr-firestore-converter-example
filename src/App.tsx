import React from "react";
import { FuegoProvider } from "@nandorojo/swr-firestore";

import "./App.css";

import { Component } from "./Component";

import fuego from "./CustomFuego";

export default function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <Component />
    </FuegoProvider>
  );
}
