import React from 'react'
import Title from './title'
import { css } from '@emotion/react'
import { useForm } from '@formspree/react'

const ContactSection = () => {
  const [state, handleSubmit] = useForm('mjvjydeb')

  if (state.succeeded) {
    return (
      <h4
        css={css`
          text-align: center;
        `}
      >
        Thanks for joining!
      </h4>
    )
  }

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
        <form onSubmit={handleSubmit}>
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
