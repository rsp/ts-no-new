ts-no-new
=
typescript-constructors-without-new
-
Various attempts to create TypeScript constructors
that can be invoked with and without the `new` keyword
like several built-ins including `Array` et al.

Feedback
-
I am not 100% happy with any of those solutions.
Any feedback with better ideas is more than welcome.

I would especially like to eliminate all `any` types,
without making the proxy wrapper specific to one particular type
which is tricky (if possible at all). I will appreciate any help with that.

Background
-
This is my old code that I was playing some time ago in 2018.
I'm putting it online in case it is useful to someone.

All examples is in a separate directory with its own `tsconfig.json` file
to avoid errors of the same symbols defined in multiple files.

The `tsconfig.json` is as strict as possible, with all options turned on that I usually recommended. It made it harder to write the code but it is at the same time more useful in different compiler configurations.

The idea is to match the built-in costructors like `Array` as closely as possible. There are several important things to keep in mind:

1. It should be all correct TypeScript with strict type checking
1. It should use `class` keyword instead of defining the constructors as old style functions
1. The compiler should understand the types and the VSCode editor should correctly detect errors like a typo in a method name exactly the same as normal constructors with `new` keyword in TypeScript - no type safety compromises
1. Both `a = new A()` and `a = A()` should work the same
1. In both cases `a instanceof A` should be `true`
1. In both cases `a.constructor.name` should be `'A'`
1. In both cases `console.log(a)` should print `A {...}`
1. Another constructor `B` should be able to extend (inherit from) `A` using `class B extends A { ... }` syntax
1. Both `b = new B()` and `b = B()` should both work
1. In both cases `b instanceof B` and `b instanceof A` and should be `true`
1. In both cases `a.constructor.name` ahould be `'B'`
1. In both cases `console.log(a)` should print `B {...}`

Optional requirement (is it important? or can it be harmful?):

1. In both cases for the base class (`a = new A()` and `a = A()`) `a.constructor == A` should be `true`
1. In both cases for the child class (`b = new B()` and `b = B()`) `b.constructor == B` should be `true`

Can it even be done without proxying the instances or changing the costructor to redefine the `constructor` property of the object? (which can be made non enumerable but would still return `true` for `hasOwnProperty`) It may not be worth the hassle but I may be wrong here.

If you have some other important feature that is not listed here,
please [post an issue][issues-url].

Usage
-
The exampels are in separate directories.
The `rsp-2-*` ones are most useful. All of the `rsp-0-*` and `rsp-1-*`
as well as the `bak*` directories are mostly for backup archives
but feel free to explore my early attempts (but not everything can work).

The only dependency is the TypeScript compiler.

If you don't have the TypeScript compiler installed globally then install it locally with:
```
npm i
```
and use it as `npx tsc` as shown below.
If you have the TypeScript compiler installed globally then
you can use `tsc` instead of `npx tsc` in the examples below.

To run the `rsp-2-4` example:

```
cd rsp-2-4
npx tsc
node build/*.js
```
or:
```
./run rsp-2-4
```

It will print some output that is relevant to the required features
of the given solution. If you need more info just add it to the source code.

Issues
-
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
-
[**Rafał Pocztarski**](https://pocztarski.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[github-url]: https://github.com/rsp/ts-no-new
[readme-url]: https://github.com/rsp/ts-no-new#readme
[issues-url]: https://github.com/rsp/ts-no-new/issues
[license-url]: https://github.com/rsp/ts-no-new/blob/master/LICENSE.md
[travis-url]: https://travis-ci.org/rsp/ts-no-new
[travis-img]: https://travis-ci.org/rsp/ts-no-new.svg?branch=master
[snyk-url]: https://snyk.io/test/github/rsp/ts-no-new
[snyk-img]: https://snyk.io/test/github/rsp/ts-no-new/badge.svg
[david-url]: https://david-dm.org/rsp/ts-no-new
[david-img]: https://david-dm.org/rsp/ts-no-new/status.svg
[install-img]: https://nodei.co/npm/caught.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/caught.svg
[license-img]: https://img.shields.io/npm/l/caught.svg
[stats-url]: http://npm-stat.com/charts.html?package=caught
[github-follow-url]: https://github.com/rsp
[github-follow-img]: https://img.shields.io/github/followers/rsp.svg?style=social&logo=github&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=pocztarski
[twitter-follow-img]: https://img.shields.io/twitter/follow/pocztarski.svg?style=social&logo=twitter&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/613198/rsp
[stackexchange-url]: https://stackexchange.com/users/303952/rsp
[stackexchange-img]: https://stackexchange.com/users/flair/303952.png
