// Write vanilla JS here OR use jquery expects!
const box = document.getElementById('box')
if(!box){
  throw Error('Did you create an element with the id "box"?')
}
if(box.tagName !== 'DIV') {
  throw Error('Did you create a `<div>` that has the id of `"box"`?')
}

/* in jQuery Expects*/
$expect('#box').to.exist('Did you create an element with the id `"box"`?');
$expect('#box').to.be.a('article', 'Did you create a `<div>` that has the id of `"box"`?')
