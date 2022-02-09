const success = document.querySelector(".message-success");
const info = document.querySelector(".message-info");
const error = document.querySelector(".message-error");
const warning = document.querySelector(".message-warning");

success.innerHTML = createToaster("success", "Files is uploaded congrats");
info.innerHTML = createToaster(
  "info",
  "Files is uploaded but we have something to say"
);
error.innerHTML = createToaster("error", "sorry we can't process the file");
warning.innerHTML = createToaster("warning", "Files must be less than 5");
