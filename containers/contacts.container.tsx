import ContactSection from '@components/contact-section.component';
import ContactsImage from '@components/contacts-image.component';
import { aboutConfig } from '@app/variables';

export const Contacts = () => {
  return (
    <div className="w-full mx-auto px-12 sm:px-24 py-6">
      <div className="grid grid-flow-row auto-cols-fr grid-cols-2">
        <ContactsImage src="/images/about.jpg" />
        <div className="flex flex-col justify-between">
          {aboutConfig.sections.map((section) => (
            <ContactSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
