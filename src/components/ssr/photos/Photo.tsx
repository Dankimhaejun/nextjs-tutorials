import Image from 'next/image';

export interface PhotoProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Photo = (props: PhotoProps) => {
  return <Image src={props.url} width={600} height={600} alt={props.title} />;
};

export default Photo;
