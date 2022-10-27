import React from "react";

const Blog = () => {
  return (
    <div className=" p-10">
      <div className="container grid grid-cols-12 mx-auto ">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto max-h-screen"
          style={{
            backgroundImage:
              ' url("https://source.unsplash.com/random/640x480")',
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center text-white">
            <h1 className="py-4 text-5xl font-bold">
              Welcome to Better Explanation
            </h1>
            <p className="pb-6">Start your journey with us.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">What is cors?.</h1>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources
            </p>
            <a
              rel="noopener noreferrer"
              href="/"
              className="inline-flex items-center py-2 space-x-2 text-sm text-[#aa076b]"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">
              {" "}
              How does the private route work?
            </h1>
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
            <a
              rel="noopener noreferrer"
              href="/"
              className="inline-flex items-center py-2 space-x-2 text-sm text-[#aa076b]"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <p>
              The Firebase Realtime Database lets you build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience
            </p>
            <p className="font-bold">Open Source Firebase Alternatives</p>
            <ul>
              <li>AWS Amplify</li>
              <li>Kuzzle</li>
              <li>Couchbase</li>
              <li> NativeScript</li>
            </ul>
            <a
              rel="noopener noreferrer"
              href="/"
              className="inline-flex items-center py-2 space-x-2 text-sm text-[#aa076b]"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">
              {" "}
              What is Node? How does Node work?
            </h1>
            <p>
              Node. js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node. js wastes no time or
              resources on waiting for I/O requests to return
            </p>
            <a
              rel="noopener noreferrer"
              href="/"
              className="inline-flex items-center py-2 space-x-2 text-sm text-[#aa076b]"
            >
              <span>Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
