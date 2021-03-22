const images = [...document.querySelectorAll('.gallery-item')];
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const modalContent = document.querySelector('#content');

const showModal = (index) => {
  modal.style.display = 'block';
  modalContent.innerHTML = `<object type="text/html" data="image${index < 10 ? '0' + index : index}.html" ></object>`;
};

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', () => showModal(i));
}
closeBtn.addEventListener('click', () => (modal.style.display = 'none'));
