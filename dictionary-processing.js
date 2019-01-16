document.getElementById('readFile').addEventListener('click', startRead);

function startRead() {
  // obtain input element through DOM
  console.log("startRead!");
  var file = document.getElementById('dictionary').files[0];
  if (file) {
    console.log("Has file");
    getAsText(file);
  } else {
    console.log("No file");
  }
}

function getAsText(readFile) {

  var reader = new FileReader();
  reader.onprogress = updateProgress;
  reader.onload = loaded;
  reader.onerror = errorHandler;

  reader.readAsText(readFile, "UTF-8");
}

function updateProgress(evt) {
  if (evt.lengthComputable) {
    // evt.loaded and evt.total are ProgressEvent properties
    var loaded = (evt.loaded / evt.total);
    if (loaded < 1) {
      console.log(loaded);
    }
  }
}

var DICTIONARY = new Object();

function loaded(evt) {
  console.log("READING COMPLETE!");
  // Obtain the read file data
  var fileString = evt.target.result;
  DICTIONARY = evt.target.result;
  var words = DICTIONARY.split('\n');
  var current_letters = letters.flat();
  var potential_words = words.filter(w => { return pairs.includes(w.substr(0,2)) })
  console.log('With current letters only', potential_words.length, 'of', words.length, 'are potential based on two-letter starters');
  localStorage.setItem('lettergame-potentials', JSON.stringify(potential_words));
  console.log('Saved key "lettergame-potentials" to localStorage, use restore button next time')
}



function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
    // The file could not be read
  }
}