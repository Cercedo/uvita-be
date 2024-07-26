import { app } from '@/app';

import environment from './config/environment';

const port = environment.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
