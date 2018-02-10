# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
# ENV['TZ'] = 'UTC'

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Live reload
activate :livereload

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def group_by_month(collection)
    collection.values.sort_by { |item| item.date }.group_by do |item|
      item.date.strftime('%B %Y')
    end
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
end

# set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true

# activate :blog do |blog|
#   blog.sources = "cities/{title}.html"
#   blog.sources = "events/{title}.html"
#   blog.permalink = "events/{title}.html"
#   blog.custom_collections = {
#     category: {
#       link: '/cities/{city}.html',
#       template: '/city.html'
#     }
#   }
# end
