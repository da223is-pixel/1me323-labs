const messageInput = document.querySelector("#message");
const previewText = document.querySelector("#preview-text");

const sizeSlider = document.querySelector("#size");
const sizeValue = document.querySelector("#size-value");

const opacitySlider = document.querySelector("#opacity");
const opacityValue = document.querySelector("#opacity-value");

const alignSelect= document.querySelector("#align");

const fontSelect= document.querySelector("#font");
const boldcheckbox= document.querySelector("#bold")
const underlineCheckbox = document.querySelector("#underline");
const bgColor= document.querySelector("#bg-color");
const textColorInput = document.querySelector("#text-color");

const nameStatus= document.querySelector("#name-status");
const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");
const emailStatus = document.querySelector("#email-status");



messageInput.addEventListener("input", () => {
  if (messageInput.value === "") {
    previewText.textContent = "Hej! Jag ändras när du justerar kontrollerna.";
  } else {
    previewText.textContent = messageInput.value;
  }
});

sizeSlider.addEventListener("input", () => {
const size= sizeSlider.value;
sizeValue.textContent= size;
previewText.style.fontSize= size + "px"

})

opacitySlider.addEventListener("input", () => {
  opacityValue.textContent= opacitySlider.value // ursprungliga value sparas och uppdateras till nya som användaren kommer att välja.
  previewText.style.opacity= Number(opacitySlider.value)/100;
});

alignSelect.addEventListener("change",() => {
  previewText.style.textAlign= alignSelect.value;

})

fontSelect.addEventListener("change", () => {
  previewText.style.fontFamily = fontSelect.value; 
})
boldcheckbox.addEventListener("change", () => {
  if (boldcheckbox.checked) {
    previewText.style.fontWeight= "bold"}
    else {
      previewText.style.fontWeight= "normal"
    }
})
underlineCheckbox.addEventListener("change", () => {
  if (underlineCheckbox.checked) {
    previewText.style.textDecoration = "underline";
  } else {
    previewText.style.textDecoration = "none";
  }
});

bgColor.addEventListener("input", () => {
previewText.style.backGroundColor= bgColor.value;
;})


textColorInput.addEventListener("input", () => {
  previewText.style.color = textColorInput.value;
});

nameInput.addEventListener("input", () => {
  if (nameInput.validity.valueMissing) {
     nameStatus.textContent= "Fälet är obligatoriskt"
  }

  else if(nameInput.validity.tooShort) {
    nameStatus.textContent= "Texten är för kort"
  }
  else if(nameInput.validity.valid) {
    nameStatus.textContent= "Ser bar ut!"
  } 
})

emailInput.addEventListener("input", () => {
  if (emailInput.validity.typeMismatch) {
    emailStatus.textContent= "Ange en giltig e-postadress."
  }
   else if (emailInput.validity.valid) {
    emailStatus.textContent= "Rätt e-post!"
  }
})




