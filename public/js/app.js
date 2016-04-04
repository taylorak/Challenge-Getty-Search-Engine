(function() {
  var container = document.querySelector('#container');
  var imageButton = document.querySelector('#searchButton');
  var imageQuery = document.querySelector('#search');


  imageButton.addEventListener('click', function(evt) {
    var xhr = new XMLHttpRequest();
    console.log(search.value);
    xhr.open('GET', 'https://api.gettyimages.com/v3/search/images?phrase=' + search.value);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Api-Key', '');
    xhr.addEventListener('load', loadImages);
    xhr.send();
  })



  function loadImages() {
    container.innerHTML = '';
    var images = this.response.images;
    images.forEach(function(image) {
      var imageNode = document.createElement('img');
      imageNode.src = image.display_sizes[0].uri;
      container.appendChild(imageNode);
    })
  }

})()