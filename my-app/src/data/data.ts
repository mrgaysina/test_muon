export interface Data {
  id: number,
  date: string,
  time: string,
  terminal: 'B' | 'C' | 'D' | 'E' | 'F',
  departure_city: string,
  arrival_city: string,
  flight: string,
  company: string,
}

export const DataArrivals: Data[] = [
  {
    id: 1,
    date: new Date('2023-04-21 9:00').toDateString(),
    time: new Date('2023-04-21 9:00').toTimeString(),
    terminal: 'B',
    departure_city: 'Sochi',
    arrival_city: 'Moscow',
    flight: 'DP 4667',
    company: 'Pobeda'
  },
  {
    id: 2,
    date: new Date('2023-04-25 10:00').toDateString(),
    time: new Date('2023-04-25 10:00').toTimeString(),
    terminal: 'C',
    departure_city: 'Ufa',
    arrival_city: 'Moscow',
    flight: 'FL 1223',
    company: 'Ural Airlines'
  },
  {
    id: 3,
    date: new Date('2023-04-24 11:00').toDateString(),
    time: new Date('2023-04-24 11:00').toTimeString(),
    terminal: 'D',
    departure_city: 'Krasnodar',
    arrival_city: 'Moscow',
    flight: 'SU 1130',
    company: 'Aeroflot'
  },
  {
    id: 4,
    date: new Date('2023-04-26 12:00').toDateString(),
    time: new Date('2023-04-26 12:00').toTimeString(),
    terminal: 'E',
    departure_city: 'Vladivostok',
    arrival_city: 'Moscow',
    flight: 'SU 9981',
    company: 'Rossiya'
  },
  {
    id: 5,
    date: new Date('2023-04-25 13:00').toDateString(),
    time: new Date('2023-04-25 13:00').toTimeString(),
    terminal: 'F',
    departure_city: 'Kazan',
    arrival_city: 'Moscow',
    flight: 'FV 1669',
    company: 'S7 Airlines'
  },
  {
    id: 6,
    date: new Date('2023-04-24 14:00').toDateString(),
    time: new Date('2023-04-24 14:00').toTimeString(),
    terminal: 'B',
    departure_city: 'Saratov',
    arrival_city: 'Moscow',
    flight: 'SU 1302',
    company: 'Aeroflot'
  },
  {
    id: 7,
    date: new Date('2023-04-26 15:00').toDateString(),
    time: new Date('2023-04-26 15:00').toTimeString(),
    terminal: 'C',
    departure_city: 'Samara',
    arrival_city: 'Moscow',
    flight: 'SU 1214',
    company: 'S7 Airlines'
  },
  {
    id: 8,
    date: new Date('2023-04-25 16:00').toDateString(),
    time: new Date('2023-04-25 16:00').toTimeString(),
    terminal: 'D',
    departure_city: 'Istanbul',
    arrival_city: 'Moscow',
    flight: 'SU 2114',
    company: 'Rossiya'
  },
  {
    id: 9,
    date: new Date('2023-04-24 17:00').toDateString(),
    time: new Date('2023-04-24 17:00').toTimeString(),
    terminal: 'E',
    departure_city: 'Saint-Petersburg',
    arrival_city: 'Moscow',
    flight: 'SU 024',
    company: 'Aeroflot'
  },
  {
    id: 10,
    date: new Date('2023-04-26 18:00').toDateString(),
    time: new Date('2023-04-26 18:00').toTimeString(),
    terminal: 'F',
    departure_city: 'Habarovsk',
    arrival_city: 'Moscow',
    flight: 'SU 1710',
    company: 'Pobeda'
  },
  {
    id: 11,
    date: new Date('2023-04-25 19:00').toDateString(),
    time: new Date('2023-04-25 19:00').toTimeString(),
    terminal: 'B',
    departure_city: 'Volgograd',
    arrival_city: 'Moscow',
    flight: 'DP 6885',
    company: 'Ural Airlines'
  },
  {
    id: 12,
    date: new Date('2023-04-24 20:00').toDateString(),
    time: new Date('2023-04-24 20:00').toTimeString(),
    terminal: 'C',
    departure_city: 'Perm',
    arrival_city: 'Moscow',
    flight: 'SU 1414',
    company: 'Aeroflot'
  },
  {
    id: 13,
    date: new Date('2023-04-26 21:00').toDateString(),
    time: new Date('2023-04-26 21:00').toTimeString(),
    terminal: 'D',
    departure_city: 'Erevan',
    arrival_city: 'Moscow',
    flight: 'SU 1868',
    company: 'Rossiya'
  },
  {
    id: 14,
    date: new Date('2023-04-25 22:00').toDateString(),
    time: new Date('2023-04-25 22:00').toTimeString(),
    terminal: 'E',
    departure_city: 'Kaliningrad',
    arrival_city: 'Moscow',
    flight: 'SU 1006',
    company: 'Pobeda'
  },
  {
    id: 15,
    date: new Date('2023-04-24 23:00').toDateString(),
    time: new Date('2023-04-24 23:00').toTimeString(),
    terminal: 'F',
    departure_city: 'Dubai',
    arrival_city: 'Moscow',
    flight: 'SU 524',
    company: 'Aeroflot'
  }
]


