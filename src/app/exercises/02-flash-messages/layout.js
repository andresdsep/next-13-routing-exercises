import React from "react";
import ToastShelf from "../../../components/ToastShelf";
import ToastProvider from "../../../components/ToastProvider";
import "./styles.css";

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <ToastShelf />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
