import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyComments, SnippylyRecorderControlPanel, SnippylyRecorderNotes, SnippylyHuddle } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyComments />
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <SnippylyCursor />
      <SnippylyHuddle />
      <App />
    </SnippylyProvider>
  </React.StrictMode>
);