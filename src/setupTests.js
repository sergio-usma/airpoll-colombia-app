import '@testing-library/jest-dom';

import crypto from 'crypto';

Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
});
