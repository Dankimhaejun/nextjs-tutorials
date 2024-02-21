import Photos, {PhotosProps} from '@/components/ssr/photos';
import {NextPage} from 'next';

const Page: NextPage<PhotosProps> = (props: PhotosProps) => {
  return <Photos photos={props.photos} />;
};

export default Page;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();
  return {
    props: {photos},
  };
}
