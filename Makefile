#@ BUILD

.PHONY: build.node
build.node:
	rollup -c --environment BUILD:node

.PHONY: build.browser
build.browser:
	rollup -c --environment BUILD:browser

export VERSION?="v1.0.0"
export NPM_TAG?="dev"

#@ RELEASE
.PHONY: release.node
release.node:
	@npm version $(VERSION) --no-git-tag-version

	@cat package.json | jq '.name="@junter.dev/junter-node" | del(.scripts, .devDependencies)' >./build/node/package.json

	@cd ./build/node && \
     		npm pack &&  \
    		npm --prefix ./build/node/ publish \
    			--tag $(NPM_TAG) \
    			--access=public *.tgz

.PHONY: release.browser
release.browser: build.browser
	@npm version $(VERSION) --no-git-tag-version

	@cat package.json | jq '.name="@junter.dev/junter-browser" | del(.scripts, .devDependencies, .dependencies)' >./build/browser/package.json

	@cd ./build/browser && \
         	npm pack &&  \
        	npm --prefix ./build/browser/ publish \
        		--tag $(NPM_TAG) \
        		--access=public *.tgz
