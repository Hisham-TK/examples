import { Event } from './interfaces/events.interface';
import Axios from 'axios';

export class EventsService {
  private events: Event[] = [];

  async sendToAll(data: Event): Promise<Event> {
    const event = data;

    Axios.post('http://posts-service:3331/events', event);
    Axios.post('http://comments-service:3332/events', event);
    Axios.post('http://queries-service:3333/events', event);
    Axios.post('http://moderation-service:3334/events', event);

    this.events.push(event);

    return event;
  }

  async getEvents(): Promise<Event[]> {
    return this.events;
  }
}
