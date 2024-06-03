import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

interface Facility {
  facilityId: number;
  facilityName: string;
  facilityImage: string;
}

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css'],
})
export class FacilitiesComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getFacilities()
      .then((data) => {
        this.facilities = data;
        console.log('Facilities data', data);
      })
      .catch((error) => {
        console.error('Error fetching facilities', error);
      });
  }
}
