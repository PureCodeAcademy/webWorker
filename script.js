// Check browser support
if (!window.indexedDB) {
    alert("Sorry! Your browser does not support IndexedDB");
}

if (typeof(Worker) !== "undefined") {
  alert("Your browser support Web worker");
} else {
  alert("Sorry! Your browser does not support Web Worker");
}