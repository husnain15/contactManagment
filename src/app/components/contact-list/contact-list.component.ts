import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];
  selectedContact: any;
  avatar="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"
  constructor(private contactService: ContactService,private router: Router) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((data: any[]) => {
      this.contacts = data;
    });
  }

  selectContact(contact: any): void {
    this.router.navigate(['/contact', contact.id]);
  }

}
