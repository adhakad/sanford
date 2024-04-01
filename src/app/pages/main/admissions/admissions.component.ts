import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent implements OnInit {
  studentForm: FormGroup;
  successMsg: String = '';
  errorMsg: String = '';
  errorCheck: Boolean = false;
  loader: Boolean = true;
  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      _id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],

    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000)
  }


  studentAddUpdate() {
    if (this.studentForm.valid) {
      this.studentService.addOnlineAdmission(this.studentForm.value).subscribe((res: any) => {
        if (res) {
          this.errorCheck = false;
          this.errorMsg = '';
          if (this.errorCheck == false && this.errorMsg == '') {
            this.studentForm.reset();
            this.successMsg = res.successMsg;
          }
        }
      }, (err: any) => {
        this.successMsg = '';
        if (this.successMsg == '') {
          this.errorCheck = true;
          this.errorMsg = err.error;
        }
      })
    }
  }
}
