const defaultConfig = {
  server: { host: 'localhost', port: 1234 },
  sms: {
    twilio: {
      account_sid: 'AC823acfe112f09606a48cbf618ea432fb',
      token: 'ae7050425aff13d344dbeb45ac9b7580',
    },
  },
};

export type Configs = typeof defaultConfig;

export default defaultConfig;
