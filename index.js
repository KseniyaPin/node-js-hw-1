const yargs = require('yargs');
const {hideBin} = require("yargs/helpers");

const contacts = require('./contacts.js');

const invokeAction = async ({action, id, name, email, phone}) => {
	switch(action) {
		case "list":
			const allContacts = await contacts.listContacts();
			return console.log(allContacts);
		case "getContactById":
			const oneContact = await contacts.getContactById(id);
			return console.log(oneContact);
    	case "addContact":
			const newContact = await contacts.addContact({name, email, phone});
			return console.log(newContact);
		case "removeContact":
			const deleteContact = await contacts.removeContact(id);
			return console.log(deleteContact);
		default:
			return console.warn('\x1B[31m Unknown action type!');
		}
		};
					
const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);
					
// invokeAction({action: "list"});
// invokeAction({action: "getContactById", id: "qdggE76Jtbfd9eWJHrssH"});
// invokeAction({action: "addContact", name: "Alla", email: "alla@mail.ua", phone: "123456789"});
// invokeAction({action: "removeContact", id: "T7g3F0crIYV5VbdtUDkIz"});
					
					
					