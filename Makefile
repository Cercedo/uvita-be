args:=


all:
	@echo "🔥 Makefile settings"


####---- Setup ----------------------------------------------------------------
setup:
	npm install


####---- Server ---------------------------------------------------------------
run:
	npm run build && node dist/index.js

run-dev:
	npm run dev


####---- Node.js --------------------------------------------------------------
shell:
	node


####---- Code style -----------------------------------------------------------
f-check:
	npm run format:check

f-format:
	npm run format

lint:
	npm run lint

.PHONY: test
test:
	npm run test

pr-check: lint test
