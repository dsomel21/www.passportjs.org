require('dotenv').load();
require('bixby')('org.kerouacjs/main', { dev: true });



return;

var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://www.passportjs.org');
site.set('layout engine', 'pug');

site.locals.pretty = true;
/*
site.locals.site = {
  accounts: {
    'twitter.com': 'passportjs'
  }
}
*/

//site.engine('jade', require('jade'));
site.engine('pug', require('pug'));

//site.use('/packages', require('kerouac-npm-packages')());
site.content('content');
//site.content('views', { layout: 'docs' });
site.use('/docs', require('kerouac-book')('Documentation', 'docs', { layout: 'book' }));
//site.use('/blog', require('kerouac-blog')({ layout: 'blog' }));

site.use('/', require('kerouac-manifest')());
site.page('/sitemap.xml', require('kerouac-sitemap')());
site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
site.page('/robots.txt', require('kerouac-robotstxt')());
// TODO: .well-known/security.txt

site.generate(function(err) {
  console.log('DONE!');
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});
