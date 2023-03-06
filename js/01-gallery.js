import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryMarkup = createItemForMarkup(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createItemForMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>`;})
    .join("");
}


const onImageEvent = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return
  };
  const imageShow = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

  imageShow.show();
};


galleryContainer.addEventListener("click", onImageEvent);