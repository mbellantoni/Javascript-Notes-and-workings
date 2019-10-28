function doHomework(subject, callback) {
  alert(`I love my ${subject} sooo much!!!!`);
  callback();
}
function alertFinished(){
  alert('Cannot wait to see you tonight!!!!');
}
doHomework('Tiffy', alertFinished);
