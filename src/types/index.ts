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
