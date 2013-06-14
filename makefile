MOCHA=node_modules/.bin/mocha
reporter?=tap
FLAGS=--reporter $(reporter)

test:
	$(MOCHA) $(shell find test/* -prune -name "*test.js") $(FLAGS)
.PHONY: test
