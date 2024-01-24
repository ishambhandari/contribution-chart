import React from "react";
import { storiesOf } from "@storybook/react";
import { Testing } from "../components/Testing";

// Create a Storybook instance for the "App Test" category
const stories = storiesOf("App Test", module);

// Add a story named "App" to the "App Test" category
stories.add("App", () => {
  // Render the Testing component in the story
  return <Testing />;
});
