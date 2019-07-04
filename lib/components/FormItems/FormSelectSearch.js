"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Option = _antd.Select.Option;
var timeout;

var FormSelectSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(FormSelectSearch, _Component);

  function FormSelectSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormSelectSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormSelectSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "option", function () {
      var _this$props$selectSea = _this.props.selectSearchOption,
          selectSearchOption = _this$props$selectSea === void 0 ? [] : _this$props$selectSea;
      return selectSearchOption.map(function (v) {
        var showValue = v.showValue,
            severKey = v.severKey;
        return _react.default.createElement(Option, {
          value: severKey,
          key: severKey
        }, showValue);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectCurrency", function (value, option) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      var _this$props = _this.props,
          onChange = _this$props.onChange,
          selectSearchCallBack = _this$props.selectSearchCallBack;
      onChange("".concat(option.props.children));
      timeout = setTimeout(selectSearchCallBack(option.key), 300);
    });

    return _this;
  }

  _createClass(FormSelectSearch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Message = _this$props2.Message,
          disabled = _this$props2.disabled,
          selectSearch = _this$props2.selectSearch,
          value = _this$props2.value;
      return _react.default.createElement(_antd.Select, {
        showSearch: true,
        disabled: disabled,
        value: value,
        defaultActiveFirstOption: false,
        showArrow: false,
        filterOption: false,
        placeholder: Message,
        style: {
          width: '170px'
        },
        onSelect: this.selectCurrency,
        onSearch: selectSearch
      }, this.option());
    }
  }]);

  return FormSelectSearch;
}(_react.Component);

FormSelectSearch.propsType = {
  disabled: _propTypes.default.bool,
  // 是否不可选
  Message: _propTypes.default.string,
  // 默认文字（placeholder
  option: _propTypes.default.arrayOf(_propTypes.object) // 选择框的选项

};
FormSelectSearch.defalutProps = {
  disabled: false,
  Message: '',
  option: []
};
var _default = FormSelectSearch;
exports.default = _default;