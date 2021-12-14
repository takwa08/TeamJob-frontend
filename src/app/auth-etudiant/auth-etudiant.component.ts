import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-etudiant',
  templateUrl: './auth-etudiant.component.html',
  styleUrls: ['./auth-etudiant.component.css']
})
export class AuthEtudiantComponent implements OnInit {
  formSignIn:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
