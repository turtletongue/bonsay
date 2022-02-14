import Image from 'next/image';

interface ContactsImageProps {
  src: string;
}

export const ContactsImage = ({ src }: ContactsImageProps) => {
  return (
    <div>
      <Image src={src} alt="Beautiful bonsai" width={321} height={440} />
    </div>
  );
};

export default ContactsImage;
