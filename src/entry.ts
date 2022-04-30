import {LoggerServiceProvider} from '@/app/logger';
import {RouterServiceProvider} from '@/app/router';
import app from '@micra/application';

export const handler = app.run({
  providers: {
    LoggerServiceProvider,
    RouterServiceProvider,
  },
});