export const DataDepartures: Data[] = [
  {
    id: 1,
    date: new Date('2023-04-24 9:00').toDateString(),
    time: new Date('2023-04-24 9:00').toTimeString(),
    terminal: 'B',
    departure_city: 'Moscow',
    arrival_city: 'Sochi',
    flight: 'DP 4668',
    company: 'Pobeda'
  },
  {
    id: 2,
    date: new Date('2023-04-25 10:00').toDateString(),
    time: new Date('2023-04-25 10:00').toTimeString(),
    terminal: 'C',
    departure_city: 'Moscow',
    arrival_city: 'Ufa',
    flight: 'FL 1224',
    company: 'Ural Airlines'
  },
  {
    id: 3,
    date: new Date('2023-04-26 11:00').toDateString(),
    time: new Date('2023-04-26 11:00').toTimeString(),
    terminal: 'D',
    departure_city: 'Moscow',
    arrival_city: 'Krasnodar',
    flight: 'SU 1131',
    company: 'Aeroflot'
  },
  {
    id: 4,
    date: new Date('2023-04-24 12:00').toDateString(),
    time: new Date('2023-04-24 12:00').toTimeString(),
    terminal: 'E',
    departure_city: 'Moscow',
    arrival_city: 'Vladivostok',
    flight: 'SU 9982',
    company: 'Rossiya'
  },
  {
    id: 5,
    date: new Date('2023-04-25 13:00').toDateString(),
    time: new Date('2023-04-25 13:00').toTimeString(),
    terminal: 'F',
    departure_city: 'Moscow',
    arrival_city: 'Kazan',
    flight: 'FV 1670',
    company: 'S7 Airlines'
  },
  {
    id: 6,
    date: new Date('2023-04-26 14:00').toDateString(),
    time: new Date('2023-04-26 14:00').toTimeString(),
    terminal: 'B',
    departure_city: 'Moscow',
    arrival_city: 'Saratov',
    flight: 'SU 1303',
    company: 'Aeroflot'
  },
  {
    id: 7,
    date: new Date('2023-04-24 15:00').toDateString(),
    time: new Date('2023-04-24 15:00').toTimeString(),
    terminal: 'C',
    departure_city: 'Moscow',
    arrival_city: 'Samara',
    flight: 'SU 1215',
    company: 'S7 Airlines'
  },
  {
    id: 8,
    date: new Date('2023-04-25 16:00').toDateString(),
    time: new Date('2023-04-25 16:00').toTimeString(),
    terminal: 'D',
    departure_city: 'Moscow',
    arrival_city: 'Istanbul',
    flight: 'SU 2115',
    company: 'Rossiya'
  },
  {
    id: 9,
    date: new Date('2023-04-26 17:00').toDateString(),
    time: new Date('2023-04-26 17:00').toTimeString(),
    terminal: 'E',
    departure_city: 'Moscow',
    arrival_city: 'Saint-Petersburg',
    flight: 'SU 025',
    company: 'Aeroflot'
  },
  {
    id: 10,
    date: new Date('2023-04-24 18:00').toDateString(),
    time: new Date('2023-04-24 18:00').toTimeString(),
    terminal: 'F',
    departure_city: 'Moscow',
    arrival_city: 'Habarovsk',
    flight: 'SU 1711',
    company: 'Pobeda'
  },
  {
    id: 11,
    date: new Date('2023-04-25 19:00').toDateString(),
    time: new Date('2023-04-25 19:00').toTimeString(),
    terminal: 'B',
    departure_city: 'Moscow',
    arrival_city: 'Volgograd',
    flight: 'DP 6886',
    company: 'Ural Airlines'
  },
  {
    id: 12,
    date: new Date('2023-04-26 20:00').toDateString(),
    time: new Date('2023-04-26 20:00').toTimeString(),
    terminal: 'C',
    departure_city: 'Moscow',
    arrival_city: 'Perm',
    flight: 'SU 1415',
    company: 'Aeroflot'
  },
  {
    id: 13,
    date: new Date('2023-04-24 21:00').toDateString(),
    time: new Date('2023-04-24 21:00').toTimeString(),
    terminal: 'D',
    departure_city: 'Moscow',
    arrival_city: 'Erevan',
    flight: 'SU 1869',
    company: 'Rossiya'
  },
  {
    id: 14,
    date: new Date('2023-04-25 22:00').toDateString(),
    time: new Date('2023-04-25 22:00').toTimeString(),
    terminal: 'E',
    departure_city: 'Moscow',
    arrival_city: 'Kaliningrad',
    flight: 'SU 1007',
    company: 'Pobeda'
  },
  {
    id: 15,
    date: new Date('2023-04-26 23:00').toDateString(),
    time: new Date('2023-04-26 23:00').toTimeString(),
    terminal: 'F',
    departure_city: 'Moscow',
    arrival_city: 'Dubai',
    flight: 'SU 525',
    company: 'Aeroflot'
  }
]
