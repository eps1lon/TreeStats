'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$argv$slice$m = process.argv.slice(2, 4).map(function (file) {
  return path.join(process.cwd(), file);
}),
    _process$argv$slice$m2 = (0, _slicedToArray3.default)(_process$argv$slice$m, 2),
    dir = _process$argv$slice$m2[0],
    out_file = _process$argv$slice$m2[1];

var public_root = process.argv[4];

var ctime = function ctime(filename) {
  return +filename.match(/^(\d+)/)[1];
};

var sources = fs.readdirSync(dir).filter(function (filename) {
  return (/^.*_get_trees\.csv$/.test(filename)
  );
}).sort(function (a, b) {
  return ctime(b) - ctime(a);
}).map(function (filename) {
  return { filename: path.join(public_root, filename) };
});

fs.writeFileSync(out_file, (0, _stringify2.default)(sources));

console.log('wrote ' + sources.length + ' sources into \'' + out_file + '\'');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY3JpcHRzL2J1aWxkX3NvdXJjZXNfaW5kZXguanMiXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsIm1hcCIsImZpbGUiLCJqb2luIiwiY3dkIiwiZGlyIiwib3V0X2ZpbGUiLCJwdWJsaWNfcm9vdCIsImN0aW1lIiwiZmlsZW5hbWUiLCJtYXRjaCIsInNvdXJjZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsInRlc3QiLCJzb3J0IiwiYSIsImIiLCJ3cml0ZUZpbGVTeW5jIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztJQUFZQSxFOztBQUNaOztJQUFZQyxJOzs7Ozs7NEJBR1JDLFFBQVFDLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZDLFNBQU9MLEtBQUtNLElBQUwsQ0FBVUwsUUFBUU0sR0FBUixFQUFWLEVBQXlCRixJQUF6QixDQUFQO0FBQ0QsQ0FGQyxDOztJQURHRyxHO0lBQUtDLFE7O0FBS1osSUFBTUMsY0FBY1QsUUFBUUMsSUFBUixDQUFhLENBQWIsQ0FBcEI7O0FBRUEsSUFBTVMsUUFBUSxTQUFSQSxLQUFRLENBQUNDLFFBQUQ7QUFBQSxTQUFjLENBQUNBLFNBQVNDLEtBQVQsQ0FBZSxRQUFmLEVBQXlCLENBQXpCLENBQWY7QUFBQSxDQUFkOztBQUVBLElBQU1DLFVBQVVmLEdBQUdnQixXQUFILENBQWVQLEdBQWYsRUFDYlEsTUFEYSxDQUNOLFVBQUNKLFFBQUQsRUFBYztBQUNwQixTQUFPLHVCQUFzQkssSUFBdEIsQ0FBMkJMLFFBQTNCO0FBQVA7QUFDRCxDQUhhLEVBSWJNLElBSmEsQ0FJUixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVVCxNQUFNUyxDQUFOLElBQVdULE1BQU1RLENBQU4sQ0FBckI7QUFBQSxDQUpRLEVBS2JmLEdBTGEsQ0FLVCxVQUFDUSxRQUFELEVBQWM7QUFDakIsU0FBTyxFQUFFQSxVQUFVWixLQUFLTSxJQUFMLENBQVVJLFdBQVYsRUFBdUJFLFFBQXZCLENBQVosRUFBUDtBQUNELENBUGEsQ0FBaEI7O0FBU0FiLEdBQUdzQixhQUFILENBQWlCWixRQUFqQixFQUEyQix5QkFBZUssT0FBZixDQUEzQjs7QUFFQVEsUUFBUUMsR0FBUixZQUFxQlQsUUFBUVUsTUFBN0Isd0JBQXFEZixRQUFyRCIsImZpbGUiOiJidWlsZF9zb3VyY2VzX2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgW2Rpciwgb3V0X2ZpbGVdXG4gID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIsIDQpLm1hcCgoZmlsZSkgPT4ge1xuICAgIHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgZmlsZSk7XG4gIH0pO1xuXG5jb25zdCBwdWJsaWNfcm9vdCA9IHByb2Nlc3MuYXJndls0XTtcblxuY29uc3QgY3RpbWUgPSAoZmlsZW5hbWUpID0+ICtmaWxlbmFtZS5tYXRjaCgvXihcXGQrKS8pWzFdO1xuXG5jb25zdCBzb3VyY2VzID0gZnMucmVhZGRpclN5bmMoZGlyKVxuICAuZmlsdGVyKChmaWxlbmFtZSkgPT4ge1xuICAgIHJldHVybiAvXi4qX2dldF90cmVlc1xcLmNzdiQvLnRlc3QoZmlsZW5hbWUpO1xuICB9KVxuICAuc29ydCgoYSwgYikgPT4gY3RpbWUoYikgLSBjdGltZShhKSlcbiAgLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICByZXR1cm4geyBmaWxlbmFtZTogcGF0aC5qb2luKHB1YmxpY19yb290LCBmaWxlbmFtZSkgfTtcbiAgfSk7XG5cbmZzLndyaXRlRmlsZVN5bmMob3V0X2ZpbGUsIEpTT04uc3RyaW5naWZ5KHNvdXJjZXMpKTtcblxuY29uc29sZS5sb2coYHdyb3RlICR7c291cmNlcy5sZW5ndGh9IHNvdXJjZXMgaW50byAnJHtvdXRfZmlsZX0nYCk7XG4iXX0=