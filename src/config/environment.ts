import { EnvSchema as environmentSchema } from './schemas';
import { parseEnvironment, loadDotenv } from './utils';

const data = loadDotenv();
const environment = parseEnvironment(data, environmentSchema);

export default environment;
