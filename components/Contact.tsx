import { useForm, ValidationError } from '@formspree/react';
import { SectionWrapper } from './Wrapper';
import { Button } from './Button';
import { Paragraph } from './Paragraph';
import { Icon } from './Icons';
import Link from 'next/link';

export function ContactForm() {
  const [state, handleSubmit] = useForm('mnqwwopk');
  const containerStyle = 'grid gap-2';

  const ContactButton = () => {
    let formState = 'Submit';
    if (state.submitting) {
      formState = 'Sending...';
    } else if (state.succeeded) {
      formState = 'Sended!';
    }
    const sendingStyle = () => (state.submitting ? 'bg-primary-400/60' : '');
    const buttonStyle = `${sendingStyle()} rounded-lg text-secondary-800 bg-primary-200/50 p-4 disabled:bg-lime-200/60 disabled:text-primary-700 disabled:cursor-not-allowed`;

    return (
      <Button
        variant="primary"
        type="submit"
        disabled={state.succeeded}
        className={buttonStyle}
      >
        {formState}
      </Button>
    );
  };

  const Legend = (): JSX.Element => {
    return (
      <Paragraph className="max-w-3xl xl:ml-8 2xl:ml-12">
        Currently I am looking for a position as a frontend developer, if you
        have any question or just want to chat feel free to send me a message
        and I will get back to you soon as I can!
      </Paragraph>
    );
  };

  const Form = () => {
    const labelStyle = 'text-sm text-secondary-900';
    const inputStyle =
      'px-1 py-2 text-base border border-primary-300/50 focus:outline-none focus:border-primary-500';

    return (
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 p-4 rounded-xl shadow-2xl font-lato max-w-lg w-full"
      >
        <div className={containerStyle}>
          <label htmlFor="name" className={labelStyle}>
            Name <small>(*)</small>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            className={inputStyle}
          />
        </div>
        <div className={containerStyle}>
          <label htmlFor="email" className={labelStyle}>
            Email <small>(*)</small>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your-email@gmail.com"
            required
            className={inputStyle}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={containerStyle}>
          <label htmlFor="message" className={labelStyle}>
            Message <small>(*)</small>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message."
            required
            className={inputStyle}
            rows={4}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <ContactButton />
      </form>
    );
  };

  const SocialNetworks = (): JSX.Element => {
    return (
      <div className="flex flex-col gap-10 pr-4 pt-12 md:pr-8 lg:pr-12">
        <Link href="https://www.linkedin.com/in/manuel-escribano-lpregen/">
          <a title="My LinkedIn profile">
            <Icon iconName="linkedin" size="large" />
          </a>
        </Link>
        <Link href="https://github.com/LPRegen">
          <a title="My GitHub profile">
            <Icon iconName="github" size="large" />
          </a>
        </Link>
      </div>
    );
  };

  return (
    <SectionWrapper id="contact" title="Contact">
      <Legend />
      <div className="flex justify-center">
        <SocialNetworks />
        <Form />
      </div>
    </SectionWrapper>
  );
}
