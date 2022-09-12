export const ImagePreview = ({ image, onClick }) => {
  return (
    <div className="py-5 px-10">
      <img src={image} onClick={onClick} />
    </div>
  );
};
