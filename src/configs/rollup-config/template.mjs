/**
 * @name html页面模板
 */
const template = ({ title }) => `
<!DOCTYPE html>
<html >
  <head>
  <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
`;

export default template;
