import Photo, {PhotoProps} from '@/components/ssr/photos/Photo';
import {NextPage} from 'next';

const Page: NextPage<PhotoProps> = (props) => {
  return <Photo {...props} />;
};

export default Page;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await res.json();
  const paths = photos.map((photo: PhotoProps) => {
    return {
      params: {id: photo.id.toString()},
    };
  });

  return {paths, fallback: false};
}

export async function getStaticProps({params}: {params: {id: string}}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
  const photo = await res.json();
  return {
    props: photo,
  };
}
