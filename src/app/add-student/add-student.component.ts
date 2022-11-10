import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent: any;
  constructor(private fb:FormBuilder,
    routes: Router, ) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
