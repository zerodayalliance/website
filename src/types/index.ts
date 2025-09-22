import { JSX } from "react";

export interface INavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

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
