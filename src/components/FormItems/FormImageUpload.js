import React, { PureComponent } from 'react';
import { Upload, Icon, message, Input, Modal } from 'antd';
import PropTypes from 'prop-types';
import { isUrl, isColor } from '../../util/utils';

class FormImageUpload extends PureComponent {
  state = {
    loading: false,
    visible: false
  };

  uploadButton = () => {
    const { loading } = this.state;
    return (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">点我上传图片</div>
      </div>
    );
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      const { onChange } = this.props;
      console.log(onChange)
      this.setState({ imageUrl: info.file.response.data, loading: false });
      onChange(info.file.response.data);
    }
  };

  beforeUpload = file => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不能大于2MB!');
    }
    return isLt2M;
  };

  upLoadProps = () => {
    const {imgUploadUrl, imgUploadHeaders} = this.props;
    const props = {
      name: 'file',
      action: imgUploadUrl,
      headers: imgUploadHeaders,
      onChange: this.handleChange,
      showUploadList: false,
      beforeUpload: this.beforeUpload,
    };
    return props;
  };

  change = e => {
    const { onChange } = this.props;
    onChange(e);
  };

  showView = () => {
    // const { imageUrl } = this.state;
    // const { value } = this.props;
    // const style = { width: 100, height: 100 };
    // if (imageUrl) {
    //   return <img style={style} src={imageUrl} alt="resource" />;
    // }
    // if (isUrl(value)) {
    //   return <img style={style} src={value} alt="resource" />;
    // }
    // if (isColor(value)) {
    //   return <div style={{ backgroundColor: `#${value}`, height: 100, width: 100 }} />;
    // }
    return this.uploadButton();
  };

  render() {
    const { Message, value, disabled, isHaveInput, additional } = this.props;
    return (
      <div style={{display: 'flex'}}>
        {isHaveInput === true ? (
          <Input disabled={disabled} placeholder={Message} value={value} onChange={this.change} />
        ) : (
          ''
        )}
        {value && <img onClick={() => {this.setState({visible: true})}} style={{ width: 100, height: 100, marginRight: 20 }} src={value} alt="resource" />}
        <Upload {...additional} disabled={disabled} listType="picture-card" {...this.upLoadProps()}>
          {this.showView()}
        </Upload>

        <Modal footer={null} onCancel={()=>{this.setState({visible: false})}} visible={this.state.visible}>
          <img style={{maxWidth: '100%'}} src={value}  />
        </Modal>
      </div>
    );
  }
}

FormImageUpload.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
};

FormImageUpload.defaultProps = {
  disabled: false,
  Message: '',
};

export default FormImageUpload;
