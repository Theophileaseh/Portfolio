function store() { // stores items in the localStorage
  const names = document.getElementById('name').value;
  const email1 = document.getElementById('email').value;
  const message1 = document.getElementById('message').value;
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const desktopEmail = document.getElementById('desktop_email').value;
  const messageTwo = document.getElementById('message2').value;
  const submitted = {
    name: names,
    email: email1,
    message: message1,
    first_name: firstName,
    last_name: lastName,
    desktop_email: desktopEmail,
    message2: messageTwo,
  };
  const key = '';
  window.localStorage.setItem(key, JSON.stringify(submitted));
  // converting object to string
}
function retrieveRecords() { // retrieves items in the localStorage
  const key = document.getElementById('retrieveKey').value; // gets key from user
  const records = window.localStorage.getItem(key); // searches for the key in localStorage
  const paragraph = document.createElement('p');
  const infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  const element = document.getElementById('retrieve');
  element.appendChild(paragraph);
}
function removeItem() { // deletes item from localStorage
  const key = document.getElementById('removeKey').value; // gets key from user
  localStorage.removeItem(key); // passes key to the removeItem method
}
function clearStorage() { // clears the entire localStorage
  localStorage.clear();
}
window.onload = function bar() { // ensures the page is loaded before functions are executed.
  document.getElementById('carForm').onsubmit = store;
  document.getElementById('clearButton').onclick = clearStorage;
  document.getElementById('removeButton').onclick = removeItem;
  document.getElementById('retrieveButton').onclick = retrieveRecords;
};