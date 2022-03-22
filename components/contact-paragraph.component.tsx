import { ReactNode } from 'react';

interface ContactParagraphProps {
  content: ReactNode;
}

export const ContactParagraph = ({ content }: ContactParagraphProps) => {
  return (
    <p className="text-primary text-center lg:text-left my-4">{content}</p>
  );
};

export default ContactParagraph;
