import test from 'ava';

import { add1, add2 } from '../dist/add';

test('add a to b', function (t) {
	t.is(add1(1, 2), 3);
});
