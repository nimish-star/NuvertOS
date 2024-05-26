import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-compound-edit',
  templateUrl: './compound-edit.component.html',
  styleUrls: ['./compound-edit.component.css']
})
export class CompoundEditComponent implements OnInit {
  compoundForm: FormGroup;
  compoundId!: number; // Non-null assertion operator

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private compoundService: CompoundService,
    private router: Router
  ) {
    this.compoundForm = this.fb.group({
      CompoundName: ['', Validators.required],
      CompounrDescription: ['', Validators.required],
      strImageSource: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.compoundId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCompound();
  }

  loadCompound(): void {
    this.compoundService.getCompound(this.compoundId).subscribe(data => {
      this.compoundForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.compoundForm.valid) {
      this.compoundService.updateCompound(this.compoundId, this.compoundForm.value).subscribe(() => {
        this.router.navigate(['/compounds']);
      });
    }
  }
}