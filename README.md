cplug.org
=========

This website is built with [Jekyll](http://jekyllrb.com/).

Development
-----------

 1. `gem install jekyll jekyll-redirect-from`
 2. `jekyll serve --watch`
 3. start editing files

Deployment
----------

 1. `jekyll build`
 2. `rsync -rcvz --delete _site/ cplug@cplug.org:public_html`
