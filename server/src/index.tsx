import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
  return c.text('kinomi server');
});

app.post('/auth/signin', (c) => {

});

export default app;
