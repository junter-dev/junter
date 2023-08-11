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
	@cp package.json ./build/node
	@npm version $(VERSION) --no-git-tag-version

	@npm pack ./build/node
	@npm publish --tag $(NPM_TAG) --access=public ./build/node/*.tgz
