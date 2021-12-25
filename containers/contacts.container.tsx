import Image from 'next/dist/client/image';
import { aboutConfig } from '../variables';

export const Contacts = () => {
  return (
    <div className='w-full mx-auto px-12 sm:px-24 py-6'>
      <div className='grid grid-flow-row auto-cols-fr grid-cols-2'>
        <div>
          <Image
            src='/images/about.jpg'
            alt='Beautiful bonsai'
            width={321}
            height={440}
          />
        </div>
        <div className='flex flex-col justify-between'>
          {aboutConfig.sections.map((section) => (
            <div key={section.id} className='my-2'>
              <div className='text-primary text-2xl text-center sm:text-left'>
                {section.title}
              </div>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.id}
                  className='text-primary text-justify my-4'
                >
                  {paragraph.content}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
