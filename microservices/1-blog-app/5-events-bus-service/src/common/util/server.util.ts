import { configs } from './configs.util';
import { format } from 'url';

export function parseServerUrl(): string {
  const { server } = configs;
  return format({
    hostname: server.host || 'localhost',
    protocol: server.protocol || 'http',
    port: server.port,
  });
}
