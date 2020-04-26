export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: number | null,
  children?: Child[] | null,
  baggage: string
}

export interface Child {
  age: number,
  name: string
}
