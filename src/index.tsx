import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyComments, SnippylyRecorderControlPanel, SnippylyRecorderNotes, SnippylyHuddle } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Snippyly Code Example
       * Feature: Comments -- Step #1
       * Feature: Recorder -- Step #1
       * Feature: Live Cursors -- Step #1
       * Feature: Huddle -- Step #1
       */}
    <SnippylyComments />
    <SnippylyRecorderControlPanel />
    <SnippylyRecorderNotes />
    <SnippylyCursor />
    <SnippylyHuddle />
    <App />
  </SnippylyProvider>
);