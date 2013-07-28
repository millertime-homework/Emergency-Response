ifndef VERSION
$(error VERSION is not set. Either set from command line or export environment variable.)
endif

INDEX=v$(VERSION)/Visual_Training/index.html

all : zip

zip : cleanup
	@zip -r v$(VERSION).zip v$(VERSION)
	@echo Don\'t forget to test.

cleanup : package
	rm -rf v$(VERSION)/Visual_Training/web/js/*.backup
	rm -rf `find v$(VERSION) -name .git`

package : deploy_package/
	mkdir -p v$(VERSION)
	cp -R deploy_package/* v$(VERSION)/
	mkdir -p v$(VERSION)/Visual_Training
	cp -R ../src/* v$(VERSION)/Visual_Training
	if test -f $(INDEX) ; then \
		sed -i "s/Version.*\</Version $(VERSION)</" $(INDEX) ; \
	else \
		ERROR=1 ; \
	fi
	@$(if $(ERROR), $(error File not found),:)

clean : 
	rm -rf v$(VERSION)
	rm -rf v$(VERSION).zip
