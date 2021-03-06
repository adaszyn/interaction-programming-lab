function getSpinnerMarkup() {
  return `
    <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
`;
}

function getErrorMarkup(){
  return `
    <div class="alert alert-danger" role="alert">
      Ouch! Some error occured when retrieving data.

      Please try again.
    </div>`;
}
