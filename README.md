# cplug.org

This website is built with [Jekyll](http://jekyllrb.com/).

## Development

 1. `gem install bundler`
 2. `bundle install`
 3. `bundle exec jekyll serve --watch`
 4. start editing files

## Deployment

 1. `bundle exec jekyll build`
 2. `rsync -rcvz --delete _site/ cplug@cplug.org:public_html`
