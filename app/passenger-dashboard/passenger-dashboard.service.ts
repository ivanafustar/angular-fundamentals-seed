import { Passenger } from './models/passenger.interface';

//everything in angular is a class
//service is a provider
export class PassengerDashboardService {
  constructor() {
  }

  getPassengers = (): Passenger[] => {
    return [{
      id: 1,
      fullName: 'Nick Jackelson',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ age: 6, name: 'Darren' }]
    }, {
      id: 2,
      fullName: 'Jack Nickelson',
      checkedIn: false,
    }, {
      id: 3,
      fullName: 'N. I.',
      checkedIn: true,
    }, {
      id: 4,
      fullName: 'N. N.',
      checkedIn: false,
    }, {
      id: 5,
      fullName: 'I. I.',
      checkedIn: false,
    }
    ]
  }
}
