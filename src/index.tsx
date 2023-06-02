import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VeltProvider, VeltCursor, VeltComments, VeltCommentsSidebar, VeltRecorderControlPanel, VeltRecorderNotes, VeltHuddle, VeltTags } from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
    {/**
       * Velt Code Example
       * Feature: Comments -- Step #1
       * Feature: Recorder -- Step #1
       * Feature: Live Cursors -- Step #1
       * Feature: Huddle -- Step #1
       */}
    <VeltCommentsSidebar />
    <VeltComments />
    <VeltRecorderControlPanel />
    <VeltRecorderNotes />
    <VeltCursor />
    <VeltHuddle />
    <VeltTags />
    <App />
  </VeltProvider>
);