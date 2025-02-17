export type TOffer = {
  id: number;
  jobTitle: string;
  vacancyName: string;
  department: string;
  salary: string;
  salaryFromTo: {
    from: string;
    to: string;
  };
  openDate: string;
  closeDate: string;
  gender: string;
  region: string;
  address: string;
  metro: string;
  education: string;
  experience: string;
  experienceRequirements: {
    from: string;
    to: string;
  };
  schedule: string;
  employmentType: string;
  duties: string;
  wishes: string;
  advantages: string[];
};

export type TOffersState = {
  offers: TOffer[];
};

export type TOffersAction =
  | { type: "ADD_OFFER"; offer: TOffer }
  | { type: "UPDATE_OFFER"; offer: TOffer }
  | { type: "DELETE_OFFER"; id: number };
