function clearerrors() {
  document.querySelector('#errors').innerHTML = '';
}

function orderNo() {
  //Create Label
  if (document.getElementById('orderProb').checked) {
    var x = document.createElement('label');
    x.setAttribute('for', 'orderNo');
    x.setAttribute('id', 'orderNoLabel');
    var text = document.createTextNode('Order Number:');
    text.setAttribute('required', 'required');
    x.appendChild(text);

    document.getElementById('orderNo').appendChild(x);

    //Create Text Area
    let miniTextAreaChunk = document.createElement('input');
    miniTextAreaChunk.setAttribute('type', 'text');
    document.getElementById('orderNoLabel').appendChild(miniTextAreaChunk);
  } else {
    var list = document.getElementById('orderNo');

    list.removeChild(list.childNodes[0]);
    list.removeChild(list.childNodes[0]);
  }
}
