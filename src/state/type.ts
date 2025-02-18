export type TOffer = {
  id?: string;
  jobTitle?: string;
  vacancyName: string;
  department: string;
  handsOrBills?: string;
  salaryFromTo?: {
    from: string;
    to: string;
  };
  openDate: string;
  closeDate: string;
  gender: string;
  region: string;
  address: string;
  metro?: string;
  education: string;
  experience: string;
  // experienceRequirements?: {
  //   from: string;
  //   to: string;
  // };
  schedule: string;
  employmentType: string;
  duties?: string;
  wishes?: string;
  advantages?: string;
  suggestions?: string;
};

export type TOffersState = {
  offers: TOffer[];
};

export type TOffersAction =
  | { type: "ADD_OFFER"; offer: TOffer }
  | { type: "UPDATE_OFFER"; offer: TOffer };
