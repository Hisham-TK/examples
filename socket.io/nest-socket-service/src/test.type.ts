enum SKeys {
  createTicket = 'createTicket',
  updateTicket = 'updateTicket',
  deleteTicket = 'deleteTicket',
  createService = 'createService',
  updateService = 'updateService',
  deleteService = 'deleteService',
  createProfile = 'createProfile',
  updateProfile = 'updateProfile',
  deleteProfile = 'deleteProfile',
}
// const SKeys = ["createTicket", "updateTicket", "deleteTicket"];

type Socket = {};
type Payload = any;
// type Socket = {}

type ShouldImplementedListeners<T> = {
  [P in keyof T]: (client: Socket, payload: Payload) => void;
};

function Test(key: string) {}

class C implements ShouldImplementedListeners<typeof SKeys> {
  createTicket(client: Socket, payload: any) {}

  updateTicket() {}

  deleteTicket() {}

  createService() {}

  updateService() {}

  deleteService() {}

  createProfile() {}

  updateProfile() {}

  deleteProfile() {}
}
