import React, { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";

import "../consent.scss";

const CONSENT_KEY = "__wcrichto_consent";

let ConsentForm = () => {
  let ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  });
  return (
    <div className="consent-form" ref={ref}>
      <div className="container">
        <h1>Experiment: Improving the Rust Book</h1>
        <section>
          <h2>What is this?</h2>
          <div className="row">
            <p>
              This website is an experiment by Brown University researchers{" "}
              <a href="https://willcrichton.net/">Will Crichton</a>,{" "}
              <a href="https://gavinleroy.com/">Gavin Gray</a>, and{" "}
              <a href="https://cs.brown.edu/~sk/">Shriram Krishnamurthi</a>. The goal of this
              experiment is to evaluate and improve the content of the Rust Book to help people
              learn Rust more effectively.
            </p>
            <img src="img/experiment/brown-logo.png" width="150" />
          </div>
        </section>
        <section>
          <h2>How does it work?</h2>
          <div className="row">
            <div>
              <p>This website has the same structure as the Rust Book, but modified in two ways:</p>
              <ol>
                <li>
                  <strong>Interactive quizzes are added in each section.</strong> These quizzes help
                  you test your understanding of Rust. The quizzes also help us determine which
                  sections need improvement.
                </li>
                <li>
                  <strong>Some explanations will be changed.</strong> For instance, we will
                  experiment with modifying some of the text, including replacing it with
                  visualizations.
                </li>
              </ol>
            </div>
            <img src="img/experiment/quiz-example.png" width="300" />
          </div>
        </section>
        <section>
          <h2>Do I have to participate?</h2>
          <p>
            No, you are not at all obliged to do so! Participation is entirely optional and you may
            stop using this version at any time you like.
          </p>
        </section>
        <section>
          <h2>Why should I participate? </h2>
          <p>
            We believe these changes will help you learn Rust better than reading the existing Rust
            Book. Your participation may also help every future Rust learner!
          </p>
        </section>
        <section>
          <h2>What data do I have to give you?</h2>
          <p>
            We do not need any personal information about you. The only data we gather are: whenever
            you take a quiz, we record your answers to the quiz. We also use cookies to determine
            when a set of answers are coming from the same browser session. We hope the patterns of
            answers will help us better understand the Rust learning experience.
          </p>
        </section>
        <div className="row">
          <button
            onClick={() => {
              localStorage.setItem(CONSENT_KEY, "YES");
              ref.current!.style.display = "none";
              document.documentElement.style.overflow = "auto";
            }}
          >
            I understand and want to participate
          </button>
          <button
            onClick={() => {
              window.location.href = "https://doc.rust-lang.org/book/";
            }}
          >
            I do not want to participate
          </button>
        </div>
        <section>
          <i>
            Interested in participating in other experiments about making Rust easier to learn?
            Please sign up here:
          </i>{" "}
          <a href="https://forms.gle/U3jEUkb2fGXykp1DA">https://forms.gle/U3jEUkb2fGXykp1DA</a>
        </section>
      </div>
    </div>
  );
};

if (localStorage.getItem(CONSENT_KEY) === null) {
  let el = document.createElement("div");
  document.body.appendChild(el);
  let root = ReactDOM.createRoot(el);
  root.render(<ConsentForm />);
}
