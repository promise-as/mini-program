// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '全职高手'
  },

  handleParent(){ // 对象简写
    // console.log('父元素');
  },

  handleChild(){ // 对象简写
    // console.log('子元素');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 做一些初始化工作，发送请求，开启定时器
    // console.log('onLoad 页面加载');

    wx.getSetting({
      success(res){
        console.log(res.authSetting['scope.userInfo']);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady 页面初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow 页面显示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})