import { ReactNode } from 'react';

import ContactParagraph from '@components/contact-paragraph.component';

interface ContactSectionProps {
  section: {
    id: number;
    title: string;
    paragraphs: { id: number; content: ReactNode }[];
  };
}

export const ContactSection = ({ section }: ContactSectionProps) => {
  return (
    <div className="my-2">
      <div className="text-primary text-2xl text-center sm:text-left">
        {section.title}
      </div>
      {section.paragraphs.map((paragraph) => (
        <ContactParagraph key={paragraph.id} content={paragraph.content} />
      ))}
    </div>
  );
};

export default ContactSection;
