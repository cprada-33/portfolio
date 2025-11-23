import React from 'react';
import { Prologue } from './components/Prologue';
import { Lexicon } from './components/Lexicon';
import { Anthology } from './components/Anthology';
import { Epilogue } from './components/Epilogue';
import { LiteraryAgent } from './components/LiteraryAgent';
import { TableOfContents } from './components/TableOfContents';
import { Education } from './components/Education';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink antialiased selection:bg-accent selection:text-white">
      <TableOfContents />
      
      <main className="relative">
        {/* Vertical line simulating a margin/gutter */}
        <div className="hidden xl:block absolute left-12 top-0 bottom-0 w-px bg-stone-300 z-0"></div>
        
        <Prologue />
        <Lexicon />
        <Experience />
        <Anthology />
        <Education />
        <Epilogue />
      </main>

      <LiteraryAgent />
    </div>
  );
}

export default App;