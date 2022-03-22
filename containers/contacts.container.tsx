import ContactSection from '@components/contact-section.component';
import ContactsImage from '@components/contacts-image.component';
import { aboutConfig } from '@app/variables';

export const Contacts = () => {
  return (
    <div className="w-full px-12 sm:px-24 py-6 flex justify-center items-center">
      <div className="grid max-w-full lg:max-w-7xl justify-center grid-flow-row auto-cols-fr grid-cols-2-fill">
        <div className="mx-auto">
          <ContactsImage src="/images/about.jpg" />
        </div>
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
