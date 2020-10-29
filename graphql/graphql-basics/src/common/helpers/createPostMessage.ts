export function createSubscriptionMessage(
  triggerName: string,
  mutation: 'CREATED' | 'UPDATED' | 'DELETED',
  data: any,
) {
  return { [triggerName]: { mutation, data } };
}
