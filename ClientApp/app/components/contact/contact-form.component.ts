import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map'
import { ContactService } from './contact.service'
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Contact } from './contact';

@Component({
    templateUrl: './contact-form.component.html',
    providers: [ContactService],
    selector: 'contact-form',
})

export class ContactFormComponent implements OnInit {

    constructor(private contactService: ContactService, public modal: Modal) { }

    contact: Contact;
    pageTitle: string = 'Contact';
    @Input() subject: string;

    ngOnInit() {
        this.contact = new Contact();
        this.contact.subject = this.subject;
    }


    onSubmit(form: any) {
        this.contactService.sendContactMessage(form.value)
            .then(result => {
                this.modal.alert()
                    .size('lg')
                    .title('Thanks for getting in contact ' + result.name)
                    .okBtnClass('button special')
                    .body(`              
                        <p>We will get back to you ASAP
                        </p>`)
                    .open();
                form.reset();
            })
            .catch(error => {
                this.modal.alert()
                    .size('lg')
                    .title('Oops somewthing went wrong!')
                    .okBtnClass('button special')
                    .body(`              
                        <p>Something happened when submitting your message, please try again, or you cam email at
                        us at <a href="mailto:info@spanishinlondon.com">info@spanishinlondon.com</a>
                        </p>`)
                    .open();
            });

    }
}
