import { galleryItems } from './gallery-items.js';
// Change code below this line

// const imagesMarkup = createItemsMarkup(galleryItems);

// const galleryContainerEl = document.querySelector(".gallery");

// galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

const galleryMarkup = createItemForMarkup(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createItemForMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
