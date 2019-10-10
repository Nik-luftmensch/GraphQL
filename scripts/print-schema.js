

import swapiSchema from '../src/schema';
import { printSchema } from 'graphql/utilities';

try {
  var output = printSchema(swapiSchema);
  console.log(output);
} catch (error) {
  console.error(error);
  console.error(error.stack);
}
