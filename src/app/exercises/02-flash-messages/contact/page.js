"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);

  const onSubmit = (event) => {
    event.preventDefault();
    createToast("Your message was received!", "success")
    router.push("/exercises/02-flash-messages");
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
