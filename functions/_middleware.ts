// functions/_middleware.ts

export async function onRequest(context: {
    request: Request;
    next: () => Promise<Response>;
  }): Promise<Response> {
    const { request, next } = context;
    const host = request.headers.get('host');
  
    if (host === 'hredz.pages.dev') {
      // Build the new URL by replacing the hostname
      const url = new URL(request.url);
      url.hostname = 'hredz.com';
  
      // Return a permanent redirect (HTTP 301)
      return Response.redirect(url.toString(), 301);
    }
  
    // Proceed with the request if no redirect is needed
    return next();
  }
  