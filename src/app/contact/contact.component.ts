import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Contact,
  ContactService,
} from '../service/contact-service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isFirstNameValid = false;
  isSecondNameValid = false;
  isMessageValid = false;

  onSubmit(contactForm: NgForm) {
    if (!contactForm.valid) {
      this.isFirstNameValid = true;
    }
  }

  constructor(public contactsService: ContactService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((allContacts: Contact[]) => {
      console.log(allContacts);
      this.contactsService.contacts = allContacts;
    });
  }
  public addContacts(form: NgForm) {
    console.log(form.value);
    console.log(this.contactsService.contacts);
    this.contactsService
      .addContacts(form.value)
      .subscribe((newContact: Contact) => {
        this.contactsService.contacts.push(newContact);
      });
  }
}
