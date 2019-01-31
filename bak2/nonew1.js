// by rsp
'use strict';

const nonew = c => new Proxy(X, { apply(t, i, a) { return new t(...a); } });
