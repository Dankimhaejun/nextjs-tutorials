import Photo, {PhotoProps} from './Photo';

export interface PhotosProps {
  photos: PhotoProps[];
}

const Photos = (props: PhotosProps) => {
  return (
    <>
      {props.photos.map((photo) => (
        <Photo {...photo} key={photo.id} />
      ))}
    </>
  );
};

export default Photos;
