# testing-11ty-webc-for

Quick demo of the issue I'm having using `webc:for` with `eleventy --serve`.

### Steps to reproduce

1. Run `npm install`
2. Manually add unreleased webc dir to `/node_modules/@11ty/webc`
3. Run `npm install` again
4. Run `npm run start`
5. Confirm posts appearing as expected at http://localhost:8080/
6. Add junk text to `src/index.webc`, save and see no issues with build
7. Add junk text to _any other file_, save and **NOTE ERROR IN BUILD**

To get a successful build from here, you can:

1. Stop the server and start it again, OR
2. Resave `src/index.webc` (with a change)
