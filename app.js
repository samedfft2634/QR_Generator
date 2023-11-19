const inputQr = document.getElementById("inputQr");
const generateBtn = document.getElementById("generateBtn");
const generateImg = document.getElementById("generateImg");
const generateCard = document.getElementById("generateCard");

generateCard.style.display = "none";
const getData = () => {
	const typeInput = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputQr.value}`;
	generateImg.src = typeInput;
	generateImg.style.border = "none";
	generateImg.style.borderRadius = ".5rem";
	if (!inputQr.value.trim()) {
		generateCard.style.display = "none";
		generateImg.src = "";
		generateImg.style.outline = "none";
		generateImg.style.outlineOffset = "0";
	} else {
		generateCard.style.display = "flex";
		generateImg.style.outline = "2px solid #8d63e6";
		generateImg.style.outlineOffset = ".5rem";
        document.getElementById("generateHref").href = typeInput
	}

};

inputQr.addEventListener("input", getData);
generateImg.addEventListener("click", getData);
