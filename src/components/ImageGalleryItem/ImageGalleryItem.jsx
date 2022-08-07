import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ fotos, setModalInfo }) => {
  return fotos.map(el => (
    <li
      className={s.ImageGalleryItem}
      key={el.id}
      onClick={() => setModalInfo({ largeImageURL: el.largeImageURL, tags: el.tags })}
    >
      <img src={el.webformatURL} alt={el.tags} className={s.ImageGalleryItemImage} />
    </li>
  ));
};

export default ImageGalleryItem;
