window.onload = () => {
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const uploadFile = document.getElementById("tattoo-file");
    const uploadBtn = document.getElementById("tattoo-btn");
    const uploadText = document.getElementById("tattoo-text");

    uploadBtn.addEventListener("click", function () {
        uploadFile.click();
    });

    uploadFile.addEventListener("change", function () {
        if (uploadFile.value) {
            uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
        } else {
            uploadText.innerText = "Файл не вибрано";
        }
    });
};

const stars = document.querySelectorAll('.star');
let result = 0;

stars.forEach((item, index) => {
	item.addEventListener('click', () => {
		console.log('fsh ', index + 1);
		result = index + 1;
		UpdateDiv();
	});
});

const UpdateDiv = () => {
	console.log('hii line 16');
	stars.forEach((item, index) => {
		if (index < result) item.classList.add('active')
		else item.classList.remove('active');
	});
	document.querySelector("#result").textContent = `${result}`
};

document.addEventListener('DOMContentLoaded', function() {
    const containerTwo = document.querySelector('.content-container-2'); 

    const button = document.getElementById('load-more-btn'); 

    button.addEventListener('click', () => {
        containerTwo.classList.toggle('d-none');

        if (containerTwo.classList.contains('d-none')) {
            button.textContent = 'Показати ще відгуки';
        } else {
            button.textContent = 'Сховати відгуки';
        }
    });
});

