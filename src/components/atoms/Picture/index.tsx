type PictureProps = {
  cover: string;
  alt: string;
  className?: string;
};

const Picture = ({ cover, alt, className }: PictureProps) => {
  return <img src={cover} alt={alt} className={className} />;
};

export default Picture;
