import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundService } from '../compound.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {
  compound: any;
  compoundForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private compoundService: CompoundService,
    private fb: FormBuilder
  ) {
    // Initialize the form group
    this.compoundForm = this.fb.group({
      name: ['', Validators.required],
      image: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.getCompound();
  }

  getCompound(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Add non-null assertion operator
    this.compoundService.getCompound(id).subscribe(compound => {
      this.compound = compound;
      this.compoundForm.patchValue(compound); // Populate the form with the fetched compound data
    });
  }
}
