import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyComments, SnippylyCommentsSidebar, SnippylyRecorderControlPanel, SnippylyRecorderNotes, SnippylyHuddle, SnippylyTags } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    <SnippylyProvider apiKey="K0klwhmHHauN8GMHDbch">
      {/**
       * Snippyly Code Example
       * Feature: Comments -- Step #1
       * Feature: Recorder -- Step #1
       * Feature: Live Cursors -- Step #1
       * Feature: Huddle -- Step #1
       */}
      <SnippylyCommentsSidebar />
      <SnippylyComments />
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <SnippylyCursor />
      <SnippylyHuddle />
      <SnippylyTags />
      <App />
    </SnippylyProvider>
  </React.StrictMode>
);