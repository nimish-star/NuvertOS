import { Component, OnInit } from '@angular/core';
import { CompoundService } from '../compound.service'; // Adjust the path as necessary

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.scss'] // Changed to SCSS for better styling
})
export class CompoundListComponent implements OnInit {
  compounds: any[] = [];

  constructor(private compoundService: CompoundService) { }

  ngOnInit(): void {
    this.compoundService.getCompounds().subscribe(data => {
      console.log(data); // Verify data here
      this.compounds = data.compounds; // Ensure this is correct
    }, error => {
      console.error('Error fetching compounds:', error);
    });
  }
}
