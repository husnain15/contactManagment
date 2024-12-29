import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactId: number=0;
  contactDetail:any;
  avatar="https://pics.craiyon.com/2023-06-04/50f169348eb24ce0919dba8133c08ddc.webp"

  constructor(private contactService: ContactService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactId = +this.route.snapshot.paramMap.get('id')!;
    this.contactService.getContactDetail(this.contactId.toString()).subscribe((data: any) => {
      this.contactDetail = data;
      this.contactDetail = [this.contactDetail];
    })
    }

}
