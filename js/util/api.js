var API_KEY = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB";

function api(url, query) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: url,
      headers: {
        "X-Mashape-Key": API_KEY
      },
      data: query,
      success: resolve,
      error: reject
    });
  });
}
