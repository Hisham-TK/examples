import { MutationStatus } from '../../modules/interfaces/types';

export function createSubscriptionMessage(
  triggerName: string,
  mutation: MutationStatus,
  data: any,
) {
  return { [triggerName]: { mutation, data } };
}
