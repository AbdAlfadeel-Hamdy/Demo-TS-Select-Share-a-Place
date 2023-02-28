const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const searchAddressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;
};

form.addEventListener("submit", searchAddressHandler);
