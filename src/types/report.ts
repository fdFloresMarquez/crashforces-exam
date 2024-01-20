export interface Report {
  accident: Accident;
  collisionList: CollisionList[];
}

export interface Accident {
  title: string;
  dayOf: string;
  street: string;
  city: string;
  zip: number;
  district: string;
  date: string;
  mapLocation: string;
  longitude: number;
  latitude: number;
  weather: string;
  traffic: string;
  roadType: string;
  roadConditions: string;
  lightConditions: string;
  phone: string;
  bulletParty: string;
  policeReport: string;
  estimateReport: string;
  massRatio: number;
  userEmail: string;
}

export interface CollisionList {
  collisionId: string;
  order: number;
  bulletDeltaV: number;
  targetDeltaV: number;
  bulletAcceleration: number;
  targetAcceleration: number;
  bullet: PartyInvolved;
  target: PartyInvolved;
}

export interface PartyInvolved {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  menNumber: number;
  womenNumber: number;
  children04: number;
  children510: number;
  children1015: number;
  payload: number;
  totalWeight: number;
  vin: null;
  recalls: string;
  relevantRecalls: string;
  vehicleId: string;
  accidentId: string;
  partyId: string;
  collisionId: string;
  porder: number;
  mid: null;
  isAvailable: null;
  dl: null;
  dlstate: null;
}
