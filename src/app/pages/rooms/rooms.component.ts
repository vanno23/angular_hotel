import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Room {
  roomTypeId: number;
  name: string;
  defaultPrice: number;
  quantity: number;
  isDelete: boolean;
  description: string;
  maxAdult: number;
  maxChildren: number;
  maxPeople: number;
  images: { roomTypeImageId: number; imageData: string; roomTypeId: number }[];
}

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  roomsItems: Room[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getRoomsItems()
      .then((rooms) => {
        this.roomsItems = rooms;
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
    console.log(this.roomsItems);
  }
}
