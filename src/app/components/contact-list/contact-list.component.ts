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
  filteredContacts: any[] = [];
  avatar = "https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp";
  searchQuery: string = ""; // The search input value

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    // Fetch all contacts
    this.contactService.getContacts().subscribe((data: any[]) => {
      this.contacts = data;
      this.filteredContacts = data; // Initially show all contacts
    });
  }

  // Function to handle the search functionality
  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredContacts = this.contacts; // If search is empty, show all contacts
    } else {
      this.filteredContacts = this.contacts.filter(contact => 
        contact.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        contact.role.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // Select a contact
  selectContact(contact: any): void {
    this.router.navigate(['/contact', contact.id]);
  }

}
