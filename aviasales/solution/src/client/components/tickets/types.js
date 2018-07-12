// @flow
type Location = {|
  code: string,
  name: string,
  date: string,
  time: string,
|};

export type Ticket = {|
  id: string,
  carrier: string,
  price: string,
  stops: string,
  origin: Location,
  destination: Location,
|};
