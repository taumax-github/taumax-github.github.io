// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const BASE_URL: string = function() {
  let baseUrl = "https://taumax-github.github.io/sagamax"
  if (import.meta.env.DEV) {
    baseUrl = "http://localhost:4321/sagamax"
  }
  return baseUrl
}()
