// declear our variables
copyText = document.getElementById('copyText');
btn = document.querySelector('btn');

function myFunction () { 
copyText.select();
copyText.setSelectionRange(0,99999);
navigator.clipboard.writeText(copyText.value);
}
