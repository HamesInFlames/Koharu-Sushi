import handler from 'serve-handler';
import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: 'dist',
    rewrites: [
      { source: '/demo1/**', destination: '/demo1/index.html' },
      { source: '/demo2/**', destination: '/demo2/index.html' },
      { source: '/demo3/**', destination: '/demo3/index.html' },
      { source: '/**', destination: '/index.html' }
    ]
  });
});

server.listen(port, () => {
  console.log(`🍣 Koharu Demo Hub running at http://localhost:${port}`);
  console.log(`   Demo 1: http://localhost:${port}/demo1/`);
  console.log(`   Demo 2: http://localhost:${port}/demo2/`);
  console.log(`   Demo 3: http://localhost:${port}/demo3/`);
});
