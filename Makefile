#@ BUILD

.PHONY: build.node
build.node:
	rollup -c --environment BUILD:node

.PHONY: build.web
build.web:
	rollup -c --environment BUILD:browser

#@ CODE QUALITY
.PHONY: lint.js
lint.js:
	@eslint --fix 'src/**/*.ts'

export VERSION?="v1.0.0"
export NPM_TAG?="dev"

#@ RELEASE
.PHONY: release.node
release.node:
	@npm version $(VERSION) --no-git-tag-version
	@cp package.json ./build/node
	@cd ./build/node

	@npm publish --tag $(NPM_TAG)
