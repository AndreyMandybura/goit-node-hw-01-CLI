const { program } = require("commander");
const contactsOperations = require("./contacts");

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
  
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
          console.log('\nYour contacts:');
          console.table(contacts);
      break;

    case 'get':
      const contact = await contactsOperations.getContactById(id);
          console.log('\nFound next contact:');
          console.log(contact);
      break;

    case 'add':
      if (!name || !email || !phone) {
            console.log('\nThe contact could not be added. Please complete all fields.')
            break
        }
      const newContact = await contactsOperations.addContact(name, email, phone);
          console.log('\nAdded next contact:');
          console.log(newContact);
      break;

    case 'remove':
      const removeContact = await contactsOperations.removeContact(id);
          console.log('\nRemoved next contact:');
          console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);