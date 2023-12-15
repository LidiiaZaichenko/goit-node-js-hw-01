import * as contactService from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contactService.addContact(data);
      return console.log(newContact);

    case "remove":
      const removeContact = await contactService.removeContact(id);
      return console.log(removeContact);
  }
};
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
