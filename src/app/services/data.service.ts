import { Injectable } from '@angular/core';

interface RegisterData {
  email: string;
  password: string;
  avatar: string;
  name: string;
  phoneNumber: string;
  gender: number;
}

interface SignInData {
  email: string;
  password: string;
}

interface Facility {
  facilityId: number;
  facilityName: string;
  facilityImage: string;
}

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

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly API_URL =
    'https://ketiketelauri123-001-site1.jtempurl.com/api/facilities/getall';

  private readonly BASE_URL =
    'https://ketiketelauri123-001-site1.jtempurl.com/api/roomtypes/';

  private readonly REGISTER_URL =
    'https://ketiketelauri123-001-site1.jtempurl.com/api/account/register';

  private readonly SIGNIN_URL =
    'https://ketiketelauri123-001-site1.jtempurl.com/api/account/signin';

  constructor() {}

  getFacilities(): Promise<Facility[]> {
    return fetch(this.API_URL).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }

  async getRoomsItems(): Promise<Room[]> {
    try {
      const response = await fetch(this.BASE_URL + 'getall');
      if (!response.ok) {
        throw new Error('Failed to fetch room data');
      }
      const data: Room[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching room data:', error);
      throw error;
    }
  }

  async getRoomById(id: number): Promise<Room> {
    try {
      const response = await fetch(this.BASE_URL + `getbyid/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch room data by ID');
      }
      const data: Room = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching room data for ID ${id}:`, error);
      throw error;
    }
  }

  register(data: RegisterData): Promise<Response> {
    return fetch(this.REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  signIn(data: SignInData): Promise<Response> {
    return fetch(this.SIGNIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
