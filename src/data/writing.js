// Writing. Each post body is a list of simple blocks so you can write without
// any markdown tooling. Block types: 'p' (paragraph), 'h2' (subhead), 'quote'.
// Add a new object to publish a post.

export const posts = [
  // {
  //   slug: 'forward-deployed',
  //   title: 'What \u201cforward-deployed\u201d really means',
  //   date: 'May 2026',
  //   readingTime: '6 min read',
  //   excerpt:
  //     'Most people picture a forward-deployed engineer as a consultant with a laptop. The reality is closer to a translator who also ships production code.',
  //   body: [
  //     { type: 'p', text: 'sample' },
  //     { type: 'h2', text: 'sample' },
  //     { type: 'p', text: 'sample },
  //     { type: 'quote', text: 'sample' },
  //     { type: 'p', text: 'sample' },
  //   ],
  // },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
