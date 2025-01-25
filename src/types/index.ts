import { JSX } from "react";

export type TnavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export interface IEvent {
  title: string;
  date: string;
  time: string;
  mode: string;
  location: string;
  rsvpLink: string | null;
  lumaEventId: string | null;
  posterUrl: string;
  posterAlt: string;
  posterHeight: number;
  posterWidth: number;
}

export interface IGetEventsQuery {
  eventsCollection: {
    total: number;
    skip: number;
    limit: number;
    items: {
      _id: string;
      title: string;
      dateTime: string;
      mode: string;
      location: string;
      rsvpLink: string;
      lumaEventId: string;
      poster: {
        title: string;
        description: string;
        contentType: string;
        size: number;
        url: string;
        width: number;
        height: number;
      };
    }[];
  };
}

export interface IGetTeamsQuery {
  teamsCollection: {
    total: number;
    skip: number;
    limit: number;
    items: {
      _id: string;
      id: string;
      name: string;
      membersCollection: {
        total: number;
        skip: number;
        limit: number;
        items: {
          _id: string;
          uid: string;
          name: string;
          role: string;
          bio: string;
          linkedin: string;
          github: string;
          twitter: string;
          instagram: string;
          facebook: string;
          email: string;
        }[];
      };
    }[];
  };
}

export interface Member {
  _id: string;
  uid: number;
  name: string;
  role: string;
  bio: string | null;
  linkedin: string | null;
  github: string | null;
  twitter: string | null;
  instagram: string | null;
  facebook: string | null;
  email: string | null;
}

export interface Team {
  _id: string;
  id: number;
  name: string;
  membersCollection: {
    total: number;
    skip: number;
    limit: number;
    items: Member[];
  };
}
