import React from "react";
import Form from "./form";
import projeto from "../../assets/images/about.svg";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="page-container page">
        <main data-router-wrapper>
          <section data-router-view="about" class="about">
            <div class="about-content">
              <Form />

              <img src={projeto} alt="home" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
