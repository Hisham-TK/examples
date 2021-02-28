type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

enum TicketSocketKeys {
  ticketCreated = 'ticketCreated',
  ticketUpdated = 'ticketCreated',
  ticketDeleted = 'ticketCreated',
}

type Topic<TKeys extends Enum<TKeys> = Enum<unknown>> = {
  topicName: string;
  listenKeys: Enum<unknown>;
};

export const ticketTopic: Topic = {
  topicName: 'TicketTopic',
  listenKeys: TicketSocketKeys,
};
