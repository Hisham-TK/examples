import { configs } from './common/config';
import twilio from 'twilio';

const smsClient = twilio(configs.sms.twilio.account_sid, configs.sms.twilio.token);

async function main() {
  console.log('smsClient', smsClient);
  const message = await smsClient.messages.create({
    from: '+13343676005',
    // from: '+201553585245',
    to: '+201553585245',
    body: 'Hi there this is a test message',
  });
  console.log('main -> message ', message);

}
main();

// console.log('configs.server.host', configs.server.host);
