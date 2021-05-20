import React from 'react'
import Title from './title'
import { css } from '@emotion/react'

const ContactSection = () => {
  return (
    <section
      className="section"
      id="contact"
      css={css`
        .contact-form {
          max-width: var(--max-width);
          margin: auto;
          padding: 1rem;
        }

        label,
        input,
        textarea {
          display: block;
          width: 100%;
        }

        input {
          margin: 0.5rem 0;
          padding: 0.5rem;
          border-radius: var(--border-radius);
        }
      `}
    >
      <Title titleName="Contact Us" />
      <div className="contact-form">
        <form>
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" required />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" required />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn btn-large btn-primary submit-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
