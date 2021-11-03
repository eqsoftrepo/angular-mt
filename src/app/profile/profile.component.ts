import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customerInfo!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.customerInfo = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      address: ['']
    })
  }

  resetForm(): void {    
    this.customerInfo.reset();
  }

  submitForm(): void {
        
  }


}
