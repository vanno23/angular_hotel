import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { HeaderComponent } from '../../components/header/header.component';
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
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  showFullDetails: boolean = false;

  toggleDetails(): void {
    this.showFullDetails = !this.showFullDetails;
  }

  room: Room | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const roomId = +params['id'];
      this.dataService
        .getRoomById(roomId)
        .then((room) => {
          this.room = room;
        })
        .catch((error) => {
          console.error('Error fetching room by ID:', error);
        });
    });
  }
}
