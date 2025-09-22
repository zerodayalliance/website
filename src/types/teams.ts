export interface IGetTeams202425Query {
  teams202425Collection: {
    total: number;
    skip: number;
    limit: number;
    items: ITeam[];
  };
}

export interface ITeam {
  _id: string;
  id: string;
  name: string;
  membersCollection: {
    total: number;
    skip: number;
    limit: number;
    items: IMember[];
  };
}

export interface IMember {
  _id: string;
  uid: string;
  name: string;
  role: string;
  bio: string | null;
  linkedin: string | null;
  github: string | null;
  twitter: string | null;
  instagram: string | null;
  facebook: string | null;
  email: string | null;
  pfp: {
    title: string;
    description: string;
    contentType: string;
    size: number;
    url: string;
    width: number;
    height: number;
  };
}
