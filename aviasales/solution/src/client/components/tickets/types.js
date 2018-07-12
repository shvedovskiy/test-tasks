// @flow
export type LocationType = {|
  code: string,
  name: string,
  date: string,
  time: string,
|};

export type TicketType = {|
  id: string,
  carrier: string,
  price: string,
  stops: string,
  origin: LocationType,
  destination: LocationType,
|};
