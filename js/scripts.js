//Business Logic for AddressBook
function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

//Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var newAddressBook = new AddressBook();

$(document).ready(function() {
  $("form#address-book").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#phoneNumber").val();
    var newContact = new Contact(firstName, lastName, phoneNumber);
    newAddressBook.addContact(newContact);


    $("#result").text(newContact.fullName())

  });
});
