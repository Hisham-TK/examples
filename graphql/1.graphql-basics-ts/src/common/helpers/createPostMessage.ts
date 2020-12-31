import { MutationStatus } from '../../3-mutation/interfaces/types';

export function createSubscriptionMessage(
  triggerName: string,
  mutation: MutationStatus,
  data: any,
) {
  return { [triggerName]: { mutation, data } };
}
