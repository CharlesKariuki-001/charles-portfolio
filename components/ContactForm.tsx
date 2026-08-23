"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moeabzwv";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("sending");

    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-surface p-8 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 font-mono text-lg text-cyan"
            aria-hidden="true"
          >
            ✓
          </span>

          <p className="mt-5 font-mono text-sm text-cyan">
            Message received.
          </p>

          <h3 className="mt-2 font-mono text-xl text-foreground">
            Thanks for reaching out.
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            I&apos;ll read your message and get back to you directly.
          </p>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-7 rounded-full border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:border-cyan hover:text-cyan"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      {/* Form heading */}
      <div className="mb-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-cyan">
          Start here
        </span>

        <h3 className="mt-2 font-mono text-xl text-foreground">
          Tell me what you&apos;re working on.
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          A few sentences are enough. Include the problem, what you need
          built, and any useful context around the project.
        </p>
      </div>

      {/* Honeypot field for basic spam protection */}
      <div
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs text-muted">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-cyan"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs text-muted">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-cyan"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="subject" className="font-mono text-xs text-muted">
          What can I help with?
        </label>

        <select
          id="subject"
          name="subject"
          defaultValue=""
          required
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 focus:border-cyan"
        >
          <option value="" disabled>
            Select an option
          </option>

          <option value="Full-time / contract role">
            Full-time / contract role
          </option>

          <option value="Freelance project">Freelance project</option>

          <option value="Collaboration">Collaboration</option>

          <option value="Technical discussion">
            Technical discussion
          </option>

          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs text-muted">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="What are you trying to build, fix, or understand?"
          className="resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted/60 outline-none transition-colors duration-200 focus:border-cyan"
        />
      </div>

      {/* Submit */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted">
          No pitch deck required. Just explain what you need and I&apos;ll
          take it from there.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-amber px-6 py-3 font-mono text-sm text-background transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message →"}
        </button>
      </div>

      {/* Error */}
      {status === "error" && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-amber/30 bg-amber/5 px-4 py-3"
        >
          <p className="font-mono text-xs leading-5 text-amber">
            The form could not be submitted right now.
          </p>

          <p className="mt-1 text-xs leading-5 text-muted">
            You can email me directly at{" "}
            <a
              href="mailto:charlesmburukariuki@gmail.com"
              className="text-cyan hover:underline"
            >
              charlesmburukariuki@gmail.com
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}