import Link from "next/link";
import React from "react";

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/yellow">Yellow</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">Blue</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/red">Red</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
