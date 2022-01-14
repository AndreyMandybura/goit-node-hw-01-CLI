// index.js
const contactsOperations = require("./contacts");

// const argv = require('yargs').argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const contacts = await contactsOperations.listContacts();
          console.log(contacts);
      break;

    case 'get':
      const contact = await contactsOperations.getContactById(id);
          console.log(contact);
      break;

    case 'add':
          const newContact = await contactsOperations.addContact(name, email, phone);
          console.log(newContact);
      break;

    case 'remove':
      const removeContact = await contactsOperations.removeContact(id);
          console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({action: "list"});
// invokeAction({ action: "get", id: "1" });
// invokeAction({ action: "add", name: "Huawei", email: "huawei@Mmail.com", phone: "777-77-77" });
invokeAction({ action: "remove", id: "94137796-c4db-4de9-91b7-292c6ed1a909" });