import {RouterServiceProvider} from '@/app/router';
import app from '@micra/application';

export const handler = app.run({
  providers: {
    RouterServiceProvider,
  },
});
